import React from 'react'
import { Box,Flex,Image,Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import logo from "../../../../Assets/Fitness_hub_bg_less.png";


const Snavbar = () => {
  return (
    
<Flex justifyContent="space-around" alignItems="center" position="relative" height="100px" p="0 5%" >
    <Box>
        <Link to ="/support" >
        <Image src={logo} alt ="slogo"  w={20}  />
        </Link>
    </Box>
    <Box>
       <Button bg='rgba(255, 103, 51, 1)'><Link to="/request">Submit a request</Link></Button>  
        
    </Box>
</Flex>
   
  )
}

export default Snavbar