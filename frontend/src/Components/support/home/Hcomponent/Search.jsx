import React,{useState} from 'react'
import {Input,InputGroup,InputLeftElement,Box, Button} from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'

const Search = () => {

  const [value,setValue] = useState("");
  const navigate =useNavigate();

  const keypres=()=>{
    if(value==="mobile"){
     navigate("/mobile")
    }else if(value==="web"){
     navigate("/web")
    }else if(value==="professional"){
     navigate("/professional")
    }else if(value===""){
        alert("Please input something")
    }else {
       alert("Not a valid input"); 
    }
    setValue("")
}
  return (
    <>
    <Box bgImg="https://theme.zdassets.com/theme_assets/197219/8cb952dce29a0cfa7be9db826bb6c865b78c06a7.png"
    height="300px" textAlign="center"
    >
      <Box position="relative" top="50%" backgroundColor= "#fff"  w="60%" m="auto" display="flex"   >
    <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<SearchIcon color='gray.300' />}
    />
    <Input type='text' placeholder='Enter youe query'
    value={value} onChange={(e)=>setValue(e.target.value)} 
    />
  </InputGroup>
  <Button onClick={keypres}><SearchIcon  /></Button>
  </Box>
  
  </Box>
    </>
  )
}

export default Search