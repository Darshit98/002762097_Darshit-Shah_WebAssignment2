import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Card, Button } from 'react-bootstrap';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <br/><br/><br/><br/><br/>
      <div className="d-flex justify-content-center align-items-center h-100">
        <Card className="text-center">
          <Card.Body>
            <Card.Title>Contact Me</Card.Title>
            <Card.Text>
              You can contact me on the below given credentials to know more about the courses and build a professional network.
            </Card.Text>
            <Button variant="primary" href="mailto:shah.darshit@notheastern.edu">
              <FaEnvelope className="me-2" />
              Email
            </Button>
            <div className="mt-3">
              <Button variant="outline-primary" href="https://www.linkedin.com/in/darshitshah131998/">
                <FaLinkedin className="me-2" />
                LinkedIn
              </Button>{' '}
              <Button variant="outline-primary" href="https://github.com/Darshit98">
                <FaGithub className="me-2" />
                Github
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Contact;
