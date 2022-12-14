import {  ArrowForwardIcon, Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  Stack,
  Text,
  Flex,
  useBreakpointValue,
  InputGroup,
  Input,
  InputRightElement,
  Image,
} from "@chakra-ui/react";

import React from "react";
import { Link } from "react-router-dom";
import AppUpdate from "../Components/AppUpdate";
import KnowYourself from "../Components/KnowYourself";
import OnTrends from "../Components/OnTrends";
import RecentPost from "../Components/RecentPost";

// import css 
import BlogCss from "../Pages/Blog.module.css"

const Blog = () => {
  return (
    <Box bg={'gray.100'}> 


    
      <Box bg="rgb(38,42,59)" h={350}>
        <Stack spacing={4} color="white" py="20">
          <Heading size="3xl"> Cronometer Blog </Heading>
          <Heading size="lg">App Updates, Nutrition Tips & Inspiration</Heading>
        </Stack>
      </Box>


         {/* 1st div ha yaa */}
      <Stack minH={"50vh"} direction={{ base: "column", lg: "row" }} bg="white" spacing={10} w="80%" m='auto' mt='-100px' borderRadius="20px" p={10} >
        <Flex p={4} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}  alignItems="center">
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} >
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "teal.400",
                  zIndex: -1,
                }}
              >
                Eat Smarter.
              </Text>
              <br />{" "}
              <Text color={"teal.400"} as={"span"}>
                Live Better.
              </Text>
            </Heading>
            <Text fontSize={{ base: "lg", lg: "xl" }} color={"gray.500"}>
              Get to know the eating habits that make your body thrive. The
              Cronometer app lets you easily track your nutrition, helping you
              to live a healthier, happier life.
            </Text>
            
            <Button
            width='70%'
            size='lg'
                bg={"teal.400"}
                color={"white"}
                _hover={{
                  bg: "teal.800",
                }}
              >
                GET STARTED
              </Button>
          </Stack>
        </Flex>
        <Flex flex={1.5}>
          <iframe
            title="cronometer"
            src="https://www.youtube.com/embed/R49fLnhMhIE"
            allowFullScreen
            width="100%"
            style={{borderRadius:"30px",minHeight:"300px" }}
          />
        </Flex>
      </Stack>



     {/* 2nd div ha ya    */}


<RecentPost/>



{/* blog archieves */}
<Box style={{backgroundColor:"RGB(240 242 250)"}}  mt={10} py={10}>
  <Stack w='80%'  m='auto' spacing={8} >
  <Heading fontWeight='bold'>Blog Archives</Heading>

  <Stack direction={['column','column','column','row']} justifyContent="space-around">

  <Link to="/blog/nutrition"><Text fontSize='20px'  color={'teal.700'} fontWeight="bold" > NUTRITION </Text> </Link>
  <Link to="/blog/fitness"><Text fontSize='20px'  color={'teal.700'} fontWeight="bold" > FITNESS </Text></Link>
  <Link to="/blog/features"><Text fontSize='20px'  color={'teal.700'} fontWeight="bold" > FEATURES </Text> </Link>
  <Link to="/blog/recipes"><Text fontSize='20px' color={'teal.700'} fontWeight="bold" > RECIPES </Text> </Link>
  <Link to="/blog/appUpdate"><Text fontSize='20px'  color={'teal.700'} fontWeight="bold" >APP UPDATES </Text> </Link>

</Stack>

<Box p={5}>



            {/* search box and uska button  */}
    <InputGroup>
    <Input type='text' placeholder='Search Blog Posts'  bg="white"  size='lg'/>

  <Link to="/blog/search"> </Link>

  <Button bg="rgb(255,103,51)" size='lg' _hover={"orange.200"} >
  <Search2Icon color='white' size='xl'/>
  </Button>
      

  </InputGroup>

</Box>
  </Stack>
</Box>



  {/* chrorno Hacks */}
