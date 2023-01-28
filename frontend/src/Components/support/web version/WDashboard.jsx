import React from 'react'
import Snavbar from '../home/Hcomponent/Snavbar'
import {Input,InputGroup,InputLeftElement,Flex,Heading,Text,Box,Image} from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import Help from './Help'
import Article from './Article'

function WDashboard() {
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
<Flex justify="center" gap={10} direction={{base:"column",md:"row"}}>
    <Flex direction="column" gap={5} >
    <Heading as="h6" fontSize={20}>Article in the section</Heading>
    <Box background="rgba(255, 103, 51, 1)" p={3} color="white">
    <Link to="/web/dashboard" >Dashboard</Link>
    </Box>
    <Box 
    _hover={{background:"rgba(255, 103, 51, 1)",color:"white"}} p={3}>
    <Link to="/web/quick"> Web - Quick Start Guide</Link>
    </Box>
    </Flex>
    <Flex direction="column" gap={10}>
<Heading fontSize={30}>DASHBOARD</Heading>
<Box m={3}>
    <Text m={3}>
    By default, your Cronometer will open on your Dashboard.
    </Text>
    <Image src="https://support.cronometer.com/hc/article_attachments/10570196750356" alt="imgdas" width="717px" height="290px"/>
</Box>
<Box m={3}>
    <Text m={3}>
    You can customize which elements to display by going to the Settings tab  Display sub-tab
    </Text>
    <Image src="https://support.cronometer.com/hc/article_attachments/10827453047956" alt="imgdas" width="717px" height="290px"/>
</Box>
<Help/>
<hr/>
<Article/>
</Flex>

</Flex>



 </>
  )
}

export default WDashboard