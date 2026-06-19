import React from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import SimplifyClinic from '../components/SimplifyClinic';
import FeatureCards from '../components/FeatureCards';
import Breadcrumbs from "../components/Breadcrumbs";
import ScrollToHash from '../components/ScrollToHash';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../layouts/Header';
import { Helmet } from 'react-helmet';

const Features = ({ onTrialClick }) => {
  const location = useLocation();
  const [scrollToId, setScrollToId] = useState(null);

  useEffect(() => {
    if (location.state?.scrollToId) {
      setScrollToId(location.state.scrollToId);
    }
  }, [location]);

  return (
    <>
          <Helmet>
            <title>Dental Software Features | Simplify Daily Operations</title>
            <meta name="description" content="Our ERP4 dental software features are designed to improve productivity, automate workflows, and give clinics better control every day." />
            <meta name="robots" content="index, follow" />
          </Helmet>
        <div className='banner features'>
            <h1>Powerful Features to Simplify Your Dental Practice</h1>
            <div className='btn-wrap'><a className='btns pry' href='#' onClick={(e) => {
            e.preventDefault();
            onTrialClick(); // now this works!
          }}>START YOUR FREE TRIAL</a></div>
        </div>
        <div className="sticky whatsapp" onClick={() => window.open('https://wa.me/918056437743', 'mywindow')}></div>
        <Container>
            <Breadcrumbs />
         </Container>   
          <ScrollToHash />
      <FeatureCards scrollToId={scrollToId} />  
    <div className='section-wrap mt-40'>
        <SimplifyClinic onTrialClick={onTrialClick}/>
    </div>
    </>
  );
};

export default Features;