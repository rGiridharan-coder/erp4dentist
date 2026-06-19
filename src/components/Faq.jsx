import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = ({ faqs }) => {
  return (
    <Accordion defaultActiveKey="0" flush>
      {faqs.map((faq, index) => (
        <Accordion.Item eventKey={index.toString()} key={index}>
          <Accordion.Header as="h3">{faq.question}</Accordion.Header>
          {/* <Accordion.Header>{faq.question}</Accordion.Header> */}
          <Accordion.Body>{faq.answer}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default FAQ;