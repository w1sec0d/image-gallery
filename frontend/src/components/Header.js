import React from "react"
import { Navbar, Container } from "react-bootstrap"
import {ReactComponent as Logo} from "../images/logo.svg"

const Header = () => {
  return (
    <Navbar variant="light" style={{background:"#FDFDFD"}}>
      <Container>
        <Logo style={{maxWidth:"12rem", maxHeigth: "2rem"}}/>
      </Container>
    </Navbar>
  )
}

export default Header
