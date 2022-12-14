import React from 'react'
import { Box,Flex,Image,Link } from '@chakra-ui/react'


const Snavbar = () => {
  return (
    
<Flex justifyContent="space-around" alignItems="center" position="relative" height="70px" p="0 5%">
    <Box>
        <Link >
        <Image src="https://theme.zdassets.com/theme_assets/197219/7534276c1264c1a3347392f65cc19be0d259f9ca.png" alt ="slogo" w="300px" />
        </Link>
    </Box>
    <Box>
        <Link>Submit a request</Link>
        
    </Box>
</Flex>
   
  )
}

export default Snavbar