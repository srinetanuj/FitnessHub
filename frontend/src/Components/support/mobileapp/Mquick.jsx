import React from 'react'
import {Box,Image,Text,Heading,Flex,InputLeftElement,InputGroup,Input,Container,ListItem, OrderedList,Grid,Center} from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import { UnorderedList } from '@chakra-ui/react'
import Snavbar from '../home/Hcomponent/Snavbar'
import Help from '../web version/Help'
import Article from '../web version/Article'


const Mquick = () => {
  return (
    <>
    <Snavbar/>
    <Flex justifyContent="space-around"   direction={{base:"column",md:"row"}} gap={10} alignItems="center" w="85%" m="auto" mt={10}>
    <Link to='/support'>Coronometer</Link>
    <InputGroup w={{base:"80%",md:"30%"}}  >
      <InputLeftElement
        pointerEvents='none'
        children={<SearchIcon color='gray.300' />}
      />
      <Input type='text' placeholder='Search' />
    </InputGroup>
  </Flex>
  <Flex justify="center" gap={10} direction={{base:"column",md:"row"}} mt={10}>
      <Flex direction="column" gap={5} >
      <Heading as="h6" fontSize={20}>Article in the section</Heading>
      <Box  _hover={{background:"rgba(255, 103, 51, 1)",color:"white"}} p={3}  >
      <Link  to="/mobile/dashboard">Dashboard-Mobile</Link>
      </Box>
      <Box background="rgba(255, 103, 51, 1)" color="white"
      p={3}>
      <Link to="/web/quick"> Mobile - Quick Start Guide</Link>
      </Box>
      </Flex>
      <Flex direction="column" gap={10} >
  <Heading fontSize={30} >Mobile - Quick Start Guide</Heading>
 
      <Text m={3} fontSize={30}>
      Welcome to Cronometer!
      </Text>
    
  <OrderedList>
    <Container maxW="2xl">
    <ListItem m={5}>
        <Text mb={5}>Download the Cronometer app from the Google Play Store or Apple Store.</Text>
        <Flex direction={{base:"column",md:"row"}} gap={5}>
        <Image src="https://support.cronometer.com/hc/article_attachments/4417338509204/Asset_3_2x.png" alt="playstore" w="200px"/>
        <Image src="https://support.cronometer.com/hc/article_attachments/4417338509460/Asset_4_2x.png" alt="playstore"  w="200px"/>
        </Flex>
    </ListItem>
    <ListItem m={5}>
        <Text m={5}>Tap on the Sign-Up button to create a new account. Use the Login button if you already have a Cronometer account.</Text>
        <Image src="https://support.cronometer.com/hc/article_attachments/11220358426388" alt="playstore" w="191px"/>
    </ListItem>
    <ListItem m={5}>
        <Text m={5}> Enter your details correctly as they will be used to calculate your targets.</Text>
        <Image src="https://support.cronometer.com/hc/article_attachments/11220408566164" alt="playstore" w="191px"/>
    </ListItem>
    <ListItem m={5}>
    <Text m={5}> Use the Slider to choose an activity level. This will help estimate your energy needs for the day.</Text>
        <Image src="https://support.cronometer.com/hc/article_attachments/11220521631764" alt="playstore" w="191px"/>
    </ListItem>
    <ListItem m={5}>
    <Text m={5}>  Use the slider to choose a weight loss/gain goal. This will deduct or add calories to your energy target.</Text>
        <Image src="https://support.cronometer.com/hc/article_attachments/11220580568724" alt="playstore" w="191px"/>
    </ListItem>
    <ListItem m={5}>
    <Text m={5}>  Enter your email address and choose a password. Don't forget to accept the terms of service & privacy settings.</Text>
        <Image src="https://support.cronometer.com/hc/article_attachments/11220687326484" alt="playstore" w="191px"/>
    </ListItem>
    <ListItem m={5}>
        <Text m={5}> Access the Diary tab > tap on the orange '+' to Add Foods and more:</Text>
        <Image src="https://support.cronometer.com/hc/article_attachments/11221206367252" alt="playstore" w="191px"/>
    </ListItem>
    </Container>
  </OrderedList>
 

    
      
  <Help/>
  <hr/>
  <Article/>
  </Flex>
  
  </Flex>
  
  
  
  
  
    </>
   
  )
}

export default Mquick