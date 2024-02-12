import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <>
      <Box bg="light_green" borderTop="1px solid #cbdcd9">
        <Text fontSize={{ base: "24px", md: "40px", lg: "56px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          nesciunt neque, impedit accusamus consequuntur a dignissimos
          veritatis, ipsum molestias ut facilis at perferendis? Eius, nulla sunt
          mollitia porro id laboriosam.
        </Text>
        <Box
          maxW="1140px"
          mx="auto"
          py="20px"
          px="10px"
          h="100vh"
          textAlign="center"
        >
          <Heading fontSize="3xl" pt="10%">
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
      </Box>
    </>
  );
};

export default Hero;
