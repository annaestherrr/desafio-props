import React, { Component } from "react";
import About from "./components/About"

import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 40px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStyle />
        <About nome="Anna" idade="22" estudando="Props"/>
      </Container>
    );
  }
}

export default App;