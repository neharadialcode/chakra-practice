import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { customTheme } from "./components.jsx/CustomTheme";
import HeadingComponents from "./components.jsx/HeadingComponents";
import Hero from "./components.jsx/Hero";

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Hero />
      <HeadingComponents />
    </ChakraProvider>
  );
}

export default App;
