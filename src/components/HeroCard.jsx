import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

export default function HeroCard(props) {
  return (
    <Link to={`${props.id}`}>
      <Card>
        <img src={props.thumbnail} alt="thumbnail" />
        <h1 className="card-name">{props.name}</h1>
      </Card>
    </Link>
  );
}
