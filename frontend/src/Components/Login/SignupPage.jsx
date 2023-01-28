import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Radio,
  RadioGroup,
  Select,
  Checkbox,
  useToast
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const handlePass = (e) => {
    setPass(e.target.value);
  }

  const handleSubmit = () => {

    if(pass!==""){
      toast({
        title: 'Signup Successfull',
        position: "top",
        description: "... redirecting to login page",
        status: 'success',
        duration: 7000,
        isClosable: true,
      })
      navigate("/login");
    } else if (pass === ""){
      toast({
        title: 'Fields are empty',
        position: "top",
        description: "Please fill all the fields",
        status: 'warning',
        duration: 7000,
        isClosable: true,
      })
    }
    
  }
  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
        mt="-5rem"
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              & get free access to some premium features
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input onChange={handlePass} type={showPassword ? "text" : "password"} />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>

                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? "text" : "password"} />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
        mt="-10rem"
       
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6} >
          <Stack align={"center"}>
            <Heading fontSize={"2xl"} textAlign={"center"}>
              Your Body Type
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              These details are required for effective calcuations
            </Text>
          </Stack>

          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="gender" isRequired>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup>
                      <Stack spacing={4} direction="row">
                        <Radio value="1">Male</Radio>
                        <Radio value="2" colorScheme={"pink"}>
                          Female
                        </Radio>
                        <Radio value="3" colorScheme={"purple"}>
                          Others
                        </Radio>
                      </Stack>
                    </RadioGroup>
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="date" isRequired>
                <FormLabel>Birthday 🎂</FormLabel>
                <Input type="date" />
              </FormControl>
              <FormControl id="height">
                <FormLabel>Height</FormLabel>
                <InputGroup gap={3} alignItems={"center"}>
                  <Select variant="outline" placeholder="ft">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                  </Select>
                  <Select variant="outline" placeholder="in">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                  </Select>
                  <Text>or</Text>
                  <Input type="number" placeholder="cm" />
                </InputGroup>

                <FormLabel>Weight</FormLabel>
                <InputGroup gap={20}>
                  <Input type="number" placeholder="--" />
                  <Select>
                    <option>Pounds</option>
                    <option>KG</option>
                  </Select>
                </InputGroup>
              </FormControl>
            </Stack>
          </Box>
        </Stack>
      </Flex>

      <Flex
        minH={"100vh"}
        align={"justify"}
        justify={"justify-middle"}
        bg={useColorModeValue("gray.50", "gray.800")}
        mt="-8rem"
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <Heading size="md" marginBottom="2rem" pl="1.5rem">
                    Terms of Service & Privacy Settings
                  </Heading>
                </Box>
              </HStack>
              <Text fontSize={15} fontStyle={"italic"}>
                *By checking the box below you are indicating you have read and
                agree to our <p style={{color:"orange", fontWeight:"500"}}>Terms of Service</p>and <p style={{color:"orange", fontWeight:"500"}}>Privacy Policy</p>.
              </Text>

              <Checkbox>
                I agree to the Cronometer Terms of Service and Privacy Policy.
              </Checkbox>
              <Text>
                In order to give you the best experience using Cronometer, we
                need certain data permissions. (These are optional and can be
                updated in your settings any time.)
              </Text>
              <Checkbox>
                I agree to receive Cronometer newsletter and promotional emails.
                (You can opt out at any time.)
              </Checkbox>
              <Checkbox>
                I agree to receive personalized in-app ads. (You will receive
                less relevant, non-personalized ads if you opt out)
              </Checkbox>
            </Stack>
          </Box>
          <Button
                  onClick={handleSubmit}
                  loadingText="Submitting"
                  size="lg"
                  bg={"lightgreen"}
                  color={"white"}
                  _hover={{
                    bg: "green.400",
                  }}
                >
                  Sign up
          </Button>
          <Stack pt={6}>
                <Text align={"center"}>
                  Already a user? <Link to="/login" style={{color:"blue"}}>Login</Link>
                </Text>
          </Stack>
        </Stack>
      </Flex>
    </>
  );
}
