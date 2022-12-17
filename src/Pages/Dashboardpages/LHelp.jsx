import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../../Components/Dashboard/Sidebar";

const LHelp = () => {
  return (
    <Box>
      <Heading>Login ka baad wala Help</Heading>

      <Flex>
        <Sidebar/>
        <Box bg="rgb(255,252,246)" border="2px solid" w="100%">
          {/* kaaam isma krna ha  Box ka andar*/}






        </Box>
      </Flex>
    </Box>
  );
};

export default LHelp;
