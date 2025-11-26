import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap'

export default function Card1({ border }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const dataFetch = async () => {
    const response = await fetch(`http://localhost:3000/name`)
    const name = await response.json()
    setData(name)
    console.log(name)
    setLoading(false)
  }

  useEffect(() => {
    dataFetch()
  }, []);

  if (loading) {
    return null
  }
  else {

    return (
      <>
        <Card border={border} style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{data.firstname} {data.lastname}</Card.Title>
            <Card.Text className="fw-bold mb-0">
              814,408
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    )
  }
}