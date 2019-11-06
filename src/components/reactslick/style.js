import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 265px;
  position: relative;
  overflow: visible;
  .slick-center {
    > div {
      > div {
        > div {
          > div {
            background-color: red;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
`;

export const ContainerSlide = styled.div`
  position: relative;
  overflow: visible;
  height: ${window.innerHeight / 3 + "px"};
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    > div {
      position: absolute;
      width: 70%;
      border-radius: 50%;
      height: 200px;
      background-color: black;
    }
  }
`;

export const Span = styled.div`
  position: absolute;
  left: 125px;
  height: 100%;
  width: 20px;
  border: 4px dotted black;
  top: 30px;
`;
