import { ChevronDownIcon } from '@chakra-ui/icons'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, color, Divider, Flex, HStack,  Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import {Link} from "react-router-dom"
import {RiDashboardFill} from 'react-icons/ri'
import {AiOutlineMenu ,AiFillSetting , AiFillDollarCircle , AiFillQuestionCircle} from "react-icons/ai"
import {FaBook} from "react-icons/fa"
import {BsFillFileBarGraphFill} from "react-icons/bs"
import {GiShinyApple} from "react-icons/gi"
import {HiInformationCircle} from "react-icons/hi"

const Sidebar = () => {

  let [isopen,setisopen]= useState(true);

  let toggleState= () =>{
    setisopen(!isopen)
  }


  return (
    <Box  style={{width: isopen ? "18%" : "3%"}} >


<Box minH='100vh' bg='rgb(39,42,58)' color='white'  fontSize='18px' fontWeight='400'>
  <Stack>

<Flex justifyContent='space-around' py={4} _hover={{color:'orange.500' }} >
    <Text style={{display: isopen ?  "block" : "none"}} fontSize='18px' fontWeight='bold'> CHRONOMETER </Text>
    <Box style={{marginLeft: isopen ?  "10px" : "0px"}}  border="1px solid grey" p={1} onClick={ toggleState }><AiOutlineMenu fontSize='24px'/></Box>
</Flex>

<Divider/>

<Link to='/dashboard'>
<Flex _hover={{color:'orange.500' }}>
   <Box mx={4}><RiDashboardFill /></Box>  
   <Text>Dashboard</Text>
</Flex>
</Link> 
<Divider/>



<Link to='/diary'>
<Flex _hover={{color:'orange.500' }} >
   <Box mx={4}><FaBook /></Box>  
   <Text>Diary</Text>
</Flex>
</Link> 



<Box >

  <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem >
    <h2>
      <AccordionButton  _hover={{color:'orange.500' }}>
      <Box as='span' mr={4} ><BsFillFileBarGraphFill /></Box>
        <Box as="span" flex='1' textAlign='left' fontSize='18px' fontWeight='400'>
          Trends
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} style={{display: isopen ?  "block" : "none"}} >
    <Divider/>
      <Text py={2} _hover={{color:'orange.500' }}>first</Text>
      <Divider/>
      <Text py={2} _hover={{color:'orange.500' }}>Second</Text>
      <Divider/>
      <Text py={2} _hover={{color:'orange.500' }}>third</Text>
      <Divider/>
      <Text py={2} _hover={{color:'orange.500' }}>fourth</Text>
      <Divider/>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton  _hover={{color:'orange.500' }}>
      <Box as='span' mr={4} ><GiShinyApple /></Box>
        <Box as="span" flex='1' textAlign='left' fontSize='18px' fontWeight='bold'>
          Food
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} style={{display: isopen ?  "block" : "none"}} >
    <Divider/>
      <Text py={2} _hover={{color:'orange.500' }}>first</Text>
      <Divider/>
      <Text py={2} _hover={{color:'orange.500' }}>Second</Text>
      <Divider/>
      <Text py={2} _hover={{color:'orange.500' }}>third</Text>
      <Divider/>
      <Text py={2} _hover={{color:'orange.500' }}>fourth</Text>
      <Divider/>
    </AccordionPanel>
  </AccordionItem>


  <AccordionItem>
    <h2>
      <AccordionButton  _hover={{color:'orange.500' }}>
      <Box as='span' mr={4} ><AiFillSetting /></Box>
        <Box as="span" flex='1' textAlign='left' fontSize='18px' fontWeight='bold'>
          Setting
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} style={{display: isopen ?  "block" : "none"}} >
    <Divider/>
      <Text py={2} _hover={{color:'orange.500' }}>first</Text>
      <Divider/>
      <Text py={2} _hover={{color:'orange.500' }}>Second</Text>
      <Divider/>
      <Text py={2} _hover={{color:'orange.500' }}>third</Text>
      <Divider/>
      <Text py={2} _hover={{color:'orange.500' }}>fourth</Text>
      <Divider/>
    </AccordionPanel>
  </AccordionItem>



</Accordion>


<Link to='/plans'>
<Flex py={2} _hover={{color:'orange.500' }}>
   <Box mx={4}><AiFillDollarCircle /></Box>  
   <Text>Plans</Text>
</Flex>
</Link> 

<Divider/>
<Link to='/help'>
<Flex py={2} _hover={{color:'orange.500' }}>
   <Box mx={4}><AiFillQuestionCircle/></Box>  
   <Text>Help</Text>
</Flex>
</Link> 
<Divider/>

<Accordion defaultIndex={[0]} allowMultiple >
  <AccordionItem>
    <h2>
      <AccordionButton  _hover={{color:'orange.500' }}>
      <Box as='span' mr={4} ><HiInformationCircle /></Box>
        <Box as="span" flex='1' textAlign='left'fontSize='18px' fontWeight='bold' >
          About
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} style={{display: isopen ?  "block" : "none"}} >
    <Divider/>
      <Text py={2} _hover={{color:'orange.500' }}>first</Text>
      <Divider/>
      <Text py={2} _hover={{color:'orange.500' }}>Second</Text>
      <Divider/>
      <Text py={2} _hover={{color:'orange.500' }}>third</Text>
      <Divider/>
      <Text py={2} _hover={{color:'orange.500' }}>fourth</Text>
      <Divider/>
    </AccordionPanel>
  </AccordionItem>


</Accordion>





</Box>







  </Stack>




</Box>

{/* <Box  border="2px solid red" style={{width: isopen ?  "82%" : "96%"}} h='100vh' bg='rgb(255,252,246)'>  </Box> */}




    </Box>
  )
}

export default Sidebar