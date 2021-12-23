import React from "react";
import { Spinner as Loader } from "react-bootstrap";

const Spinner = () => {
  return (
    <Loader
      variant="primary"
      animation="border"
      style={{
        position: "absolute",
        width: "4rem",
        height: "4rem",
        top: "calc(50% - 2rem)",
        left: "calc(50% - 2rem)",
      }}
    />
  );
};

export default Spinner;
