import { useState } from 'react'
import Table3 from './Table3'
import { Button, Col, Row, Container } from 'react-bootstrap/'

import './App.css';

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}

export default function Report2() {

  const [currentDate, setCurrentDate] = useState(getDate());

  return (

    <Container fluid>
      <Container className="p-5 mb-4 bg-light rounded-3">
        <h1 className="header">DR4 - TTI Initial Load import errors</h1>
        <p>generated on {currentDate}</p>
      </Container>
      <Row className="my-2">
        <Col></Col>
        <Col xs={8}>
          <Table3 />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )

}