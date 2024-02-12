import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { customTheme } from "./components.jsx/CustomTheme";
import Hero from "./components.jsx/Hero";
import Header from "./components.jsx/Header";

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Header />
      <Hero />
    </ChakraProvider>
  );
}

export default App;
