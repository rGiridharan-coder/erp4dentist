import React, { useState, useEffect,  useRef  } from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import Breadcrumbs from "../../components/Breadcrumbs";
import FAQ from '../../components/Faq'
import { billFaq } from '../../data/billFaq';
import Header from '../../layouts/Header';
import { Helmet } from 'react-helmet';
import SmarterDental from '../../components/SmarterDental';
import WorksBilling from '../../components/WorksBilling';
import GetInTouchModal from '../../components/GetInTouchModal';

const BillingPayments = ({ onTrialClick }) => {

    const location = useLocation();
        // ⛳ Used to avoid re-opening modal after it's closed once
        const hasShownModal = useRef(false);

        const [showDemoModal, setShowDemoModal] = useState(false); // <-- Modal state

        const handleDemoClick = (e) => {
        e.preventDefault();
        setShowDemoModal(true);
    };
  return (
    <>
    <Helmet>
        <title>Dental Billing & Payments Software | Faster Transactions</title>
        <meta name="description" content="Secure dental billing & payments software built to support accurate invoicing and smooth payment management for clinics." />
        <meta name="robots" content="index, follow" />
    </Helmet>
    <Container>
      <Breadcrumbs />
    </Container>
        <div className="sticky whatsapp" onClick={() => window.open('https://wa.me/918056437743', 'mywindow')}></div>
            
            <div className='section-wrap'>
                <div className='img-cnt-bx aptScd'>
                    <div className='container'>
                        <Row className='align-items-center aptScd-in'>
                            <Col lg={7} className='text-left'>
                                <h2>Dental Patient Billing & Payment Software</h2>
                                <p>Smart Billing and Payments Simplified</p>
                                <div className="btn-wrap">
                                    <a className='btnRad blue mr20' href='#' onClick={handleDemoClick}>Schedule Demo</a>
                                    <a className='btnRad wht' href='/contact'>Contact Us</a>
                                </div>
                            </Col>
                            <Col lg={5} className='text-center'>
                            <figure><iframe width="100%" height="315" src="https://www.youtube.com/embed/8QL6tzGt5bA?si=UzSdaRfb9GpJjTwq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></figure>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
    <div className="section-wrap features cloud">
      <Container>
        <h2 className='text-center'>Dental Billing & Payments Software</h2>
        <p className='fw-bold text-center'>Smart billing and payment management made simple for every dental clinic.</p>
        <p className='small text-center'>ERP4 Dentist helps clinics handle billing with accuracy and speed. From generating invoices to tracking payments and outstanding balances, it simplifies financial management while giving patients flexible payment options, making collections smoother and clinic operations more efficient.</p>
      </Container>
    </div>

    <div className="section-wrap helpsU">
      <Container>
        <Row className='align-items-center'>
            <Col lg={6}>
                <figure><Image src='/images/helpsU_billing.png' alt="" fluid /></figure>
            </Col>
            <Col lg={6}>
            <h2 className='text-left'>How Billing and Payments Help You</h2>
            <ul>
                <li>
                    <label>Accurate Invoicing:</label>
                    <p>Generate error-free bills instantly after treatments.</p>
                </li>
                <li>
                    <label>Time-Saving:</label>
                    <p>Faster billing and payment processing.</p>
                </li>
                <li>
                    <label>Outstanding Balance Tracking:</label>
                    <p>Monitor pending payments and follow up easily.</p>
                </li>
                <li>
                    <label>Financial Transparency:</label>
                    <p>Maintain clear records of all transactions for clinics and patients.</p>
                </li>
                <li>
                    <label>Reduced Errors:</label>
                    <p>Avoid manual calculation mistakes with automated billing.</p>
                </li>
                <li>
                    <label>Better Patient Experience:</label>
                    <p>Provide quick, hassle-free billing at checkout.</p>
                </li>
            </ul>
            
            </Col>
        </Row>
      </Container>
    </div>
    <div className="section-wrap-btm benfits">
      <Container>
        <h2>Benefits of Billing and Payments</h2>
                <Row className='justify-content-center'>
                    <Col lg={3} sm={6}>
                        <div className='bx shd  text-center'>
                            <figure><Image src='/icons/easyScheduling.svg' alt="" /></figure>
                            <h3>Accurate Billing</h3>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className='bx shd  text-center'>
                            <figure><Image src='/icons/automated.svg' alt="" /></figure>
                            <h3>Faster Collections</h3>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className='bx shd  text-center'>
                            <figure><Image src='/icons/optimizedClinic.svg' alt="" /></figure>
                            <h3>Outstanding Balance Management</h3>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className='bx shd  text-center'>
                            <figure><Image src='/icons/smartInsights.svg' alt="" /></figure>
                            <h3>Better Patient Experience</h3>
                        </div>
                    </Col>
                </Row>
       </Container>
    </div>

    <div className="section-wrap ash-bg howWorks">
        <h2>How it works</h2>
        <WorksBilling />
    </div>
    
        <div className='section-wrap other-features'>
            <div className='container'>
            <h2>We also have other features</h2>
                <Row className='justify-content-center'>
                    <Col lg={3} md={4}>
                        <div className='bx shd text-center'>
                            <figure><Image src='/icons/tmtPlanning.svg' alt="" /></figure>
                            <h3>Reports and Analytics</h3>
                            <a href='/features/reports-analytics' className='btn-oval'>Know More</a>
                        </div>
                    </Col>
                    <Col lg={3} md={4}>
                        <div className='bx shd text-center'>
                            <figure><Image src='/icons/patientMgt.svg' alt="" /></figure>
                            <h3>Appointment Scheduling</h3>
                            <a href='/features/appointment-scheduling' className='btn-oval'>Know More</a>
                        </div>
                    </Col>
                    <Col lg={3} md={4}>
                        <div className='bx shd text-center'>
                            <figure><Image src='/icons/unlimited-users.svg' alt="" /></figure>
                            <h3>Unlimited Users</h3>
                            <a href='/features/unlimited-users' className='btn-oval'>Know More</a>
                        </div>
                    </Col>
                </Row>
                <div className='btn-wrap'><a href='/features' className='btn-oval big'>Discover All Features</a></div>
            </div>
        </div>
    <div className="section-wrap ash-bg">
        <h2>Frequently Asked Questions</h2>
        <FAQ faqs={billFaq} />
    </div>
    <div className='section-wrap'>
        <SmarterDental onTrialClick={onTrialClick}/>
    </div>
    <GetInTouchModal show={showDemoModal} onClose={() => setShowDemoModal(false)} />
    </>
  );
};

export default BillingPayments;