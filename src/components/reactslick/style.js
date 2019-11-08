import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 265px;
  display: flex;
  justify-content: space-between;
  z-index: 4;
  .slick-center {
    > div {
      > div {
        > div {
          > div {
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

  z-index: 3;
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
      z-index: 2;
    }
  }
`;

export const Span = styled.div`
  position: absolute;
  left: 125px;
  height: 100%;
  width: 20px;
  border: 4px dotted black;
  top: 0;
  z-index: 1;
`;

export const ContainerProject = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: flex-start;
  text-align: center;
  overflow: hidden;
  padding: 0;
`;
export const Screen = styled.div`
  height: 100%;
  width: 100%;
  div {
    height: ${window.innerHeight + "px"};
    width: 100%;
  }
`;
