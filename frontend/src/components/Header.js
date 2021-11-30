import React from "react"
import { Navbar, Container } from "react-bootstrap"

const navbarStyle = {
  backgroundColor: "lightblue",
}
const Header = ({ title = "Header Title" }) => {
  return (
    <Navbar variant="light" style={navbarStyle}>
      <Container>
        <Navbar.Brand href="/">{title}</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Header
