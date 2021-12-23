/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";
import ImageCard from "./components/ImageCard";
import Welcome from "./components/Welcome";
import { Container, Row, Col } from "react-bootstrap";

import "./appStyle.css";
import { red } from "@mui/material/colors";

// const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const App = () => {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);

  const getSavedImages = async () => {
    try {
      let response = await axios.get(`${API_URL}/images`);
      setImages(response.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSavedImages();
  }, []);

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.get(`${API_URL}/new-image?query=${word}`);
      setImages([{ ...res.data, title: word }, ...images]);
    } catch (error) {
      console.error(error);
    }
    setWord("");
  };

  const handleDeleteImage = async (id) => {
    try {
      const res = await axios.delete(`${API_URL}/images/${id}`);
      if (res.data?.deleted_id) {
        setImages(
          images.filter((image) => {
            return image.id !== id;
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSaveImage = async (id) => {
    let imageToBeSaved = images.find((image) => image.id === id);
    imageToBeSaved.saved = true;
    try {
      let response = await axios.post(`${API_URL}/images`, imageToBeSaved);
      if (response.data?.inserted_id) {
        setImages(
          images.map((image) =>
            image.id === id ? { ...image, saved: true } : image
          )
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <Header title="Image Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <Container className="mt-4 justify-content-center align-content-center">
        {images.length ? (
          <Row xs={1} md={2} lg={3}>
            {images.map((image, index) => (
              <Col key={index} className="pb-3">
                <ImageCard
                  image={image}
                  saveImage={handleSaveImage}
                  deleteImage={handleDeleteImage}
                />
              </Col>
            ))}
          </Row>
        ) : (
          <Welcome />
        )}
      </Container>
    </div>
  );
};

export default App;
