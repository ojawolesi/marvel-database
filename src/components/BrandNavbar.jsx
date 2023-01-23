import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React, { useState } from "react";
import "./BrandNavbar.css";

function BrandNavbar() {
  const [dropdown, setDropdown] = useState(true);
  const showDropdown = () => setDropdown(!dropdown);
  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/marvel-comics-logo.png"
              width="50"
              className="d-inline-block align-top"
              alt="Marvel Comics logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <i
              onClick={showDropdown}
              className={dropdown ? "fa fa-bars" : "fa fa-times"}
            ></i>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandNavbar;
