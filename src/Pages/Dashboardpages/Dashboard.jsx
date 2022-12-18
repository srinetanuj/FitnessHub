import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import React from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import Sidebar from "../../Components/Dashboard/Sidebar";

import { Avatar, Box, Button, Flex, Heading, HStack, Tag, TagLabel } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AiFillQuestionCircle } from 'react-icons/ai'
import Sidebar from '../../Components/Dashboard/Sidebar'


import {
  Image,
  Center,
  Text,
  Stack,
  useColorModeValue,

} from "@chakra-ui/react";

} from '@chakra-ui/react';

const Dashboard = () => {




  return (
    <Box>
      <Flex>
        <Sidebar />

        <Box bg="rgb(255,252,246)" border="2px solid" w="100%">
          {/* kaaam isma krna ha  Box ka andar*/}

          <Flex ml={10}>
            {" "}
            <Heading> Your Dashboard </Heading>
            <Box p={2}>
              <AiFillQuestionCircle size={30} />
            </Box>
          </Flex>

          <HStack ml={10} gap={20} py={10} w="80%" h="20px" bg="white">
            <Tag size="lg" _hover={{ bg: "blue.100" }} borderRadius="full">
              <Avatar
                src="https://cdn1.cronometer.com/brand/svg/add-food-icon.svg"
                size="xs"
                name="Segun Adebayo"
                ml={-1}
                mr={2}
              />
              <TagLabel> FOOD </TagLabel>
            </Tag>

            <Tag size="lg" _hover={{ bg: "blue.100" }} borderRadius="full">
              <Avatar
                src="https://cdn1.cronometer.com/brand/svg/add-exercise-icon.svg"
                size="xs"
                name="Segun Adebayo"
                ml={-1}
                mr={2}
              />
              <TagLabel> EXERCISE </TagLabel>
            </Tag>
   {/* Hello there I am Arnab Das */}
            <Tag size="lg" _hover={{ bg: "blue.100" }} borderRadius="full">
              <Avatar
                src="https://cdn1.cronometer.com/brand/svg/add-biometric-icon.svg"
                size="xs"
                name="Segun Adebayo"
                ml={-1}
                mr={2}
              />
              <TagLabel> BIOMETRIC </TagLabel>
            </Tag>

            <Tag size="lg" _hover={{ bg: "blue.100" }} borderRadius="full">
              <Avatar
                src="https://cdn1.cronometer.com/brand/svg/add-note-icon.svg"
                size="xs"
                name="Segun Adebayo"
                ml={-1}
                mr={2}
              />
              <TagLabel> NOTE </TagLabel>
            </Tag>
          </HStack>

          <Image
            src="https://i.ibb.co/kXg0W8X/Stay-fit-stay-funky-1.webp"
            alt="stayfunky"
            w="65%"
            m="auto"
          />



<Flex>
  
<Sidebar/>

<Box  bg='rgb(255,252,246)' border='2px solid' w='100%'>


{/* kaaam isma krna ha  Box ka andar*/}

<Flex ml={10}> <Heading> Your Dashboard </Heading> 
      <Box p={2}><AiFillQuestionCircle size={30} /></Box>

</Flex>


<HStack ml={10} gap={20} py={10} w='80%' h="20px" bg='white' >


<Tag size='lg' _hover={{bg:"blue.100"}} borderRadius='full'>
  <Avatar
    src='https://cdn1.cronometer.com/brand/svg/add-food-icon.svg'
    size='xs'
    name='Segun Adebayo'
    ml={-1}
    mr={2}
  />
  <TagLabel> FOOD </TagLabel>
</Tag>


<Tag size='lg' _hover={{bg:"blue.100"}}  borderRadius='full'>
  <Avatar
    src='https://cdn1.cronometer.com/brand/svg/add-exercise-icon.svg'
    size='xs'
    name='Segun Adebayo'
    ml={-1}
    mr={2}
  />
  <TagLabel> EXERCISE </TagLabel>
</Tag>


<Tag size='lg' _hover={{bg:"blue.100"}} borderRadius='full'>
  <Avatar
    src='https://cdn1.cronometer.com/brand/svg/add-biometric-icon.svg'
    size='xs'
    name='Segun Adebayo'
    ml={-1}
    mr={2}
  />
  <TagLabel> BIOMETRIC </TagLabel>
</Tag>


<Tag size='lg' _hover={{bg:"blue.100"}} borderRadius='full'>
  <Avatar
    src='https://cdn1.cronometer.com/brand/svg/add-note-icon.svg'
    size='xs'
    name='Segun Adebayo'
    ml={-1}
    mr={2}
  />
  <TagLabel> NOTE </TagLabel>
</Tag>



</HStack>



<HStack ml={10} gap={5}> 
  


    <Center py={6}>
      <Stack
      gap={5}
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'310px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={4}
          pos={'relative'}>
          <Image 
            src={
              'https://braze-images.com/appboy/communication/marketing/content_cards_message_variations/images/6318ec93074254297fce0f4d/ba255d7877cd3fd072e129b83bfffa37c422a3e5/original.png?1662577814'
            }
            h={'310px'}
            w='100%'
          />
        </Box> 
        <Stack gap={2}>
          
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            Welcome To Cronometer,
          </Heading>

          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            Nutrition Nerd In The Making!
          </Heading>
          <Text color={'gray.500'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </Text>
        </Stack>
       <Button> GET THE TIPS </Button>
      </Stack>
    </Center>





    <Center py={6}>
      <Stack
      gap={5}
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'310px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={4}
          pos={'relative'}>
          <Image 
            src={
              'https://braze-images.com/appboy/communication/marketing/content_cards_message_variations/images/6369802102bbbd5269c588e3/ed0ef6a78e55ff1d6470c6c2c71eb804eb6bca34/original.png?1667858470'
            }
            h={'310px'}
            w='100%'
          />
        </Box> 
        <Stack gap={2}>
          
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            Create Your First Recipe
          </Heading>

          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            Nutrition Nerd In The Making!
          </Heading>
          <Text color={'gray.500'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </Text>
        </Stack>
       <Button> GET THE TIPS </Button>
      </Stack>
    </Center>





  
  </HStack>





          <HStack ml={10} gap={5}>
            <Center py={6}>
              <Stack
                gap={5}
                maxW={"445px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"2xl"}
                rounded={"md"}
                p={6}
                overflow={"hidden"}
              >
                <Box
                  h={"310px"}
                  bg={"gray.100"}
                  mt={-6}
                  mx={-6}
                  mb={4}
                  pos={"relative"}
                >
                  <Image
                    src={
                      "https://braze-images.com/appboy/communication/marketing/content_cards_message_variations/images/6318ec93074254297fce0f4d/ba255d7877cd3fd072e129b83bfffa37c422a3e5/original.png?1662577814"
                    }
                    h={"310px"}
                    w="100%"
                  />
                </Box>
                <Stack gap={2}>
                  <Heading
                    color={useColorModeValue("gray.700", "white")}
                    fontSize={"2xl"}
                    fontFamily={"body"}
                  >
                    Welcome To Cronometer,
                  </Heading>

                  <Heading
                    color={useColorModeValue("gray.700", "white")}
                    fontSize={"2xl"}
                    fontFamily={"body"}
                  >
                    Nutrition Nerd In The Making!
                  </Heading>
                  <Text color={"gray.500"}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                  </Text>
                </Stack>
                <Button> GET THE TIPS </Button>
              </Stack>
            </Center>

            <Center py={6}>
              <Stack
                gap={5}
                maxW={"445px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"2xl"}
                rounded={"md"}
                p={6}
                overflow={"hidden"}
              >
                <Box
                  h={"310px"}
                  bg={"gray.100"}
                  mt={-6}
                  mx={-6}
                  mb={4}
                  pos={"relative"}
                >
                  <Image
                    src={
                      "https://braze-images.com/appboy/communication/marketing/content_cards_message_variations/images/6369802102bbbd5269c588e3/ed0ef6a78e55ff1d6470c6c2c71eb804eb6bca34/original.png?1667858470"
                    }
                    h={"310px"}
                    w="100%"
                  />
                </Box>
                <Stack gap={2}>
                  <Heading
                    color={useColorModeValue("gray.700", "white")}
                    fontSize={"2xl"}
                    fontFamily={"body"}
                  >
                    Create Your First Recipe
                  </Heading>

                  <Heading
                    color={useColorModeValue("gray.700", "white")}
                    fontSize={"2xl"}
                    fontFamily={"body"}
                  >
                    Nutrition Nerd In The Making!
                  </Heading>
                  <Text color={"gray.500"}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                  </Text>
                </Stack>
                <Button> GET THE TIPS </Button>
              </Stack>
            </Center>

            <Center py={6}>
              <Stack
                gap={5}
                maxW={"445px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"2xl"}
                rounded={"md"}
                p={6}
                overflow={"hidden"}
              >
                <Box
                  h={"310px"}
                  bg={"gray.100"}
                  mt={-6}
                  mx={-6}
                  mb={4}
                  pos={"relative"}
                >
                  <Image
                    src={
                      "https://media.istockphoto.com/id/1301412050/photo/food-with-high-content-of-omega-3-fats.jpg?b=1&s=170667a&w=0&k=20&c=4ql-JhWKlkamLbUZ95nQihDUWKOkAU3eD-vqWuwM7qc="
                    }
                    h={"310px"}
                    w="100%"
                  />
                </Box>
                <Stack gap={2}>
                  <Heading
                    color={useColorModeValue("gray.700", "white")}
                    fontSize={"2xl"}
                    fontFamily={"body"}
                  >
                    Staying fit is an art
                  </Heading>

                  <Heading
                    color={useColorModeValue("gray.700", "white")}
                    fontSize={"2xl"}
                    fontFamily={"body"}
                  >
                    Make diet limited and improve your focus
                  </Heading>
                  <Text color={"gray.500"}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                  </Text>
                </Stack>
                <Button> GET THE TIPS </Button>
              </Stack>
            </Center>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Dashboard;
