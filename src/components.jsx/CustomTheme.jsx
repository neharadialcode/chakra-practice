import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
  colors: {
    green: {
      5: "red",
      100: "blue",
      500: "#4caf50",
    },
  },
});
