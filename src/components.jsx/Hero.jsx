import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <div>
      <Stack spacing={6}>
        <Heading as="h1" size="4xl" noOfLines={1}>
          (4xl) In love with React & Next
        </Heading>
        <Heading as="h2" size="3xl" noOfLines={1}>
          (3xl) In love with React & Next
        </Heading>
        <Heading as="h2" size="2xl">
          (2xl) In love with React & Next
        </Heading>
        <Heading as="h2" size="xl">
          (xl) In love with React & Next
        </Heading>
        <Heading as="h3" size="lg">
          (lg) In love with React & Next
        </Heading>
        <Heading as="h4" size="md">
          (md) In love with React & Next
        </Heading>
        <Heading as="h5" size="sm">
          (sm) In love with React & Next
        </Heading>
        <Heading as="h6" size="xs" fontSize="50px">
          (xs) In love with React & Next
        </Heading>
      </Stack>
      <Box maxW="32rem">
        <Text fontSize="xl">
          Paystack helps businesses in Africa get paid by anyone, anywhere in
          the world
        </Text>
        <Button size="lg" colorScheme="green.500" mt="24px">
          Create a free account
        </Button>
      </Box>
    </div>
  );
};

export default Hero;
