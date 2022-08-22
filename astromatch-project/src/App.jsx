import React from "react";
import Router from "./routes/Router";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

const Screen = styled.div`
  border: 1.5px solid black;
  border-radius: 0.5em;
  width: 400px;
  height: 92vh;
  background-color: #ffffff;
  @media screen and (max-width: 480px) {
    width: 100vw;
    height: 100%;
  }
`;

const App = () => {
  return (
    <Container>
      <Screen>
        <Router />
      </Screen>
    </Container>
  );
};

export default App;
