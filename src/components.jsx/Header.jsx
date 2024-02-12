import { Box, Button, Flex, Link } from "@chakra-ui/react";
import React from "react";
import { Logo, RightArrow } from "./Icons";

const Header = () => {
  return (
    <>
      <Box bg="green">
        <Box maxW="1140px" mx="auto" py="20px">
          <Flex justifyContent="space-between" alignItems="center">
            <Box>
              <Link>
                <Logo />
              </Link>
            </Box>
            <Box>
              <Link px="10px">Home</Link>
              <Link px="10px">About </Link>
              <Link px="10px">Blog</Link>
              <Button mx="10px">
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
