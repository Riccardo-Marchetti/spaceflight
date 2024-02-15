/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Result from "../interface/Space";

const SpaceflightDetails = () => {
  const params = useParams();
  const [flightsId, setFlightsId] = useState<Result | null>(null);

  const fetchId = async () => {
    try {
      const response = await fetch(
        `https://api.spaceflightnewsapi.net/v4/articles/${params.spaceId}`
      );
      if (response.ok) {
        const flightId = await response.json();
        console.log(flightId);
        setFlightsId(flightId);
      } else {
        throw new Error("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchId();
  }, [params.spaceId]);

  return (
    <Container>
      <Row>
        <Col className="my-4">
          <h1 className="text-white fw-bold ">SpaceFlights Details</h1>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={8} lg={6} xl={6}>
          {flightsId && (
            <Card style={{ height: "100%", border: "none" }}>
              <Card.Img variant="top" src={flightsId.image_url} />
              <Card.Body>
                <Card.Title>{flightsId.title}</Card.Title>
                <Card.Text>
                  Data di pubblicazione: {flightsId.published_at}
                </Card.Text>
                <Link to={flightsId.url}> Link </Link>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};
export default SpaceflightDetails;
