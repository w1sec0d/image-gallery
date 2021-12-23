import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ word, setWord, handleSubmit }) => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center align-content-center">
        <Col xs={12} md={8}>
          <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Col xs={9}>
                <Form.Control
                  type="text"
                  value={word}
                  onChange={(event) => setWord(event.target.value)}
                  placeholder={word ? word : "Search for new image..."}
                />
              </Col>
              <Button variant="primary" type="submit">
                <SearchIcon />
              </Button>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
