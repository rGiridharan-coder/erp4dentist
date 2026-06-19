import React from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import './components.css';

const SimplifyClinic = ({ onTrialClick }) => {
  return (
        <div className='container'>
            <div className='free-trail-blk'>
                <aside className="cl">
                    <h3>Simplify Your Clinic in Just One Click</h3>
                    <p>Spend less time on admin and more time with patients.</p>
                    <a href='#' className='btns trail' onClick={(e) => {
            e.preventDefault();
            onTrialClick(); // now this works!
          }}>Start Free Trial Now</a>
                </aside>
                <aside className="cl2">
                    <Image src='./images/one-click.webp' alt="" fluid />
                </aside>
            </div>
        </div>
  );
};

export default SimplifyClinic;