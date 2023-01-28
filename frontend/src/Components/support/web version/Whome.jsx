import React from 'react'
import Snavbar from '../home/Hcomponent/Snavbar'
import {Input,InputGroup,InputLeftElement,Flex,Grid,GridItem,Heading,Text,} from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

const Whome = () => {
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
<Heading as="h3" size="sm" mb={4}>Web Version</Heading>
<Text mb={20}>User Manual for Cronometer on Web</Text>
<Grid gridTemplateColumns={{base:"repeat(1,1fr)", md:"repeat(2,1fr)"}} gap={5} mb={10}>
    <GridItem>
      <Link><Heading as="h3" size="sm" mb={4}>Web - Quick Start Guide</Heading></Link>  
<Flex direction="column" gap={4}>
<Link to="/web/dashboard">Dashboard</Link>
<Link to="/web/quick">Web - Quick Start Guide</Link>
</Flex>
    </GridItem>
    <GridItem>
    <Link><Heading as="h3" size="sm" mb={4}>Diary</Heading></Link>  

<Flex direction="column" gap={4}>
<Link to="/web/dairy"> Diary Overview</Link>
<Link>Add a Food</Link>
<Link>Add an Exercise </Link>
<Link>Add a Biometric </Link>
<Link> Custom Biometrics</Link>
<Link>Add a Note </Link>
</Flex>
    </GridItem>
    <GridItem>
    <Link><Heading as="h3" size="sm" mb={4}>Trends</Heading></Link>  
<Flex direction="column" gap={4}>
<Link> Trends Overview</Link>
<Link> Charts</Link>
<Link> Charts - Chart Library</Link>
<Link>Charts - Custom Charts </Link>
<Link> Charts - Glucose Ketone Index (GKI)</Link>
<Link>Charts - Blood Pressure + Heart Rate </Link>

</Flex>
    </GridItem>
    <GridItem>
    <Link><Heading as="h3" size="sm" mb={4}>Foods</Heading></Link>  
<Flex direction="column" gap={4}>
<Link> Foods Overview</Link>
<Link> Create a Custom Food</Link>
<Link> Create Custom Recipe</Link>
<Link> 
Set Cooked Recipe Weight</Link>
<Link>Search Food </Link>
<Link> Ask The Oracle</Link>
</Flex>
    </GridItem>
    <GridItem>
    <Link><Heading as="h3" size="sm" mb={4} >Settings</Heading></Link>  
<Flex direction="column" gap={4} >
<Link> Account Settings</Link>
<Link>Two-Factor Authentication </Link>
<Link>Profile + Targets</Link>
<Link> 
Target Schedule</Link>
<Link> Energy Burned</Link>
<Link> Weight Goal or Custom Energy Target</Link>
</Flex>
    </GridItem>
</Grid>
    </>
  )
}

export default Whome