import React from 'react'
import {Input,InputGroup,InputLeftElement,Box} from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'

const Search = () => {
  return (
    <>
    <Box bgImg="https://theme.zdassets.com/theme_assets/197219/8cb952dce29a0cfa7be9db826bb6c865b78c06a7.png"
    height="300px" textAlign="center"
    >
      <Box position="relative" top="50%" backgroundColor= "#fff"  w="60%" m="auto" >
    <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<SearchIcon color='gray.300' />}
    />
    <Input type='text' placeholder='Search' />
  </InputGroup>
  </Box>
  </Box>
    </>
  )
}

export default Search