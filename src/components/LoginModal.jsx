import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Container, Row, Col, Image } from "react-bootstrap";
import { Eye, EyeSlash } from 'react-bootstrap-icons';
import './components.css';

const LoginModal = ({ show, handleClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Signin</Modal.Title>
      </Modal.Header>
      <Modal.Body className='signin'>
        <Row>
          <Col md={6}>
            <div className='sign-leftPanel blue-bg'>
              <h2>Transform the Way You Manage Your Clinic</h2>
              <p>Join hundreds of dentists using ERP4Dentist to streamline your practice today!</p>
              <figure><Image src='/images/popup-created-dentist.webp' alt="" fluid /></figure>
            </div>
          </Col>
          <Col md={6} className='d-flex'>
            <Form>
              <h3>Welcome Back to ERP4Dentist</h3>
              <p>Simplify your dental practice - all tools in one place.</p>

              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" autoFocus />
              </Form.Group>

              <Form.Group className="mb-3 password-field">
                <Form.Label>Password</Form.Label>
                <div className="position-relative">
                  <Form.Control
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span
                    className="password-toggle-icon"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeSlash /> : <Eye />}
                  </span>
                </div>
                <p className="fr-gt">Forgot Password?</p>
              </Form.Group>

              <p className="small">Don't have an account? Sign up</p>
              <small>
                This page is protected by Google reCAPTCHA to ensure you're not a bot. <span>Learn more</span>.
              </small>

              <Form.Group>
                <Button variant="sub" type="submit">
                  Sign In
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
