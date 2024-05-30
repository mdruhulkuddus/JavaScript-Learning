import React, { useEffect, useState } from "react";
import Countries from "./Countries";
import Search from "./Search";
import {Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

const url = `https://restcountries.com/v3.1/all`;

const HomeCountryAPP = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const fetchData = async (url) => {
    setIsLoading(true);

    try {
      //   const response = await fetch(url);
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilteredCountries(data);
      setIsLoading(false);
      setError(null);
      // console.log(countries);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const handleRemoveCounntry = (name) => {
    const filtered = filteredCountries.filter(
      (country) => country.name.common !== name
    );

    setFilteredCountries(filtered);
    //  setCountries(filtered)
    // alert(name);
    // console.log(filteredCountries);
  };

  const handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase();

    const newCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });
    // console.log(newCountries);
    setFilteredCountries(newCountries);
    // setCountries(newCountries);
  };

  return (
    <>
      {/* <h1>Courtrey app - {filteredCountries && filteredCountries.length}</h1> */}
      <Navbar expand="lg" className="bg-body-tertiary" sticky="top" >
      <Container fluid>
        <Navbar.Brand href="#">Courtrey Info</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">API</Nav.Link>
            <Nav.Link href="#action2">{filteredCountries && filteredCountries.length}</Nav.Link>
           
          </Nav>
          <Navbar.Text className="me-3 ">
          <MdOutlineLightMode /> Light Mode
          <MdOutlineDarkMode /> Dark Mode
          </Navbar.Text>
          
          <Search onSearch={handleSearch} />
          

        </Navbar.Collapse>
      </Container>
    </Navbar>

     
      {isLoading && <h2 className="text-center">Loading......</h2>}
      {error && <h2 className="text-center">{error.message}</h2>}
      {countries && (
        <Countries
          // countries={countries}
          countries={filteredCountries}
          onRemoveCounrty={handleRemoveCounntry}
        />
      )}
    </>
  );
};

export default HomeCountryAPP;
