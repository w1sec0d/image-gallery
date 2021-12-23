import React from "react";
import { Card, Button, Row, Nav } from "react-bootstrap";
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
      <Card.Footer className="text-muted text-center">
        {image.user.portfolio_url ? (
          <Nav.Link href={image.user.portfolio_url} target="_blank">
            <p style={{ margin: "0" }}>{image.user.name}</p>
          </Nav.Link>
        ) : image.user.name ? (
          <p style={{ margin: "0" }}>{image.user.name}</p>
        ) : (
          <p style={{ margin: "0" }}>No author name</p>
        )}
      </Card.Footer>
    </Card>
  );
};

export default ImageCard;
