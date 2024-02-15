import { Card } from "react-bootstrap";
import Result from "../interface/Space";

interface spaceFlights {
  flight: Result;
}

const SpaceFlights = ({ flight }: spaceFlights) => {
  return (
    <Card style={{ height: "100%", border: "none" }}>
      <Card.Img
        variant="top"
        src={flight.image_url}
        style={{ height: "200px", backgroundSize: "cover" }}
      />
      <Card.Body>
        <Card.Title>{flight.title}</Card.Title>
        <Card.Text>Data di pubblicazione: {flight.published_at}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default SpaceFlights;
