import React from 'react'
import Snavbar from './Hcomponent/Snavbar'
import Search from './Hcomponent/Search'
import Content from './Hcomponent/Conten'
import Modalc from './Hcomponent/Modal'
import { Box } from '@chakra-ui/react'

const Shome = () => {
  return (
    <Box mb={10}>
    <Snavbar/>
    <Search/>
    <Content/>
    <Modalc/>
    
     
    </Box>
  )
}

export default Shome