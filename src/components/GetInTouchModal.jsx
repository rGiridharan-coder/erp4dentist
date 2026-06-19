import React from 'react';
import { Modal } from 'react-bootstrap';
import GetInTouch from './GetInTouch';

const GetInTouchModal = ({ show, onClose }) => {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Get a Demo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <GetInTouch />
      </Modal.Body>
    </Modal>
  );
};

export default GetInTouchModal;
