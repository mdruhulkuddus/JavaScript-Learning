import React from 'react';
import {v4 as uuidv4} from "uuid";
import Country from './Country';
import { Container, Row, Col } from 'react-bootstrap';

const Countries = (props) => {
  return (
    <Container>
         <Row className="justify-content-center mt-5">
      {props.countries.map((country)=>{
        const countryNew = {country, id: uuidv4()};

        return (
            <Col md={3} className="mb-4 d-flex justify-content-center">
            <Country {...countryNew} key={countryNew.id}/>
            </Col>
        );
      })}
      </Row>
    </Container>
  )
}

export default Countries

