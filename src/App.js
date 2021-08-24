import React from "react";
import { Container } from "@chakra-ui/react";
import Calculator from "./Calculator";

function App() {
  return (
    <Container
      background="hsl(185, 41%, 84%)"
      maxW="container.2xl"
      p={0}
      m={0}
      height={{ md: "100vh" }}
      fontFamily="Space Mono"
      fontWeight="700"
    >
      <Calculator />
    </Container>
  );
}

export default App;
