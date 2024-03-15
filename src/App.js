//checking how bootstrap works in react simple exmaple. First install the dependencies and secondary is run it
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h1>Bootstrap Check</h1>
          <p>Lets go ahead</p>
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
