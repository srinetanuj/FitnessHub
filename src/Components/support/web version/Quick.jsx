import React from 'react'
import Snavbar from '../home/Hcomponent/Snavbar'
import {Box,Image,Text,Heading,Flex,InputLeftElement,InputGroup,Input,Container,ListItem} from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import { UnorderedList } from '@chakra-ui/react'
import Help from './Help'
import Article from './Article'

const Quick = () => {
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
<Flex justify="center" gap={10} direction={{base:"column",md:"row"}}>
    <Flex direction="column" gap={5} >
    <Heading as="h6" fontSize={20}>Article in the section</Heading>
    <Box  _hover={{background:"rgba(255, 103, 51, 1)",color:"white"}} p={3}  >
    <Link  to="/web/dashboard">Dashboard</Link>
    </Box>
    <Box background="rgba(255, 103, 51, 1)" color="white"
    p={3}>
    <Link to="/web/quick"> Web - Quick Start Guide</Link>
    </Box>
    </Flex>
    <Flex direction="column" gap={10}>
<Heading fontSize={30}>Web - Quick Start Guide</Heading>
<Box m={3}>
    <Text m={3} fontSize={30}>
    Welcome to Cronometer!
    </Text>
    <Text m={3} >
    Sign up for an account with Cronometer at <Link color="rgba(255, 103, 51, 1)"> https://cronometer.com/signup/</Link>
    </Text>
    
    <Image src="https://support.cronometer.com/hc/article_attachments/360094099072/Sign_up.png" alt="imgdas" width="717px" height="290px"/>
</Box>
<Box m={3}>
    <Text m={3}>
    Enter your details correctly as these will be used to calculate your targets.
    </Text>
    <Image src="https://support.cronometer.com/hc/article_attachments/360094099052/create_account.png" alt="imgdas" width="717px" height="290px"/>
</Box>
<Container maxW="2xl">

<Text mb={5}>Don't worry; if you do make a mistake in the sign-up process you can always edit it later, once you have logged into your account.</Text>

<Text mb={5}>Once the account has been created, you will receive an email to validate your account. Follow the link in the email, and you will be ready to start tracking. If you cannot click the link in the email, copy the link and paste it into the URL bar in your browser. </Text>
<Text>Once logged in, go the Settings tab  > Profile sub-tab to make sure all your details are correct. </Text>
<UnorderedList m={3}>
  <ListItem>Double-check the details you added in the sign-up process.
</ListItem>
  <ListItem>Select an appropriate <Link color="rgba(255, 103, 51, 1)">Activity Level</Link> </ListItem>

</UnorderedList>

</Container>
<Box m={3}>
    
    <Image src="https://support.cronometer.com/hc/article_attachments/360094031731/Profile_section.png" alt="imgdas" width="717px" height="290px"/>
</Box>
<Text m={3} >
Go the Settings tab  > Targets sub-tab to set up your nutrient targets!
    </Text>
    
<UnorderedList m={3}>
  <Flex direction="column" justify="flex-start">
  <ListItem>Set your <Link color="rgba(255, 103, 51, 1)">Macronutrient Targets</Link>
    
    <UnorderedList>
      <ListItem>Fixed</ListItem>
      <ListItem>Ratios</ListItem>
      <ListItem>Keto Calculator - If you are following a Ketogenic diet, make sure you enter a Body Fat % to get the most accurate settings</ListItem>
    </UnorderedList>
</ListItem>
  <ListItem>Set a <Link color="rgba(255, 103, 51, 1)"> Weight Goal </Link> if applicable to your needs</ListItem>
  <ListItem>Set your <Link color="rgba(255, 103, 51, 1)">Micronutrient targets</Link> </ListItem>
  <ListItem> Connect your account to any<Link color="rgba(255, 103, 51, 1)">activity trackers</Link>you may use </ListItem>
  </Flex>
</UnorderedList>



<Text><Link color="rgba(255, 103, 51, 1)">Learn how to set up your account on our Mobile App</Link></Text>
<Help/>
<hr/>
<Article/>
</Flex>

</Flex>





  </>
 
  )
}

export default Quick