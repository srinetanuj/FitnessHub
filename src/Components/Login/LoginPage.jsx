import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import LoginNavbar from "./LoginNavbar";
import "../../App.css"

export default function Login() {
  return (
    <div className="login-page-mains">
      <LoginNavbar />
      
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}

      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Log in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              Use you registered Email in <Link color={"blue.400"}>Fitness Hub;</Link>{" "}
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Flex style={{gap:"25px", justifyContent:"center", alignItems:"center"}}>
                <p>Login via</p>
                <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="google" width="37px"/>
                <img src="https://cdn-icons-png.flaticon.com/512/174/174848.png" alt="facebook" width="37px"/>
                <img src="https://cdn-icons-png.flaticon.com/512/0/747.png" alt="apple" width="37px"/>
                <img src="https://cdn-icons-png.flaticon.com/512/732/732221.png" alt="microsoft" width="37px"/>
              </Flex>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </div>
  );
}
