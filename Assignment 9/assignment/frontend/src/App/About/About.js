import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Card, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="card bg-primary text-white my-5 py-4 text-center" style={{ width: "80%", margin: "0 auto" }}>
        <div className="card-body">
          <h5 className="card-title">About me</h5>
          <p className="card-text">
          Hi, my name is Darshit Shah and I am from India. I have completed my B.Tech in Information Technology from University of Mumbai in the year 2019. Since then I have been working as a Senior Data Quality Engineer at Larsen and Toubro Infotech past 3 years. I have gained extensive experience in process improvement, data analysis, and project management.  I want to transition into a role where I can apply my skills and experience to the engineering and development of machine learning and data engineering.  So to achieve this I decided to pursue Masters in Information Systems from Northeastern University and I have undertaken courses like Application Engineering Development, Database Management and Database Design, and Data Science with Python.
          </p>
        </div>
      </div>

      <Row xs={1} md={2} className="g-4 mx-5">
        <Col>
          <Card className="bg-secondary text-white" style={{ height: '180px' }}>
            <Card.Body>
              <Card.Title className="text-center">Application Engineering Development</Card.Title>
              <Card.Text>
                Takes students in a step-by-step manner through the process of systematically combining UX techniques, business processes, and complex data models to assemble applications that are user-friendly and meet business requirements. Employs the object-oriented paradigm, visual user experience, and system design principles to put together complicated, powerful, real-world applications. 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-secondary text-white" style={{ height: '180px' }}>
            <Card.Body>
              <Card.Title className="text-center">Database Management and Database Design</Card.Title>
              <Card.Text>
                Database Design is a collection of processes that facilitate the designing, development, implementation and maintenance of enterprise data management systems. Properly designed database are easy to maintain, improves data consistency and are cost effective in terms of disk storage space. The database designer decides how the data elements correlate and what data must be stored.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-secondary text-white" style={{ height: '180px' }}>
            <Card.Body>
              <Card.Title className="text-center">Web Design and User Experience Engineering</Card.Title>
              <Card.Text>
              Exposes students to both conceptual and technical aspects of Web design. User experience design is the discipline of creating a useful and usable website or application that is easily navigated and meets the needs of both the site owner and its users. Covers Web standards and best practices.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-secondary text-white" style={{ height: '180px' }}>
            <Card.Body>
              <Card.Title className="text-center">Data Science with Python</Card.Title>
              <Card.Text>
                This Data Science with Python program provides learners with a complete understanding of data analytics tools & techniques. Getting started with Python can help you gain knowledge on data analysis, visualization, NumPy, SciPy, web scraping, and natural language processing.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default About;
