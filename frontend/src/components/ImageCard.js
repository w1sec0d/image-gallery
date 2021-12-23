import React from "react";
import { Card, Button, Row } from "react-bootstrap";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";

const ImageCard = ({ image, deleteImage, saveImage }) => {
  return (
    <Card style={{ width: "18rem", margin: "auto" }}>
      <Card.Img variant="top" src={image.urls.small} />
      <Card.Body>
        <Card.Title>
          {image.title ? image.title.toUpperCase() : image.alt_description}
        </Card.Title>
        <Card.Text>
          {image.description ? image.description : image.alt_description}
        </Card.Text>
        <Row style={{ justifyContent: "space-evenly" }}>
          {!image.saved && (
            <Button
              variant="primary"
              onClick={() => saveImage(image.id)}
              style={{ display: "flex" }}
            >
              <SaveIcon />
              Save
            </Button>
          )}
          <Button
            variant="danger"
            onClick={() => deleteImage(image.id)}
            style={{ display: "flex" }}
          >
            <DeleteIcon />
            Delete
          </Button>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
