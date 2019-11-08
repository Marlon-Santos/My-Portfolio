import React, { Component } from "react";
import { Container } from "./style";
import Slide from "../../components/reactslick/ReactSlick";
export default class Header extends Component {
  render() {
    return (
      <>
        <Container>
          <Slide />
        </Container>
      </>
    );
  }
}
