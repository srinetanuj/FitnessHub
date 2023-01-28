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
import Head from "./Head";

const Formscategory = () => {
  let n = localStorage.getItem("key") - 1;
  const [key, setKey] = React.useState(n);

  var formdata = require("../../db.json");

  const hr = {
    borderTop: "1px solid #D3D3D3",
    marginBottom: "1%",
  };

  const handleclick = (e) => {
    console.log(e.target.id);
    localStorage.setItem("key", e.target.id);
    setKey(e.target.id - 1);
  };

  const handlediscusion = (e) => {
    console.log(e.target.id);
    localStorage.setItem("dis", e.target.id);
  };
  return (
    <Box>
      <Head />
      <hr style={hr} />
      <Box maxWidth="95%" margin="auto">
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
          marginBottom={{ base: 4, md: 8 }}
        >
          <BreadcrumbItem>
            <Link to="/forms">
              <BreadcrumbLink href="#" fontSize={{ base: ".7em", md: "1em" }}>
                Home
              </BreadcrumbLink>
            </Link>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#" fontSize={{ base: ".7em", md: "1em" }}>
              {formdata[key].title}
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
            {formdata[key].title}
          </Text>
          <Text fontSize={{ base: ".7em", md: "1em" }}>
            {formdata[key].description}
          </Text>
        </Box>
        <Box marginBottom={5} display={{ md: "flex" }} gap={10}>
          <Box flexGrow="1" flexBasis="0">
            {formdata[key].discusion.map((el, index) => (
              <Box
                textAlign="left"
                marginTop={2}
                bg={index % 2 == 0 ? "#F5F5F5" : "white"}
                padding={2}
              >
                <Link to="/forms/discusion" onClick={handlediscusion}>
                  <Text
                    id={el.id}
                    fontSize={{ base: ".9em", md: "lg" }}
                    color="#FF6733"
                  >
                    {el.title}
                  </Text>
                </Link>
                <Box
                  display="flex"
                  gap={4}
                  fontSize={{ base: ".4em", md: ".7em" }}
                >
                  <Text>{el.view} views</Text>

                  <Text>{el.comments.length} comments</Text>
                  <Text display="flex" gap={1}>
                    Started by
                    <Link>
                      <Text
                        fontWeight="500"
                        _hover={{ textDecoration: "underline" }}
                      >
                        {el.author}
                      </Text>
                    </Link>
                  </Text>
                  <Text>{el.date}</Text>
                </Box>
              </Box>
            ))}
          </Box>
          <Box
            flexGrow="1"
            flexBasis="0"
            display={{ base: "none", md: "block" }}
          >
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
              <Link to="/forms">
                <Text>All Categories</Text>
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
            {formdata.map((el, index) => (
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
                <Link onClick={handleclick}>
                  <Text fontWeight={index === key ? 500 : 400} id={el.id}>
                    {el.title}
                  </Text>
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
    </Box>
  );
};

export default Formscategory;
