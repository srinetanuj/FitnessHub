import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Main = () => {
  var data = require("../../db.json");

  const [formdata, setFormdata] = React.useState(data);

  console.log(formdata);

  const handleclick = (e) => {
    console.log(e.target.id);
    localStorage.setItem("key", e.target.id);
  };

  return (
    <Box maxWidth="95%" margin="auto">
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="gray.500" />}
        marginBottom={{ base: 4, md: 8 }}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="#" fontSize={{ base: ".7em", md: "1em" }}>
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Box textAlign="left" maxWidth={{ base: "90%", md: "50%" }}>
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="900"
          color="#FF6733"
          marginBottom={{ base: 1, md: 8 }}
        >
          Fitnesshub Community
        </Text>
        <Text fontSize={{ base: ".7em", md: "1em" }}>
          Home to our ever growing Fitnesshub community! Having problems using
          Fitnesshub? Can't figure something out? Need some encouragement? It's
          all here with our awesome community on the Fitnesshub forums.
        </Text>
      </Box>
      <Box marginBottom={5} display={{ md: "flex" }} gap={10}>
        <Box flexGrow="1" flexBasis="0">
          {formdata.map((el, index) => (
            <Box
              textAlign="left"
              marginTop={2}
              bg={index % 2 == 0 ? "#F5F5F5" : "white"}
              padding={2}
            >
              <Link to="/forms/element" onClick={handleclick}>
                <Text
                  id={el.id}
                  fontSize={{ base: ".9em", md: "lg" }}
                  color="#FF6733"
                >
                  {el.title}
                </Text>
              </Link>
              <Text fontSize={{ base: ".7em", md: "1em" }} marginBottom={3}>
                {el.description}
              </Text>
              <Box
                display="flex"
                gap={4}
                fontSize={{ base: ".4em", md: ".7em" }}
              >
                <Text>{el.discusion.length} Discussions</Text>

                <Text>
                  {el.discusion[0].comments.length * el.discusion.length}{" "}
                  comments
                </Text>
                <Text display="flex" gap={1}>
                  Most recent:
                  <Link>
                    <Text
                      fontWeight="500"
                      _hover={{ textDecoration: "underline" }}
                    >
                      {el.discusion[0].title}
                    </Text>
                  </Link>
                  by
                  <Link>
                    <Text
                      fontWeight="500"
                      _hover={{ textDecoration: "underline" }}
                    >
                      {el.discusion[0].author}
                    </Text>
                  </Link>
                </Text>
                <Text>{el.discusion[0].date}</Text>
              </Box>
            </Box>
          ))}
        </Box>
        <Box flexGrow="1" flexBasis="0" display={{ base: "none", md: "block" }}>
          <Text
            fontSize="lg"
            color="#FF6733"
            fontWeight="500"
            width="fit-content"
          >
            Categories
          </Text>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            maxWidth="40%"
            borderY="1px solid #D3D3D3"
            paddingY={2}
          >
            <Link>
              <Text fontWeight={500}>All Categories</Text>
            </Link>
            <Box
              width="fit-content"
              bg="darkgreen"
              color="white"
              paddingX={2}
              borderRadius={20}
            >
              {formdata.length * formdata[0].discusion.length}
            </Box>
          </Box>
          {formdata.map((el) => (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              maxWidth="40%"
              borderBottom="1px solid #D3D3D3"
              paddingY={2}
              gap={10}
              textAlign="left"
            >
              <Link to="/forms/element" onClick={handleclick}>
                <Text id={el.id}>{el.title}</Text>
              </Link>
              <Box
                width="fit-content"
                bg="darkgreen"
                color="white"
                paddingX={2}
                borderRadius={20}
              >
                {el.discusion.length}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
