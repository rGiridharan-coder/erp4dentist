import React from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import Breadcrumbs from "../components/Breadcrumbs";
import SendMsg from '../components/SendMsg';

const LandingThankYou = () => {
  return (
    <>
        <Container>
            <Breadcrumbs />
         </Container>          
        <div className="sticky whatsapp" onClick={() => window.open('https://wa.me/919382809420', 'mywindow')}></div>
    <div className="section-wrap">
        <Container>
            <Row className='thank align-items-stretch'>
                <p>Thank you for your registration,<br />please open your registered email id and validate and start exploring ERP4Dentist.</p>            
            </Row>
        </Container>
    </div>

    </>
  );
};

export default LandingThankYou;