import React from "react";
import { Button, Jumbotron } from "react-bootstrap";

const Welcome = () => {
  return (
    <Jumbotron style={{ background: "#F7FBFE", maxWidth: "600px" }}>
      <h1>Image Gallery</h1>
      <p>
        This is a simple application that retrieves photos using Unsplash API.
        In order to start enter any search term in the input field
      </p>
      <p>
        <Button variant="primary" href="https://unsplash.com" target="_blank">
          Learn more
        </Button>
      </p>
    </Jumbotron>
  );
};

export default Welcome;
