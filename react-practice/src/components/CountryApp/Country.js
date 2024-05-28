import React from "react";
import { Card, Button, Row, Col, CardGroup, Container } from "react-bootstrap";
const Country = (props) => {
  const { country } = props;
  const { name, flags, capital, population, area } = country;

  return (
   
    <Card style={{ width: "18rem", }}>
    <Card.Img variant="top" src={flags.png} alt={name.common} />
    <Card.Body>
      <Card.Title>Name: {name.common}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        Official: {name.official}
      </Card.Subtitle>
      <Card.Text>
        <h6>Population: {population}</h6>
        <h6>Capital: {capital}</h6>
        <h6>Area: {area}</h6>
      </Card.Text>
      <Button variant="info">Details</Button>
    </Card.Body>
  </Card>

  );
};

export default Country;
