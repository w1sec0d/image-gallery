import React from "react"
import { Navbar, Container } from "react-bootstrap"
import {ReactComponent as Logo} from "../images/logo.svg"

const Header = ({title}) => {
  return (
    <Navbar variant="light" style={{background:"#FDFDFD"}}>
      <Container>
        <Logo alt={title} style={{maxWidth:"12rem", maxHeigth: "2rem"}}/>
      </Container>
    </Navbar>
  )
}

export default Header
