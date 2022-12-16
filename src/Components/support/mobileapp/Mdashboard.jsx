import React from 'react'
import {Input,InputGroup,InputLeftElement,Flex,Heading,Text,Box,Image} from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import Snavbar from '../home/Hcomponent/Snavbar'
import Help from '../web version/Help'
import Article from '../web version/Article'

const Mdashboard = () => {
  return (
    <>
    <Snavbar/>
    <Flex justifyContent="space-around"   direction={{base:"column",md:"row"}} gap={5} alignItems="center" w="85%" m="auto" mt={10} mb={10}>
     <Link to="/support">Coronometer</Link>
     <InputGroup w={{base:"80%",md:"30%"}}  >
       <InputLeftElement
         pointerEvents='none'
         children={<SearchIcon color='gray.300' />}
       />
       <Input type='text' placeholder='Search' />
     </InputGroup>
   </Flex>
   <Flex justify="center" gap={10} direction={{base:"column",md:"row"}} >
       <Flex direction="column" gap={5} >
       <Heading as="h6" fontSize={20}>Article in the section</Heading>
       <Box background="rgba(255, 103, 51, 1)" p={3} color="white">
       <Link to="/mobile/dashboard" >Dashboard-Mobile</Link>
       </Box>
       <Box 
       _hover={{background:"rgba(255, 103, 51, 1)",color:"white"}} p={3}>
       <Link to="/mobile/quick"> Mobile - Quick Start Guide</Link>
       </Box>
       </Flex>
       <Flex direction="column" alignItems="flex-start" mr={20} >
   <Heading fontSize={30} m={10}>Dashboard-Mobile</Heading>
   
   <Box m={3}>
       <Text m={3}>
       The Dashboard can be accessed from the Home tab
       </Text>
       <Image src="https://support.cronometer.com/hc/article_attachments/10828032640404" alt="imgdas" width="300px" />
   </Box>
  
   <Box mr={30} >
       <Text m={3}>
       You can customize which elements to display by going to the Settings tab > Display > Dashboard Settings.
       </Text>
       <Image src="https://support.cronometer.com/attachments/token/uBhq0x8SGRE1uP0aHIxs7rNan/?name=inline-450345575.png" alt="imgdas" width="300px" mr={50} />
   </Box>
   
   <Help/>
   <hr/>
   <Article/>
   </Flex>
   
   </Flex>
   
   
   
    </>
  )
}

export default Mdashboard