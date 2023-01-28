import { Box } from "@chakra-ui/react";
import React from "react";
import Head from "../../Components/ForumsComponents/Head";
import Main from "../../Components/ForumsComponents/Main";

const Forms = () => {
  const hr = {
    borderTop: "1px solid #D3D3D3",
    marginBottom: "1%",
  };
  return (
    <Box>
      <Head />
      <hr style={hr} />
      <Main />
    </Box>
  );
};

export default Forms;
