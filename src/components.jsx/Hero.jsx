import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <>
      <Box maxW="1000px">
        <Text fontSize="xl">
          Paystack helps businesses in Africa get paid by anyone, anywhere in
          the world
        </Text>
        <Heading>
          The first Ai-Generated token.
          <Text color="green" as="span">
            Ever.
          </Text>
        </Heading>
        <Button
          size="lg"
          bg="green"
          mt="24px"
          _hover={{ transform: "scale(1.1)" }}
        >
          Create a free account
        </Button>
      </Box>
    </>
  );
};

export default Hero;
