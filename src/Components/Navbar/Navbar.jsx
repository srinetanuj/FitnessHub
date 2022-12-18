import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import React from "react";
import logo from "../../Assets/Fitness_hub_bg_less.png";
import { Link } from "react-router-dom";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Drawer,
  DrawerBody,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { AuthContext } from "../../Context/loginContext";

const Navbar = () => {
  const [state, setState] = React.useState(<ChevronDownIcon />);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loginauth, handleLogin } = useContext(AuthContext);

  const handlein = (e) => {
    setState(<ChevronUpIcon />);
  };
  const handleout = () => {
    setState(<ChevronDownIcon />);
  };

  // console.log(loginauth);
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      borderBottom="1px solid #D3D3D3"
      maxWidth="98%"
      margin="auto"
      paddingY="0.8%"
    >
      <Box display="flex" alignItems="center">
        <Box maxWidth={{ base: "8%", md: "15%" }}>
          <Image src={logo} />
        </Box>
        <Box>
          <Link to="/">
            <Text fontSize={{ base: "lg", md: "4xl" }} fontWeight="700">
              Fitnesshub
            </Text>
          </Link>
        </Box>
      </Box>
      <Box
        width={{ lg: "90%", xl: "70%" }}
        display={{ base: "none", md: "flex" }}
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Popover trigger="hover">
          <PopoverTrigger>
            <Box
              display="flex"
              alignItems="center"
              gap={1}
              cursor="pointer"
              onMouseEnter={handlein}
              onMouseLeave={handleout}
            >
              <Text fontSize="xl" fontWeight="600">
                Products
              </Text>
              {state}
            </Box>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverBody
              display="flex"
              flexDirection="column"
              gap={5}
              boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
              onMouseEnter={handlein}
              onMouseLeave={handleout}
            >
              <Link>
                <Box display="flex" alignItems="center" gap={1}>
                  <Box maxWidth="20%">
                    <Link to="/">
                      {" "}
                      <Image src={logo} />
                    </Link>
                  </Box>
                  <Box textAlign="left">
                    <Link to="/">
                      <Text fontSize="xl" fontWeight="600">
                        Fitnesshub
                      </Text>
                    </Link>
                    <Text fontSize="md">For Individuals</Text>
                  </Box>
                </Box>
              </Link>
              <Link>
                <Box display="flex" alignItems="center" gap={1}>
                  <Box maxWidth="20%">
                    <Image src={logo} />
                  </Box>
                  <Box textAlign="left">
                    <Link to="/productPro">
                      <Text fontSize="xl" fontWeight="600">
                        Fitnesshub Pro
                      </Text>
                    </Link>
                    <Text fontSize="md">For Healthcare Professionals</Text>
                  </Box>
                </Box>
              </Link>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Link to="/support">
          <Text fontSize="xl" fontWeight="600">
            Support
          </Text>
        </Link>
        <Link to="/blog">
          <Text fontSize="xl" fontWeight="600">
            Blog
          </Text>
        </Link>
        <Link to="/forms">
          <Text fontSize="xl" fontWeight="600">
            Forums
          </Text>
        </Link>
        <Link to="/about">
          <Text fontSize="xl" fontWeight="600">
            About
          </Text>
        </Link>
        <Link to="/login">
        <Button bg="none" border="1px solid" onClick={handleLogin}>
          {loginauth ? "LOGIN" : "LOGOUT"}
        </Button>
        </Link>
      </Box>
      <Box display={{ base: "block", md: "none" }}>
        <HamburgerIcon marginLeft="-100%" onClick={onOpen} />
        <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">
              <Box display="flex" alignItems="center">
                <Box maxWidth={{ base: "8%", md: "15%" }}>
                  <Image src={logo} />
                </Box>
                <Box>
                  <Text fontSize={{ base: "lg", md: "4xl" }} fontWeight="700">
                    Fitnesshub
                  </Text>
                </Box>
              </Box>
            </DrawerHeader>
            <DrawerBody display="flex" flexDirection="column" gap={3}>
              <Box>
                <Accordion defaultIndex={[0]} allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton padding="0">
                        <Text
                          as="span"
                          textAlign="left"
                          flex={1}
                          fontSize={{ base: "md" }}
                          fontWeight="600"
                        >
                          Products
                        </Text>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Link>
                        <Box display="flex" alignItems="center" gap={1}>
                          <Box maxWidth="20%">
                            <Image src={logo} />
                          </Box>
                          <Box textAlign="left">
                            <Text fontSize={{ base: "sm" }} fontWeight="600">
                              Fitnesshub
                            </Text>
                            <Text fontSize={{ base: "sm" }}>
                              For Individuals
                            </Text>
                          </Box>
                        </Box>
                      </Link>
                      <Link>
                        <Box display="flex" alignItems="center" gap={1}>
                          <Box maxWidth="20%">
                            <Image src={logo} />
                          </Box>
                          <Box textAlign="left">
                            <Text fontSize={{ base: "sm" }} fontWeight="600">
                              Fitnesshub Pro
                            </Text>
                            <Text fontSize={{ base: "sm" }}>
                              For Healthcare Professionals
                            </Text>
                          </Box>
                        </Box>
                      </Link>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
              <Box>
                <Link to="/blog">
                  <Text fontSize={{ base: "md" }} fontWeight="600">
                    Blog
                  </Text>
                </Link>
              </Box>
              <Box>
                <Link to="/forms">
                  <Text fontSize={{ base: "md" }} fontWeight="600">
                    Forums
                  </Text>
                </Link>
              </Box>
              <Box>
                <Link to="/about">
                  <Text fontSize={{ base: "md" }} fontWeight="600">
                    About
                  </Text>
                </Link>
              </Box>
              <Box>
                <Link>
                  <Text fontSize={{ base: "md" }} fontWeight="600">
                    Support
                  </Text>
                </Link>
              </Box>

              <Button bg="none" border="1px solid" maxWidth="25%">
                <Text fontSize={{ base: "md" }}>LOG IN</Text>
              </Button>
              
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
