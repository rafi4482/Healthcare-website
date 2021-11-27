import ProgressBar from 'progress';
import './Progress.css'
import React from 'react';
import { Accordion } from 'react-bootstrap';

const Progress = () => {
  return (
    <>

      <div className="heade-align"><h1>FREQUENTLY ASKED QUESTIONS ABOUT US</h1></div>

      <div className="container">
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Do we gurantee cure?</Accordion.Header>
            <Accordion.Body>
              No. But we have a high success rate.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What is the success rate?</Accordion.Header>
            <Accordion.Body>
              around 90 percent of our patients got significantly better after our support.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>How to book an appointment?</Accordion.Header>
            <Accordion.Body>
              Just email or call us with necessary informations.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Is there any vaccination going on?</Accordion.Header>
            <Accordion.Body>
              Yes.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

    </>
  );
};

export default Progress;