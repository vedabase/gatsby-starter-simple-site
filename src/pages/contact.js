import React from "react"
import Container from "../components/container";
import Header from "../components/header"
import NavigationMenu from "../components/navigation-menu";

export default () => (
  <Container>
    <Header headerText="Contact"></Header>
    <NavigationMenu></NavigationMenu>
    <p>Send us a message!</p>
  </Container>
)