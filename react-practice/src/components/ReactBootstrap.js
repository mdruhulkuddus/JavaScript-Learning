import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ReactBootstrap = () => {
  return (
    <Card style={{width: '18rem'}} className='p-1'>
      <Card.Body>
      <Card.Title>Bootstrap Card</Card.Title>
      <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam natus ipsam aperiam ut 
        cumque quaerat a accusamus eaque iste officiis.</Card.Text>
      <Button>Read More</Button>
      </Card.Body>
    </Card>
  );
}

export default ReactBootstrap;
