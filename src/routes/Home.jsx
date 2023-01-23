import React, { Component, useState } from "react";
import { Col, Row } from "react-bootstrap";

// import components
import Container from "react-bootstrap/Container";
import SearchBar from "../components/SearchBar";
import HeroCard from "../components/HeroCard";

const IMAGE_SIZE = "standard_fantastic";

export default function Home() {
  const [heroes, setHeroes] = useState([]);

  let cards;

  if (heroes) {
    cards = heroes.map((hero, index) => (
      <Col xs="4">
        <HeroCard
          key={index}
          id={hero.id}
          thumbnail={`${hero.thumbnail.path}/${IMAGE_SIZE}.${hero.thumbnail.extension}`}
          name={hero.name}
        />
      </Col>
    ));
  }
  return (
    <Container>
      <h1>Discover Your Favourite Marvel Heroes</h1>
      <SearchBar setter={setHeroes}></SearchBar>
      <Row>{cards ? cards : null}</Row>
    </Container>
  );
}
