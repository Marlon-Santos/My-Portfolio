import React from "react";

import Slider from "react-slick";
import {
  Container,
  ContainerProject,
  ContainerSlide,
  Span,
  Screen
} from "./style";
import test from "../../source/test";

export default class SliderProjects extends React.Component {
  state = {
    nav1: null,
    nav2: null
  };
  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      vertical: true,
      verticalSwiping: true,
      centerMode: true,
      className: "center",
      arrows: false
    };
    let settingsProject = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      vertical: true,
      verticalSwiping: true,
      arrows: false,
      draggable: false
    };
    return (
      <>
        <Span></Span>
        <Container>
          <Slider {...settings} asNavFor={this.state.nav2}>
            <ContainerSlide
              ref={this.ref}
              project={this.props.project || "default"}
            >
              <div>
                <div
                  style={{
                    backgroundImage: `url(${test})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                  }}
                ></div>
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
        <ContainerProject>
          <Slider {...settingsProject} ref={slider => (this.slider2 = slider)}>
            <Screen>
              <div>test</div>
            </Screen>
            <Screen>
              <div>test</div>
            </Screen>
            <Screen>
              <div>test</div>
            </Screen>
            <Screen>
              <div>test</div>
            </Screen>
          </Slider>
        </ContainerProject>
      </>
    );
  }
}
