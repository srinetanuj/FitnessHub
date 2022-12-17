import React from "react";
import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  FormControl,
  FormLabel,
  Button,
  Input,
  Select,
  RadioGroup,
  HStack,
  Radio,
  IconButton,
} from "@chakra-ui/react";
import { TriangleDownIcon, TriangleUpIcon, SearchIcon } from "@chakra-ui/icons";

const Head = () => {
  const search = {
    border: "1px solid black",
    padding: "0 3%",
    width: "100%",
  };
  const [icon, setIcon] = React.useState(true);
  const handleIn = () => {
    if (icon) {
      setIcon(false);
    } else {
      setIcon(true);
    }
  };

  return (
    <Box>
      <Box>
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="900"
          color="#262a3b"
          marginY="2%"
        >
          How can we help you?
        </Text>
        <Accordion defaultIndex={[0]} allowMultiple border="none" marginY="2%">
          <AccordionItem border="none">
            <Box
              maxWidth={{ base: "80%", md: "40%" }}
              margin="auto"
              display="flex"
              alignItems="center"
            >
              <input placeholder="Search" style={search} />
              <Box w="0.1%">
                {icon ? (
                  <AccordionButton
                    position="relative"
                    right={{ base: "15000%", md: "10000%" }}
                    _hover={{ color: "#454545" }}
                    onClick={handleIn}
                  >
                    <TriangleDownIcon />
                  </AccordionButton>
                ) : (
                  <AccordionButton
                    position="relative"
                    right={{ base: "15000%", md: "10000%" }}
                    _hover={{ color: "#454545" }}
                    onClick={handleIn}
                  >
                    <TriangleUpIcon />
                  </AccordionButton>
                )}
              </Box>
              <Box>
                <IconButton
                  bg="#FF6733"
                  color="white"
                  aria-label="Search database"
                  icon={<SearchIcon />}
                  size="sm"
                  position="relative"
                  left={{ base: 3, md: 5 }}
                />
              </Box>
            </Box>

            <AccordionPanel
              pb={4}
              maxWidth={{ base: "80%", md: "40%" }}
              margin="auto"
              padding="0"
            >
              <FormControl>
                <FormLabel fontSize={{ base: ".7em", md: "1em" }}>
                  Title
                </FormLabel>
                <Input type="text" fontSize={{ base: ".7em", md: "1em" }} />
                <FormLabel fontSize={{ base: ".7em", md: "1em" }}>
                  Author
                </FormLabel>
                <Input type="text" fontSize={{ base: ".7em", md: "1em" }} />
                <FormLabel fontSize={{ base: ".7em", md: "1em" }}>
                  Category
                </FormLabel>
                <Select
                  placeholder="(All)"
                  fontSize={{ base: ".7em", md: "1em" }}
                >
                  <option>(All)</option>
                  <option>Begin Here</option>
                  <option>Begin Here</option>
                  <option>Losing weight & weight mgt with Fitnesshub</option>
                  <option>Fitnesshub Challenges</option>
                  <option>General Nutrition</option>
                  <option>General Discussion</option>
                  <option>Success Stories</option>
                  <option>Help</option>
                  <option>Feature Requests</option>
                  <option>Ask An Expert</option>
                  <option>Bug Reports</option>
                  <option>Beta Testing</option>
                </Select>
                <RadioGroup defaultValue="">
                  <HStack spacing={{ base: "12px", md: "24px" }}>
                    <Radio value="search subcategories">
                      <Text fontSize={{ base: ".7em", md: "1em" }}>
                        search subcategories
                      </Text>
                    </Radio>
                    <Radio value="search archived">
                      <Text fontSize={{ base: ".7em", md: "1em" }}>
                        search archived
                      </Text>
                    </Radio>
                  </HStack>
                </RadioGroup>
                <FormLabel fontSize={{ base: ".7em", md: "1em" }}>
                  Tags
                </FormLabel>
                <Input type="text" fontSize={{ base: ".7em", md: "1em" }} />
                <FormLabel fontSize={{ base: ".7em", md: "1em" }}>
                  What to search
                </FormLabel>
                <RadioGroup defaultValue="">
                  <HStack
                    spacing={{ base: "12px", md: "24px" }}
                    flexWrap="wrap"
                  >
                    <Radio value="Discussions">
                      <Text fontSize={{ base: ".7em", md: "1em" }}>
                        Discussions
                      </Text>
                    </Radio>
                    <Radio value="Comments">
                      <Text fontSize={{ base: ".7em", md: "1em" }}>
                        Comments
                      </Text>
                    </Radio>
                    <Radio value="Questions">
                      <Text fontSize={{ base: ".7em", md: "1em" }}>
                        Questions
                      </Text>
                    </Radio>
                    <Radio value="Answers">
                      <Text fontSize={{ base: ".7em", md: "1em" }}>
                        Answers
                      </Text>
                    </Radio>
                  </HStack>
                </RadioGroup>
                <FormLabel fontSize={{ base: ".7em", md: "1em" }}>
                  Date within
                </FormLabel>
                <Input
                  placeholder="Select Date and Time"
                  size="md"
                  type="datetime-local"
                />
                <Button
                  mt={4}
                  bg="#FF6733"
                  color="white"
                  type="submit"
                  float="left"
                  fontSize={{ base: ".7em", md: "1em" }}
                >
                  SEARCH
                </Button>
              </FormControl>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};

export default Head;
