import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Formsdiscusion = () => {
  let n = localStorage.getItem("key") - 1;
  let dis = localStorage.getItem("dis") - 1;
  const [key, setKey] = React.useState(n);

  var formdata = require("../../db.json");

  const handleclick = (e) => {
    console.log(e.target.id);
    localStorage.setItem("key", e.target.id);
    setKey(e.target.id - 1);
  };
  return (
    <div>
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
            <Link to="/forms/element">
              <BreadcrumbLink href="#" fontSize={{ base: ".7em", md: "1em" }}>
                {formdata[key].title}
              </BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
        </Breadcrumb>
        <Box textAlign="left" maxWidth={{ base: "90%", md: "50%" }}>
          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="900"
            marginBottom={{ base: 1, md: 8 }}
          >
            {formdata[key].discusion[dis].title}
          </Text>
        </Box>
        <Box marginBottom={5} display={{ md: "flex" }} gap={10}>
          <Box flexGrow="1" flexBasis="0">
            <Box>
              <Box
                border="1px solid #D3D3D3"
                boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                padding={5}
              >
                <Box display="flex" justifyContent="space-between">
                  <Link>
                    <Text
                      fontSize={{ base: ".7em", md: "1em" }}
                      fontWeight={600}
                    >
                      {formdata[key].discusion[dis].author}
                    </Text>
                  </Link>
                  <Text fontSize={{ base: ".7em", md: "1em" }}>
                    {formdata[key].discusion[dis].date}
                  </Text>
                </Box>
                <Box
                  fontSize={{ base: ".7em", md: "1em" }}
                  textAlign="left"
                  marginTop="5%"
                >
                  <Text>{formdata[key].discusion[dis].description}</Text>
                </Box>
              </Box>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                marginTop="3%"
                textAlign="left"
              >
                Comments
              </Text>
              {formdata[key].discusion[dis].comments.map((el) => (
                <Box
                  border="1px solid #D3D3D3"
                  boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                  padding={5}
                  marginTop="3%"
                >
                  <Box display="flex" justifyContent="space-between">
                    <Link>
                      <Text
                        fontSize={{ base: ".7em", md: "1em" }}
                        fontWeight={600}
                      >
                        {el.author}
                      </Text>
                    </Link>
                    <Text fontSize={{ base: ".7em", md: "1em" }}>
                      {el.date}
                    </Text>
                  </Box>
                  <Box
                    fontSize={{ base: ".7em", md: "1em" }}
                    textAlign="left"
                    marginTop="5%"
                  >
                    <Text>{el.description}</Text>
                  </Box>
                </Box>
              ))}
            </Box>
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
                <Link onClick={handleclick} to="/forms/element">
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
    </div>
  );
};

export default Formsdiscusion;