<Box bg="white" >
<Stack minH={"50vh"} direction={{ base: "column", lg: "row" }} w="80%"  spacing={30}  m='auto'  borderRadius="20px" p={10} >
        <Flex p={4} flex={1.5} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"} alignItems="center" >
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} >
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "teal.400",
                  zIndex: -1,
                }}
              >
                CRONO HACKS
              </Text>
              <br />{" "}
              <Text color="rgb(255,103,51)" as={"span"}>
              Cronometer Tips & Tricks
              </Text>
            </Heading>
            <Text fontSize={{ base: "lg", lg: "xl" }} color={"gray.500"} alignItems="left">
            Whether you’re a new or longtime user, here are some helpful tips to make the most of your nutrition tracking.
            </Text>
            
            <Link to={"/blog/tips"}>
            <Button
            // width='70%'
            size='lg'
                bg="rgb(255,103,51)"
                color={"white"}
                _hover={{
                  bg: "orange.400",
                }}
              >
                GET STARTED
              </Button>
            </Link>
          </Stack>
        </Flex>
        <Flex flex={1}>
        <Image src="https://cronometer.com/blog/wp-content/uploads/2022/11/tips-and-tricks-icon-2.png" alt="hacks"/>
        </Flex>
      </Stack>

</Box>



{/* //latest update */}


<Box bg="white" my={10} >
<Stack minH={"50vh"} direction={{ base: "column", lg: "row" }} w="80%"  spacing={30}  m='auto'  borderRadius="20px" p={10} >
<Flex flex={1}>
        <Image src="https://cronometer.com/blog/wp-content/uploads/2022/11/app-updates-icon-3.png" alt="hacks"/>
        </Flex>
        <Flex p={4} flex={1.3} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"} alignItems="center" >
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} >
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "teal.400",
                  zIndex: -1,
                }}
              >
                APP UPDATES
              </Text>
              <br />{" "}
              <Text color="rgb(255,103,51)" as={"span"}>
              New & Improved: The Latest Updates
              </Text>
            </Heading>
            <Text fontSize={{ base: "lg", lg: "xl" }} color={"gray.500"} alignItems="left">
            Get up to date on all of the latest Cronometer updates, including cool new features like our Recipe Importer or Target Scheduler! 
            </Text>
            
            <Link to={"/blog/appUpdate"}><Button
            // width='70%'
            size='lg'
                bg="rgb(255,103,51)"
                color={"white"}
                _hover={{
                  bg: "orange.400",
                }}
              >
                SEE WHAT's NEW
              </Button></Link>
          </Stack>
        </Flex>
        
      </Stack>

</Box>




{/* Eat Smarter  */}

<Box bg="rgb(38,42,59)"  color="white">

<Stack direction={{ base: "column", lg: "row" }} w="80%" margin='auto' p={20} gap={20}>
  <Flex flex={1} textAlign='left'>
    <Stack>
      <Heading>Eat smarter. Live better.</Heading>
      <Text fontSize='20px'>Track your foods, exercise, and health data with the Cronometer app.</Text>

    </Stack>
  </Flex>

  <Flex flex={1} pt={25}>
    <Button bg='rgb(68,208,123)' color='rgb(38,42,59)' _hover={{
                  bg: "green.100",
                }} size='lg' px={65}> Sign Up- It's Free </Button>
  </Flex>
</Stack>

</Box>



{/* on trend--popular story -----(Nutrition)*/} 

<OnTrends/>


{/* App update  */}
/
<AppUpdate/>


{/* know yourself  */}

<KnowYourself/>


{/* track your food */}



<Box className={BlogCss.container}>

  
  <Stack className={BlogCss.first} spacing={10} >
    <Heading fontSize='45px' fontWeight='bold'>Track your food, exercise and health metrics with the Cronometer app.</Heading>
    <Button  width='40%'
            size='lg'
                bg="rgb(255,103,51)"
                color={"white"}
                _hover={{
                  bg: "orange.400",
                }} >Sign Up</Button>
  </Stack>

<Box className={BlogCss.second}>
  <Image src="https://cronometer.com/blog/wp-content/uploads/2022/11/crono-app.png" alt="track food" className={BlogCss.photo}/>
</Box>




</Box>













    </Box>
  );
};

export default Blog;
