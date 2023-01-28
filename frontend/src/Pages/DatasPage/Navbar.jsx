import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Fitness_hub_bg_less.png";


const Navbar = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      borderBottom="1px solid"
      borderBottomColor="grey"
      maxWidth="98%"
      margin="auto"
    >
      <Box display="flex" alignItems="center">
        <Box maxWidth="15%">
          <Image src={logo} />
        </Box>
        <Box>
          <Text fontSize="4xl" fontWeight="700">
            Fitnesshub
          </Text>
        </Box>
      </Box>
      <Box
        width="70%"
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Link>Products</Link>
        <Link  >Support</Link>
        <Link>Blog</Link>
        <Link>Forums</Link>
        <Link>About</Link>
        <Button>LOG IN</Button>
      </Box>
    </Box>
  );
};

export default Navbar;
