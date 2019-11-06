import React from "react";

import Slider from "react-slick";
import { Container, ContainerSlide, Span } from "./style";

export default class SliderProjects extends React.Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      vertical: true,
      verticalSwiping: true,
      centerMode: true,
      className: "center"
    };
    return (
      <>
        <Span></Span>
        <Container>
          <Slider {...settings} width="50%">
            <ContainerSlide>
              <div>
                <div></div>
              </div>
            </ContainerSlide>
            <ContainerSlide>
              <div>
                <div></div>
              </div>
            </ContainerSlide>
            <ContainerSlide>
              <div>
                <div></div>
              </div>
            </ContainerSlide>
            <ContainerSlide>
              <div>
                <div></div>
              </div>
            </ContainerSlide>
          </Slider>
        </Container>
      </>
    );
  }
}
