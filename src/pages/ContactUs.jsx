import React from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import SimplifyClinic from '../components/SimplifyClinic';
import FeatureCards from '../components/FeatureCards';
import Breadcrumbs from "../components/Breadcrumbs";
import FAQ from '../components/Faq';
import { pricingFaqs } from '../data/pricingFaq';
import SendMsg from '../components/SendMsg';
import { Helmet } from 'react-helmet';

const ContactUs = () => {
  return (
    <>
          <Helmet>
            <title>Contact Us | ERP4Dentist</title>
            <meta name="description" content="Get in touch with the ERP4Dentist team for product demos, pricing details and support enquiries. We're here to help your dental practice grow." />
            <meta name="robots" content="index, follow" />
          </Helmet>
        <Container>
            <Breadcrumbs />
         </Container>          
        <div className="sticky whatsapp" onClick={() => window.open('https://wa.me/918056437743', 'mywindow')}></div>
    <div className="section-wrap">
        <Container>
            <Row className='contact align-items-stretch'>
                <Col md={6} className='send-msg d-flex'>
                    <div className='h-100'>
                     <SendMsg />
                    </div>
                </Col>
                <Col md={6} className='contact-in d-flex'>
                    <div className='h-100'>
                    <h1>Contact Information</h1>
                    <p>Get in touch with us for queries, support, or collaboration.</p>
                    <div className='list'>
                        <div className='item-img'>
                            <Image src='/icons/call2.svg' alt="" fluid /> 
                        </div>
                        <div className='item-desc'>
                            <p>Call Us<span><a href="tel:918056437743">+91 80564 37743</a></span></p>
                        </div>
                    </div>
                    <div className='list'>
                        <div className='item-img'>
                            <Image src='/icons/mail3.svg' alt="" fluid /> 
                        </div>
                        <div className='item-desc'>
                            <p>Mail Us<span><a href='mailto:support@erp4dentist.com' target="_blank">support@erp4dentist.com</a></span></p>
                        </div>
                    </div>
                    <h4>Social Media</h4>
                    <ul className='soc'>
                        <li className='insta'><a href='https://www.instagram.com/erp4dentist/' target='_blank'>Instagram</a></li>
                        <li className='fb'><a href='https://www.facebook.com/profile.php?id=61565928414162' target='_blank'>facebook</a></li>
                        <li className='youtube'><a href='https://www.youtube.com/@ERP4Dentist' target='_blank'>youtube</a></li> 
                    </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>

    </>
  );
};

export default ContactUs;