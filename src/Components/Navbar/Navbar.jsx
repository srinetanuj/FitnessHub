import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import React from "react";
import logo from "../../Assets/Fitness_hub_bg_less.png";
import { Link} from "react-router-dom";


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
        <Link to="/products">Products</Link>
        <Link to="/support">Support</Link>
        <Link to="/blog">Blog</Link>
        <Link to="forums">Forums</Link>
        <Link to="/about">About</Link>
        <Button >LOG IN</Button>
      </Box>
    </Box>
  );
};

export default Navbar;
