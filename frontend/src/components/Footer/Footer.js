import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="relative flex justify-center w-full bottom-0">
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; Note Nest</Col>
        </Row>
      </Container>
    </div>
  )
};

export default Footer;