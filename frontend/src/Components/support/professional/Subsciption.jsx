import React from 'react'
import {Input,InputGroup,InputLeftElement,Flex,Heading,Text,Box,Image,Container} from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import Snavbar from '../home/Hcomponent/Snavbar'
import Help from '../web version/Help'
import Article from '../web version/Article'

const Subsciption = () => {
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
       <Link to="/prof/sub" >Professional Subscription <br/> Overview</Link>
       </Box>
       
       </Flex>
       <Flex direction="column" alignItems="center" mr={20} gap={3} >
   <Heading fontSize={30} m={10} mr={0}>Professional Subscription Overview</Heading>
   <Text  fontSize={30}>
       Getting Started with Cronometer Pro
       </Text>
       <Text m={3} fontSize={20}>
       Welcome to Cronometer Pro!
       </Text>
   
   <Container maxW="2xl">
    <Text>The Nutrition Tracking Software designed to track and optimize your clients’ nutrition while empowering them to reach and maintain optimal health.</Text>
   </Container>
   <Text m={3} fontSize={20}>
   Step 1: Log into your account
       </Text>
       <Text m={3} >
       To start, log into Cronometer in a new tab or window of your web browser.
       </Text>
       <Link  to="/login" > <Text color="rgba(255, 103, 51, 1)" m={3}>Log in</Text>
       </Link>
       <Container maxW="2xl">
        <Text>Please note the Cronometer Pro interface is only accessible on our website, and is not currently available on the mobile app. When your clients are using Cronometer, they can use Cronometer on the web or on the mobile app.</Text>
        <Text>‍
Once you’ve logged in to your account, hover your mouse over the Cronometer logo in the top left-hand corner and ensure you have your Pro account selected.</Text>
       </Container>
       <Image src="https://support.cronometer.com/hc/article_attachments/4405054762644/Account_switcher.png" alt="img" w="90%"/>
       <Text m={3} >
       You also have access to the Gold version of our app for your own personal use.
       </Text>
       <Text m={3} fontSize={20}>
       Step 2: Add Your Business Info
       </Text>
       <Text m={3} >
       In the main navigation at the top, you can add your company name and logo under Settings > Branding.<br/> This information will populate in your client’s diary.
       </Text>
       <Text m={3} >
       It's important to add your company name and logo before adding clients..
       </Text>
       <Image src="https://support.cronometer.com/hc/article_attachments/4405039700500/Branding.png" alt="img" w="641px" h="500px"/>
       <Text m={3} >
       You can also add your company information to our Directory of Healthcare Professionals under Settings > Listing.<br/> This gets your business in front of our extensive user base and could potentially land you new clients.
       </Text>
       <Image src="https://support.cronometer.com/hc/article_attachments/4405054763924/Listing_details.png" alt="img" w="641px" h="400px"/>
       <Text m={3} fontSize={20}>
       Step 3: Add Your Clients
       </Text>
       <Container maxW="2xl">
        <Text mb={3}>Now let’s send an invite to your clients so your client can start logging their nutrition, and you in turn can start tracking their progress. You will have the ability to view and manage your client’s Cronometer diaries. Click on Clients in the top navigation.</Text>
       <Text>Once your clients have accepted your invitation, they will receive access to the premium Gold version of Cronometer. This is a benefit included in your plan to which you get to extend the added value to your clients.</Text>
       </Container>
       <Image src="https://support.cronometer.com/hc/article_attachments/4405039697044/Add_Client.png" alt="img" w="641px" h="400px"/>
       <Text m={3} fontSize={20}>
       Step 4 : Get to Know Cronometer
       </Text>
       <Container maxW="2xl">
        <Text>
        Our comprehensive user manual is the best place to start. Learn how to navigate the diary, generate reports, set targets, sync devices... and more!
        </Text>
       </Container>
       <Image src="https://cdn1.cronometer.com/2020/landing/user-manual-icon.png" alt="img" w="300px" h="200px"/>
   <Help/>
   <hr/>
   <Article/>
   </Flex>
   
   </Flex>
   </>
   
   
   
   
  )
}

export default Subsciption