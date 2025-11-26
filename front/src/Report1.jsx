import { useState } from 'react'
import Table1 from './Table1'
import Table2 from './Table2'
import Card1 from './Card1'
import { Button, Col, Row, Container } from 'react-bootstrap/'

import './App.css';

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}

export default function Report1() {

  const [currentDate, setCurrentDate] = useState(getDate());

  return (

    <Container fluid>
      <Container className="p-5 mb-4 bg-light rounded-3">
        <h1 className="header">DR4 - TTI Initial Load import errors</h1>
        <p>generated on {currentDate}</p>
      </Container>
      <Row className="my-2">
        <Col></Col>
        <Col>
          <Card1 border='primary' />
        </Col>
        <Col>
          <Card1 border='danger' />
        </Col>
        <Col>
          <Card1 border='info' />
        </Col>
        <Col></Col>
      </Row>
      <Row className="my-2">
        <Col></Col>
        <Col xs={8}>
          <Table1 />
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={8}>
          <Table2 />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )

}