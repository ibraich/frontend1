import React from "react";
import { Button, Container, Jumbotron } from "react-bootstrap";

const Welcome = () => (
  <Container>
    <h1>Images Gallery</h1>
    <p>
      This tool provides a random photograph of a word of your choosing using
      unsplash
    </p>
    <p>
      <Button variant="primary" href="https://unsplash.com" target="_blank">
        learn more
      </Button>
    </p>
  </Container>
);
export default Welcome;
