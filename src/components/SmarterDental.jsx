import React from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import './components.css';

const SmarterDental = ({ onTrialClick }) => {
  return (
        <div className='container'>
            <div className='free-trail-blk smarter'>
                <aside className="cl">
                    <Image src='../icons/teeth2.svg' alt="" />
                    <h3>The smarter dental patient management system starts here.</h3>
                    <a href='#' onClick={(e) => {
            e.preventDefault();
            onTrialClick(); // now this works!
          }} className='btns trail'>Start Free Trial</a>
                </aside>
                <aside className="cl2">
                    <Image src='../images/calandar.webp' alt="" fluid />
                </aside>
            </div>
        </div>
  );
};

export default SmarterDental;