import React from 'react'
import {Input,InputGroup,InputLeftElement,Flex,Link,Heading,Text,Box,Image,Container, UnorderedList, ListItem} from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import Snavbar from '../../home/Hcomponent/Snavbar'
import Help from '../Help'
import Article from '../Article'

const Dairy = () => {
  return (
 <>
 <Snavbar/>
 <Flex justifyContent="space-around"   direction={{base:"column",md:"row"}} gap={5} alignItems="center" w="85%" m="auto" mt={10} mb={10}>
  <Link>Coronometer</Link>
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
    <Link >Diary Overview</Link>
    </Box>
    <Box 
    _hover={{background:"rgba(255, 103, 51, 1)",color:"white"}} p={3}>
    <Link>Add a Food</Link>
    </Box>
    <Box 
    _hover={{background:"rgba(255, 103, 51, 1)",color:"white"}} p={3}>
    <Link>Add an Exercise</Link>
    </Box>
    <Box 
    _hover={{background:"rgba(255, 103, 51, 1)",color:"white"}} p={3}>
    <Link>Add a Biometric</Link>
    </Box>
    <Box 
    _hover={{background:"rgba(255, 103, 51, 1)",color:"white"}} p={3}>
    <Link>Custom Biometrics</Link>
    </Box>
    <Box 
    _hover={{background:"rgba(255, 103, 51, 1)",color:"white"}} p={3}>
    <Link>Add a Note</Link>
    </Box>
    <Box 
    _hover={{background:"rgba(255, 103, 51, 1)",color:"white"}} p={3}>
    <Link>Edit Diary Entries</Link>
    </Box>
    </Flex>
    <Flex direction="column" gap={10}>
<Heading fontSize={30}>Diary Overview</Heading>

<Container maxW="2xl">
<Text m={3}>
    The Diary tab is where you log all your daily items you wish to track. You can also view a <Link color="rgba(255, 103, 51, 1)"> detailed summary </Link>  of the micro and <Link color="rgba(255, 103, 51, 1)"> macronutrients</Link>  you have logged.
    </Text>
    
    <Text m={3}>
    Your diary will display:
    </Text>
    <UnorderedList>
        <ListItem>Timestamp (Gold users only)</ListItem>
        <ListItem>Entry type</ListItem>
        <ListItem>Description of Entry</ListItem>
        <ListItem>Amount of entered entry</ListItem>
        <ListItem>Energy (Gold users can customize this column to show a different nutrient)</ListItem>
        </UnorderedList>
        </Container>

    
    
<Box m={3}>
    
    <Image src="https://support.cronometer.com/hc/article_attachments/360094100172/Navigation_tab_Diary.png" alt="imgdas" width="717px" height=""/>
</Box>
<Container maxW="2xl">
<Text m={3} fontSize={30}>
Change the Date of Your Diary
    </Text>
    <Text m={3}>
    Your diary will default to today, but you can choose to journal any day by using the right and left arrows on the green date icon  (circled in red below) to go ahead or back by one day at a time. Expand the calendar widget to select a specific day to open in your diary. You can easily navigate between years or months by selecting the double or single arrows at the top of the calendar.
    </Text>
    
    
        </Container>
        <Box m={3}>
    
    <Image src="https://support.cronometer.com/hc/article_attachments/4412315833364/Diary_calendar_circled.png" alt="imgdas" width="717px" height="290px"/>
</Box>

<Container maxW="2xl">
<Text m={3} fontSize={30}>
Energy Summary
    </Text>
    <Text m={3}>
    A summary of your daily nutrition is displayed in the Energy Summary section. You can see at a glance how well you are hitting each of your nutritional targets.
    </Text>
    
    
        </Container>
        <Box m={3}>
    
    <Image src="https://support.cronometer.com/hc/article_attachments/4892089591956/mceclip0.png" alt="imgdas" width="500px" height="500px"/>
</Box>
</Flex>
</Flex>
<Help/>
<hr/>
<Article/>

 </>
  )
}

export default Dairy