import React from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import Breadcrumbs from "../components/Breadcrumbs";
import FAQ from '../components/Faq';
import { pricingFaqs } from '../data/pricingFaq';
import Payment from '../components/Payment';
import Header from '../layouts/Header';
import { Helmet } from 'react-helmet';

const Pricing = ({ onTrialClick }) => {
  return (
    <>
          <Helmet>
            <title>Dental Software Pricing | Affordable Plans for Clinics</title>
            <meta name="description" content="Understand the dental software price for ERP4Dentist. Explore transparent, affordable plans designed for all dental clinics. No hidden costs." />
            <meta name="robots" content="index, follow" />
          </Helmet>
    <Container>
      <Breadcrumbs />
    </Container>
        <div className="sticky whatsapp" onClick={() => window.open('https://wa.me/918056437743', 'mywindow')}></div>
          <div className="section-wrap plan">
      <Container>
        <h1>ERP4 Dentist Pricing Plan</h1>
        <h2>No Extra Charges! No Contracts!</h2>
        <Row>
          <Col xl={4} className='mx-auto'>
            <div className='item-bx'>             
              <div className='rs'>₹ 999 <span>/month</span></div>
              <div className='gst'>(GST Extra)</div>
              <div className='sc'>Single Clinic</div>
              <div className='mb30'><a class="btns know" href="#" onClick={(e) => {
            e.preventDefault();
            onTrialClick(); // now this works!
          }}>30 Days Free Trial</a></div>
              <p>No Credit Card Required</p>
              <ul>
                <li>Appointment Scheduler</li>
                <li>Treatment planning</li>
                <li>Patient Management</li>
                <li>Drug Catalog</li>
                <li>E Prescription</li>
                <li>Lab Management</li>
                <li>Billing and Payments</li>
                <li>Reports and Analytics</li>
                <li>Unlimited Users</li>
              </ul>
             </div>
          </Col>             
        </Row>
      </Container>
	</div>

  <div className="section-wrap-btm">
      <Container><div className='get-pri-bx mx-auto'>Get Primary Clinic license at 999/month &<br /> Additional Clinic License at 799/month</div></Container>
  </div>

    {/* <div className="section-wrap-btm digital-mkt">
      <Container>
        <h2>Digital Marketing Package</h2>
        <h3>Package worth INR 15,000 Free for 3 months from the date of first paid subscription</h3>
        <Row>
          <Col lg={3}>
            <div className='item-bx'>
              <figure><Image src='/icons/google-business.svg' alt="" fluid /></figure>
              <h3>Google Business Profile</h3>
              <ul className='star2'>
                <li>Set up Google Profile to show up in Local searches.</li>
              </ul>
            </div>      
          </Col>
          <Col lg={6}>
            <div className='item-bx'>
              <figure><Image src='/icons/website2.svg' alt="" fluid /></figure>
              <h3>Website</h3>
              <ul className='star2'>
                <li>3 page  professional, mobile-friendly site to build your online presence.</li>
                <li>Free hosting for one year</li>
                <li>WhatsApp Integration</li>
                <li>Contact form</li>
                <li>Youtube video embedding</li>
              </ul>
            </div>          
          </Col>
          <Col lg={3}>
            <div className='item-bx'>
              <figure><Image src='/icons/social-media-presence.svg' alt="" fluid /></figure>
              <h3>Social Media Presence</h3>
              <ul className='star2'>
                <li>Social media setup and 12 posts for 3 months to boost your clinic visibility and credibility</li>
              </ul>
            </div>          
          </Col>
        </Row>
      </Container>
    </div>
    <div className="section-wrap ash-bg payment">
      <Container>
        <h2>Payment offers</h2>
        <h3>Pay in advance and enjoy complimentary days!</h3>
        <Payment />
        </Container>
    </div> */}
    <div className="section-wrap ash-bg payment">
      <Container>
        <h2 className='mb0'>Annual Subscription @ INR <span style={{ textDecoration: "line-through" }}>11988</span> (GST Extra)<br />Offer Price @ INR 9999 Annual (GST Extra)</h2>
      </Container>
    </div>
    <div className="section-wrap">
        <h2>Frequently Asked Questions</h2>
        <FAQ faqs={pricingFaqs} />
    </div>
    </>
  );
};

export default Pricing;