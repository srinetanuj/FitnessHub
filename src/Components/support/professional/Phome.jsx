import React from 'react'
import {Input,InputGroup,InputLeftElement,Flex,Grid,GridItem,Heading,Text,} from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import Snavbar from '../home/Hcomponent/Snavbar'

const Phome = () => {
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
<Heading as="h3" size="sm" mb={4}>Professional Version</Heading>
<Text mb={20}>User Manual for Cronometer Pro</Text>
<Grid gridTemplateColumns={{base:"repeat(1,1fr)", md:"repeat(2,1fr)"}} gap={5} mb={10}>
    <GridItem>
      <Link><Heading as="h3" size="sm" mb={4}>Pro - Getting Started</Heading></Link>  
<Flex direction="column" gap={4}>
<Link to="/prof/sub" >Professional Subscription Overview</Link>

</Flex>
    </GridItem>
    <GridItem>
    <Link><Heading as="h3" size="sm" mb={4}>Pro Account Settings</Heading></Link>  

<Flex direction="column" gap={4}>
<Link> Pro-HIPAA</Link>
<Link> Pro - Account</Link>
<Link> Pro - Branding </Link>
<Link> Pro - Listing </Link>
</Flex>
    </GridItem>
    <GridItem>
    <Link><Heading as="h3" size="sm" mb={4}>Clients</Heading></Link>  
<Flex direction="column" gap={4}>
<Link>Pro Messaging

Pro - Client Profile
</Link>
<Link>Pro - Clients Tab</Link>
<Link>Pro - Client Profile</Link>
<Link>Pro - Client Settings Menu </Link>


</Flex>
    </GridItem>
    <GridItem>
    <Link><Heading as="h3" size="sm" mb={4}>Foods Tab</Heading></Link>  
<Flex direction="column" gap={4}>
<Link> Foods</Link>

</Flex>
    </GridItem>
    
    
</Grid>
    </>
  )
}

export default Phome