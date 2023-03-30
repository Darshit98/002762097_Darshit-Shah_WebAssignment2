import React from 'react';
import Navbar from '../Navbar/Navbar';
import myImg from '../images/kevin-bhagat-zNRITe8NPqY-unsplash.jpg'
import myImg2 from '../images/istockphoto-1305999733-170667a.jpg'

const Home = () => {
  return (
    <div>
      <Navbar /><br/><br/><br/>
      <table style={{padding: "20px",  width: '80%', verticalAlign: 'top', margin:'auto' }}>
        <tr>
          <td width="50%"> 
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={myImg}
              alt="Web Design and User Experience"
              width='900px'
            />
          </td>
          <td width="50%">
            <h2 className="font-weight-light">Why Northeastern University?</h2>
            <p>
            Northeastern students value Cooperative Education (co-op for short) as a key differentiator in their academic experience. 
            Because co-ops are full-time and typically six months long, they truly get a sense of the professional world and develop 
            the skills needed to be successful in today's global business environment. Through co-op you will begin to define and live 
            your professional purpose (and even rule out what you don't like). The year+ of professional experience you'll graduate with
            will give you a heads up on the competition so you're ready to take on the world!
            </p>
          </td>
        </tr>
        <tr>
          <td width="50%">
            <h2 className="font-weight-light">Why Web Design and User Experience?</h2>
            <p>
              With the rise of digital technology, businesses need to provide
              customers with engaging and intuitive experiences. This course
              will provide you with the knowledge and skills to create visually
              appealing websites and interfaces that are easy to use and
              navigate. You will learn the concepts and tools used by
              professional web designers and user experience practitioners to
              create effective designs that meet user needs and business goals.
            </p>
          </td>
          <td width="50%">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={myImg2}
              alt="Why Web Design and User Experience?"
              width='900px'
            />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Home;
