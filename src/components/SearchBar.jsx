import React, { useRef } from "react";

//import components
import { Button, Form } from "react-bootstrap";

//import utils
import { fetchHeroes, fetchHero } from "../utils/utils";

function SearchBar({ setter }) {
  let input = useRef("");

  const handleClick = async (e) => {
    e.preventDefault();
    let value = input.current.value;
    if (value === "") {
      return;
    }

    try {
      let heroes = await fetchHeroes(value);
      setter(heroes);
    } catch (err) {
      return console.log(err);
    }
  };
  return (
    <Form>
      <Form.Control
        type="text"
        placeholder="Search Marvel Hero..."
        ref={input}
      />
      <Button type="submit" onClick={handleClick}>
        Search
      </Button>
    </Form>
  );
}

export default SearchBar;
