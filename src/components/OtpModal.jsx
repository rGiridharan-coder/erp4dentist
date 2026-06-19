import { useState } from 'react';
import { Modal, Button, Form, Row, Col, Image } from 'react-bootstrap';
import { Eye, EyeSlash } from 'react-bootstrap-icons';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';
import './components.css';

const SignUp = ({ show, handleClose }) => {
  const [step, setStep] = useState('signup'); // 'signup' or 'otp'
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [agree, setAgree] = useState(false);
  const [codes, setCodes] = useState(['', '', '', '', '', '']);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // You can add validations here
    setStep('otp');
  };

  const handleOtpChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;
    const updated = [...codes];
    updated[index] = value;
    setCodes(updated);
    if (value && index < codes.length - 1) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleOtpSubmit = () => {
    const otp = codes.join('');
    alert('Entered OTP: ' + otp);
    // TODO: verify OTP
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{step === 'signup' ? 'SignUp' : 'Enter Verification Code'}</Modal.Title>
      </Modal.Header>

      <Modal.Body className='signin signup'>
        <Row>
          <Col md={6}>
            <div className='sign-leftPanel blue-bg'>
              <h2>Transform the Way You Manage Your Clinic</h2>
              <p>Join hundreds of dentists using ERP4Dentist to streamline your practice today!</p>
              <figure><Image src='/images/popup-created-dentist.webp' alt="" fluid /></figure>
            </div>
          </Col>

          <Col md={6}>
            {step === 'signup' ? (
              <Form onSubmit={handleSignupSubmit}>
                <h3>Signup for a 30 day free trial!</h3>
                <p>Already have an account? <a href='https://dental.erp4dentist.com/login' target='_blank'>Log in</a></p>

                <Form.Group className="mb-3">
                  <Form.Label>Full Name*</Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Mobile Number</Form.Label>
                  <PhoneInput
                    country={'in'}
                    value={phone}
                    onChange={setPhone}
                    inputProps={{ name: 'phone', required: true, className: 'form-control' }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" required />
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3 password-field">
                      <Form.Label>Create Password</Form.Label>
                      <div className="position-relative">
                        <Form.Control
                          type={showPassword ? 'text' : 'password'}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <span
                          className="password-toggle-icon"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeSlash /> : <Eye />}
                        </span>
                      </div>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3 password-field">
                      <Form.Label>Confirm Password</Form.Label>
                      <div className="position-relative">
                        <Form.Control
                          type={showPassword ? 'text' : 'password'}
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                        />
                        <span
                          className="password-toggle-icon"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeSlash /> : <Eye />}
                        </span>
                      </div>
                    </Form.Group>
                  </Col>
                </Row>

                <p className='small'>Use 8 or more characters with a mix of letters, numbers & symbols</p>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    label={
                      <>
                        By creating an account, you agree to our{' '}
                        <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.
                      </>
                    }
                    required
                  />
                </Form.Group>

                <Form.Group className="mt-3">
                  <Button variant="sub" type="submit">
                    Get OTP and Continue
                  </Button>
                </Form.Group>
              </Form>
            ) : (
              <Form>
                <Row className="g-2 justify-content-center mb-3">
                  <h3>Verify Your Mobile Number</h3>
                  <p className="mb-3">We've sent a 6-digit code to your mobile.</p>
                  <p className="small">Enter the code below to complete your signup</p>
                  {codes.map((code, index) => (
                    <Col xs={2} key={index}>
                      <Form.Control
                        type="text"
                        value={code}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        id={`otp-${index}`}
                        maxLength={1}
                        className="text-center fs-4 py-2"
                      />
                    </Col>
                  ))}
                  <p className="small">Didn't get it? <a href="#">Resend OTP</a></p>
                </Row>

                <Button variant="primary" className="w-100" onClick={handleOtpSubmit}>
                  Verify
                </Button>
              </Form>
            )}
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default SignUp;
