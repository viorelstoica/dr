import { useState } from 'react';
import { Card } from 'react-bootstrap'

export default function Card1({ border }) {
  return (
    <>
      <Card border={border} style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Total Success</Card.Title>
          <Card.Text>
            <h3 class="fw-bold mb-0">814,408</h3>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}