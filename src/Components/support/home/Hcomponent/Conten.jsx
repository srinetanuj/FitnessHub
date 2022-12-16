import React from "react";
import { Grid, GridItem, Heading, Text, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <>
      <Grid
      m={20}
        justifyContent="space-around"
        textAlign="center"
        gap={6}
        templateRows={{base:"repeat(4,1fr)",md:"repeat(2, 1fr)"}}
        templateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)", lg:"repeat(3,1fr)"}}
        
        color="rgba(255, 103, 51, 1)"
      >
        <GridItem border="1px solid rgba(255, 103, 51, 1)" colSpan={1}
         _hover={{
          backgroundColor: "rgba(255, 103, 51, 1)",
          color: "white", 
        }}
        >
          <Link to="/web">
          <Box p={5} >
            <Heading mb={2} size="sm" as="h4">
             Web version
            </Heading>
            <Text> User Mannul for Cronometer on Web</Text>
          </Box>
          </Link>
        </GridItem>
        <GridItem border="1px solid rgba(255, 103, 51, 1)" colSpan={1}
         _hover={{
          backgroundColor: "rgba(255, 103, 51, 1)",
          color: "white",
        }}>
          <Link to="/mobile">
          <Box p={5}>
            <Heading mb={2} size="sm" as="h4">
              Mobile App
            </Heading>
            <Text>User Mannul for Cronometer on Mobile</Text>
          </Box>
          </Link>
          
        </GridItem>
        <GridItem border="1px solid rgba(255, 103, 51, 1)" colSpan={1}
         _hover={{
          backgroundColor: "rgba(255, 103, 51, 1)",
          color: "white",
        }} >
          <Link to="/professional">
          <Box p={5}>
            <Heading mb={2} size="sm" as="h4">
              Professional Version
            </Heading>
            <Text>User Mannul for Cronometer Pro</Text>
          </Box>
          </Link>
        </GridItem>
        <GridItem border="1px solid rgba(255, 103, 51, 1)" colSpan={{base:"1",lg:"3"}}
         _hover={{
          backgroundColor: "rgba(255, 103, 51, 1)",
          color: "white",
        }} >
          <Link to ="/faq">
          <Box p={5}>
            <Heading mb={2} size="sm" as="h4">
              FAQ
            </Heading>
            <Text>Cronometer Frequently Asked Question</Text>
          </Box>
          </Link>
        </GridItem>
      </Grid>
      <hr style={{width:"90%",margin:"auto"}}/>
    <hr style={{margin:"70px 0",}}/>
    <Link p={50} to="/support">Coronometer</Link>
    </>
  );
};

export default Content;
