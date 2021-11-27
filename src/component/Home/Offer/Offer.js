import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Offer = () => {
    return (
        <>
     <div className="heade-align">
         <h1>SPECIAL OFFER</h1>
     </div>
            
            <Card className="container text-center">
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Senior citizens will get a solid 40% discount on our membership. Limited time offer</Card.Title>
    
    
    <Button variant="primary">120$</Button>
  </Card.Body>
  <Card.Footer className="text-muted">14 days remaining</Card.Footer>
</Card>
        </>
    );
};

export default Offer;