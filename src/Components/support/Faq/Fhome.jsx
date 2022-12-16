
import React from 'react'
import {Input,InputGroup,InputLeftElement,Flex,Grid,GridItem,Heading,Text,} from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import Snavbar from '../home/Hcomponent/Snavbar'
const Fhome = () => {
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
<Heading as="h3" size="md" mb={4}>FAQ</Heading>
<Text mb={20}>Cronometer Frequently Asked Questions</Text>
<Grid gridTemplateColumns={{base:"repeat(1,1fr)", md:"repeat(2,1fr)"}} gap={5}>
    <GridItem>
      <Link><Heading as="h3" size="sm" mb={4}>General FAQ</Heading></Link>  
<Flex direction="column" gap={4}>
<Link>Accessibility for Visually Impaired

</Link>
<Link>Is Cronometer translated into different Languages?</Link>
<Link>How to Calculate Your Body Fat Percentage</Link>

</Flex>
    </GridItem>
    <GridItem>
    <Link><Heading as="h3" size="sm" mb={4}>Nutrition Data FAQ</Heading></Link>  

<Flex direction="column" gap={4}>
<Link> Do I log my foods raw or cooked?

Are kcal the same as Calories?
How do I track my water intake?
Are there nutrients missing from Cronometer?
How do I add a supplement to my diary?</Link>
<Link> Reading Nutrition Labels</Link>
<Link> </Link>
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

export default Fhome