import React from "react";
import GlobalStyle from "./style/globalStyle";
import Header from "./screen/Header/header";
import Slide from "./components/reactslick/ReactSlick";
export default function app() {
  return (
    <>
      <GlobalStyle />
      <Slide />
    </>
  );
}
