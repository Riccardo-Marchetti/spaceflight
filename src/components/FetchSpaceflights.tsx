import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SpaceFlights from "./SpaceFlights";
import Result from "../interface/Space";
import { Link } from "react-router-dom";

const FetchSpaceflights = () => {
  const [spaceflights, setSpaceflights] = useState<Result[]>([]);

  const fetchFlights = async () => {
    try {
      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v4/articles/"
      );
      if (response.ok) {
        const arrayOfSpaceFlights = await response.json();
        console.log(arrayOfSpaceFlights);
        setSpaceflights(arrayOfSpaceFlights.results);
      } else {
        throw new Error("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchFlights();
  }, []);

  return (
    <Container>
      <Row>
        <Col className="my-4">
          <h1 className="text-white fw-bold ">SpaceFlights</h1>
        </Col>
      </Row>
      <Row>
        {spaceflights.map((singleSpaceFlights) => (
          <Col
            xs={12}
            sm={6}
            md={6}
            lg={4}
            xl={3}
            className="g-4"
            key={singleSpaceFlights.id}
          >
            <Link
              className="text-decoration-none "
              to={`/spaceflight-details/${singleSpaceFlights.id}`}
            >
              <SpaceFlights flight={singleSpaceFlights} />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default FetchSpaceflights;
