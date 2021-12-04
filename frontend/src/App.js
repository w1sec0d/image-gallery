/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header"
import Search from "./components/Search"
import "./appStyle.css"
import ImageCard from "./components/ImageCard"
import { Container, Row, Col } from "react-bootstrap"

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY

const App = () => {
  const [word, setWord] = useState("")
  const [images, setImages] = useState([])

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((res) => res.json()) //code executed when promise is resolved
      .then((data) => {
        setImages([{ ...data, title: word }, ...images])
      })
      .catch((err) => {
        console.error(err)
      })
    setWord("")
  }

  const handleDeleteImage = (id) => {
    setImages(
      images.filter((image) => {
        return image.id !== id
      })
    )
  }

  return (
    <div className="App">
      <Header title="Image Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <Container className="mt-4">
        <Row xs={1} md={2} lg={3}>
          {images.map((image, index) => (
            <Col key={index} className="pb-3">
              <ImageCard image={image} deleteImage={handleDeleteImage} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default App
