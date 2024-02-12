import { Button, ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./App.css";
import Hero from "./components.jsx/Hero";

function App() {
  const theme = extendTheme({
    colors: {
      green: {
        50: "red",
        100: "blue",
        500: "#4caf50",
      },
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Hero />
      <Button size="lg" bg="green.50" mt="24px">
        Create a free account
      </Button>
    </ChakraProvider>
  );
}

export default App;
