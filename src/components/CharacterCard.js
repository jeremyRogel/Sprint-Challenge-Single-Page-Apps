import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

export default function CharacterCard(props) {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.img} alt="character" />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>{props.location}</CardSubtitle>
          <CardText>{props.species}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}