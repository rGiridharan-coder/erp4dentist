import React from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import Breadcrumbs from "../components/Breadcrumbs";
import { Helmet } from 'react-helmet';

const RefundAndCancellationPolicy = () => {
  return (
    <>
          <Helmet>
            <title>Refund & Cancellation Policy | ERP4Dentist</title>
            <meta name="description" content="Review ERP4Dentist's refund and cancellation policy to understand eligibility, timelines, and terms. Learn how we handle refunds and subscription changes." />
            <meta name="robots" content="index, follow" />
          </Helmet>
        <Container>
            <Breadcrumbs />
         </Container>
    <div className='section-wrap'>
        <Container className='terms'>
            <h1>Refund and Cancellation Policy</h1>
            <p>At ERP4 Dentist, we always aim to meet expectation of our valued Customers with robust Software solution, supported by best in class Customer Services. In the event, if Subscriber is displeased with the services provided, we have a very user friendly & flexible Refund & Cancellation Policy.</p>
            <h2>Refund Policy</h2>
            <p>Subscriber can raise the request for the refund of subscription payment within the first six months of annual subscription & within first 15 days of monthly subscription. Subscriber will be eligible for refund of payment calculated based on Pro-rata basis based on the number of days of usage.</p>
            <p>Refund of Payment will be processed within 7 working days from the date of Request & will be processed to the Bank details provided by Subscriber.</p>
            <p>No Refund requests will be accepted after the stipulated time period mentioned above & User will not be eligible for any refund post the time period mentioned above.</p>
            <h2>Cancellation Policy</h2>
            <p>Subscriber can cancel the subscription without giving any reason within the 15 days of the Payment made. Subscriber will be eligible for refund of full payment made for Subscription.</p>
            <p>Refund of Payment will be processed within 7 working days from the date of Request & will be processed to the Bank details provided by Subscriber.</p>
         </Container>
    </div>

    </>
  );
};

export default RefundAndCancellationPolicy;