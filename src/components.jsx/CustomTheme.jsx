import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
  colors: {
    green: "red",
  },
  gradients: {
    gradient: "linear-gradient(90deg, #4caf50 0%, #2196f3 100%)",
  },
  fontSizes: {
    xs: "14px",
    sm: "18px",
    md: "20px",
    lg: "22px",
    xl: "42px",
    "2xl": "60px",
    "3xl": "80px",
  },
  fonts: {
    body: "'Inter', sans-serif",
    heading: "'Space Grotesk', sans-serif",
  },
});
