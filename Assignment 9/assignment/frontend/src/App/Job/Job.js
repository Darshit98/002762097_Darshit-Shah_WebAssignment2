import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Container, Row, Col, Card } from 'react-bootstrap';
import jobListings from './jobListings';

const Job = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <h1 className='text-center py-3'>What Job Role are you Interested in?</h1>
        <Row xs={1} md={2} className="g-4">
          {jobListings.map((item, idx) => (
            <Col key={idx}>
              <Card style={{ height: '100%' }}>
                <Card.Body>
                  <Card.Title className="text-center">{item.title}</Card.Title>
                  <Card.Text>{item.body}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Job;
