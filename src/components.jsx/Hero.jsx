import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <div>
      <Box maxW="32rem">
        <Text fontSize="xl">
          Paystack helps businesses in Africa get paid by anyone, anywhere in
          the world
        </Text>
        <Button size="lg" bg="green.5" mt="24px">
          Create a free account
        </Button>
      </Box>
    </div>
  );
};

export default Hero;
