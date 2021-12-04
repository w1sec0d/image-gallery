import React from "react"
import { Card, Button } from "react-bootstrap"

const ImageCard = ({ image, deleteImage }) => {
  return (
    <Card style={{ width: "18rem", margin: "auto" }}>
      <Card.Img variant="top" src={image.urls.small} />
      <Card.Body>
        <Card.Title>{image.title.toUpperCase()}</Card.Title>
        <Card.Text>
          {image.description ? image.description : image.alt_description}
        </Card.Text>
        <Button variant="danger" onClick={() => deleteImage(image.id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  )
}

export default ImageCard
