import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import "../../App.css"
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Context/loginContext";


export default function Login() {

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  
  // const [userData, setuserData] = useState([])
  // const [userEmail, setEmail] = useState("")
  // const [Password, setPassword] = useState("")
  const [isAuth, setisAuth] = useState(false)

  const { handleLogin } = useContext(AuthContext);

  const toast = useToast()
  const navigate = useNavigate();

  // const handleEmail = (e) => {
  //   setEmail(e.target.value)
  // }
  // const handlePassword = (e) => {
  //   setPassword(e.target.value)
  // }

  // const fetchData = async() => {
  //   let res = await axios.get(`https://api.npoint.io/202ccf9cd556cc190333/users`)
  //   setuserData(res.data);
  // }

  // useEffect(()=> {
  //   fetchData();
  // },[])

  // const handleSubmit = () => {
  //   let obj = {userEmail, Password};

  //   for(let i=0; i<userData.length; i++){
  //     if(obj.userEmail === userData[i].email){
  //       setisAuth(true);
  //       break;
  //     }
  //   }

  const handleSubmit =()=>{
    const payload = {
      email,
      password,
    }
   
    fetch("https://defiant-tutu-tick.cyclic.app/users/login", {
        method:"POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type":"application/json"
        }
    
      })
      .then(res => res.json())
      .then(res =>{
        console.log(res);
      if(res.length>0){
          // console.log(res[0]);
          localStorage.setItem("token", res[0].token);
          localStorage.setItem("fname", res[0].fname);
          alert("Login Successful!");
          navigate("/")
          window.location.reload(true);
      }else{
        alert("Wrong credentials! Signup first");
        navigate("/signup")
      }
    })
    .catch(e=>console.log(e));
  }
  
  
  

  return (
    <div className="login-page-mains">
      
      <div>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Log in to your Fitness Hub account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              Use you registered Email in <Link to="/" color={"blue.400"}>Fitness Hub;</Link>{" "}
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
                <Input 
                type="email" 
                placeholder="Enter your email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input 
                   type="password"
                   placeholder="Enter your password"
                   value={password}
                   onChange={(e)=>setPassword(e.target.value)}
                 />
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
                <Flex style={{gap:"15px", justifyContent:"center", alignItems:"center", borderTop:"1px solid #c8cfca", borderBottom:"1px solid #c8cfca", padding:"0.5rem", width:"80%", margin:"auto", marginTop:"4rem"}}>
                <Text>Login via</Text>
                <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="google" width="37px"/>
                <img src="https://cdn-icons-png.flaticon.com/512/174/174848.png" alt="facebook" width="37px"/>
                <img src="https://cdn-icons-png.flaticon.com/512/0/747.png" alt="apple" width="37px"/>
                <img src="https://cdn-icons-png.flaticon.com/512/732/732221.png" alt="microsoft" width="37px"/>
              </Flex>
                <Button
                  bg={"orange"}
                  color={"white"}
                  onClick={handleSubmit}
                  _hover={{
                    bg: "orange.400",
                  }}
                >
                  Log in
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Not registered with us? <Link style={{color:"blue"}} to="/signup">Sign up Now</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </div>
    </div>
  );
}
