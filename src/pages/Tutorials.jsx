import React, { useState } from 'react';
import { Container, Row } from "react-bootstrap";
import Breadcrumbs from "../components/Breadcrumbs";
import { Helmet } from 'react-helmet';
import YouTubeGallery from "../components/YouTubeGallery";

const Tutorials = () => {
  const [search, setSearch] = useState('');

  return (
    <>
      <Helmet>
        <title>ERP4Dentist Video Tutorials | Learn to Use the Software</title>
        <meta name="description" content="Watch ERP4Dentist video tutorials and learn how to use every feature with step-by-step guidance. Perfect for Dentists, clinic staff and new users." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Container>
        <Breadcrumbs />
      </Container>

      <div className="sticky whatsapp" onClick={() => window.open('https://wa.me/918056437743', 'mywindow')}></div>

      <div className="section-wrap">
        <Container>
          <Row className='tutorial align-items-stretch'>

           
            <div className='h-100'>
              <h1>Welcome to the ERP4Dentist Tutorial!</h1>
              <p>Here, you'll find a complete collection of video tutorials from our official YouTube channel, designed to help you explore and make the best of ERP4Dentist. These step-by-step tutorials simplify every feature for your clinic's operation.</p>
            </div>
 {/* Search Box Inside Row */}
            <div style={{ width: '100%' }} className='search-bx'>
              <input
                type="text"
                placeholder="Search video..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  padding: '10px',
                  width: '100%',
                  maxWidth: '400px',
                  fontSize: '16px',
                  borderRadius: '6px',
                  border: '1px solid #ccc',
                }}
              />
            </div>
            <YouTubeGallery search={search} />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Tutorials;
