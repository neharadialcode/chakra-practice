import { Box, Button, Flex, Link } from "@chakra-ui/react";
import React from "react";
import { Logo, RightArrow } from "./Icons";

const Header = () => {
  return (
    <>
      <Box bg="light_green">
        <Box maxW="1140px" mx="auto" py="20px" px="10px">
          <Flex justifyContent="space-between" alignItems="center">
            <Box>
              <Link>
                <Logo />
              </Link>
            </Box>
            <Box>
              <Link px="20px" fontFamily="roboto">
                Home
              </Link>
              <Link px="20px" fontFamily="roboto">
                About
              </Link>
              <Link px="20px" fontFamily="roboto">
                Blog
              </Link>
              <Button
                _hover={{ opacity: ".7" }}
                mx="10px"
                fontFamily="roboto"
                bg="black"
                color="white"
                fontSize="xs"
                fontWeight="300"
              >
                Launch App <RightArrow />
              </Button>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Header;
