import { Col, Container, ListGroup, Row } from "react-bootstrap";

const CustomFooter = () => {
  return (
    <Container className="mt-5">
      <Row style={{ backgroundColor: "black", height: "70px" }}>
        <Col className="d-flex justify-content-center align-items-center  ">
          <ListGroup className="d-flex flex-row ">
            <ListGroup.Item className="li">Resta aggiornato</ListGroup.Item>
            <ListGroup.Item className="li">Contatti</ListGroup.Item>
            <ListGroup.Item className="li">Telefono: 331394348</ListGroup.Item>
            <ListGroup.Item className="li">Copyright ©</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
export default CustomFooter;
