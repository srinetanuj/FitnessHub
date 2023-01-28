import React from 'react'
import {Input,InputGroup,InputLeftElement,Flex,Grid,GridItem,Heading,Text,} from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import Snavbar from '../home/Hcomponent/Snavbar'

const MHome = () => {
  return (
    <>
    <Snavbar/>
    <Flex justifyContent="space-around"   direction={{base:"column",md:"row"}} gap={5} alignItems="center" w="85%" m="auto" mt={10} mb={10}>
  <Link to="/support" >Coronometer</Link>
  <InputGroup w={{base:"80%",md:"30%"}}  >
    <InputLeftElement
      pointerEvents='none'
      children={<SearchIcon color='gray.300' />}
    />
    <Input type='text' placeholder='Search' />
  </InputGroup>
</Flex>
<Heading as="h3" size="sm" mb={4}>Mobile App</Heading>
<Text mb={20}>User Manual for the Cronometer Mobile App</Text>
<Grid gridTemplateColumns={{base:"repeat(1,1fr)", md:"repeat(2,1fr)"}} gap={5} mb={10}>
    <GridItem>
      <Link><Heading as="h3" size="sm" mb={4}>Mobile - Quick Start Guide</Heading></Link>  
<Flex direction="column" gap={4}>
<Link to="/mobile/dashboard">Dashboard - Mobile</Link>
<Link to="/mobile/quick">Mobile - Quick Start Guide</Link>
</Flex>
    </GridItem>
    <GridItem>
    <Link><Heading as="h3" size="sm" mb={4}>Diary</Heading></Link>  

<Flex direction="column" gap={4}>
<Link> Mobile-Diary Overview</Link>
<Link> Mobile-Add a Food</Link>
<Link> Mobile-Add an Exercise </Link>
<Link> Mobile-Add a Biometric </Link>
<Link> Mobile- Custom Biometrics</Link>
<Link> Mobile-Add a Note </Link>
</Flex>
    </GridItem>
    <GridItem>
    <Link><Heading as="h3" size="sm" mb={4}>Trends</Heading></Link>  
<Flex direction="column" gap={4}>
<Link>Mobile-Trends Overview</Link>
<Link>Mobile- Charts</Link>
<Link>Mobile- Chart Library</Link>
<Link>Mobile Custom charts </Link>


</Flex>
    </GridItem>
    <GridItem>
    <Link><Heading as="h3" size="sm" mb={4}>Foods</Heading></Link>  
<Flex direction="column" gap={4}>
<Link> Mobile-Foods Overview</Link>
<Link> Mobile-Create a Custom Food</Link>
<Link> Mobile-Create Custom Recipe</Link>
<Link> Mobile-Set Cooked Recipe Weight</Link>
<Link> Mobile-Search Food </Link>
<Link> Mobile-Ask The Oracle</Link>
</Flex>
    </GridItem>
    <GridItem>
    <Link><Heading as="h3" size="sm" mb={4} >Settings</Heading></Link>  
<Flex direction="column" gap={4} >
<Link>Mobile - Settings Overview</Link>
<Link> Mobile-Two-Factor Authentication </Link>
<Link> Mobile-Profile + Targets</Link>
<Link> Mobile- 
Target Schedule</Link>
<Link> Mobile- Energy Burned</Link>
<Link> Mobile- Weight Goal or Custom Energy Target</Link>
</Flex>
    </GridItem>
    <GridItem>
    <Link><Heading as="h3" size="sm" mb={4} >Widgets</Heading></Link>  
<Flex direction="column" gap={4} >
<Link>Android Home Screen Widgets

</Link>
<Link> iOS Home Screen Widgets </Link>
<Link> Wear OS Watch App</Link>

</Flex>
    </GridItem>
</Grid>
    </>
  )
}

export default MHome