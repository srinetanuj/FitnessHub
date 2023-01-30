import React,{useState} from 'react'


import {Input,InputGroup,InputLeftElement,Flex,FormControl,FormErrorMessage,FormLabel,FormHelperText,Textarea,Button} from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import Snavbar from './Hcomponent/Snavbar'

const Request = () => {
 
  const [data,setData]=useState({
    email:"",
    subject:"",
    description:"",
    file:""
  })
  const handleInputChange = (e) => {
    const {name,value}=e.target
    setData({...data,[name]:value})
  }
  

  const {email,subject,description,file}=data
  const isError = email === ''||subject===""
 
  const handleSubmit=(e)=>{
e.preventDefault()
if(email === ''||subject===""||description===""||file===""){
  alert("Please fill all the data")
}else{
  alert("request is submitted")
}
setData({
  email:"",
  subject:"",
  description:"",
  file:""
})
  }




  return (
    
    <>
    <Snavbar/>
    <hr></hr>
<Flex justifyContent="space-around"   direction={{base:"column",md:"row"}} gap={5} alignItems="center" w="85%" m="auto" mt={10} mb={10}>
  <Link to="/support">Coronometer</Link>
  <InputGroup w={{base:"80%",md:"30%"}}  >
    <InputLeftElement
      pointerEvents='none'
      children={<SearchIcon color='gray.300' />}
    />
    <Input type='text'
     placeholder='Search' 
     
     
      />
  </InputGroup>
  
</Flex>
<Flex justify="center" alignItems="center" direction="column" m="auto" w="58%" gap={4} mb={10}>
<FormControl isInvalid={isError}>
      <FormLabel>Email</FormLabel>
      <Input type='email' value={email} name="email" onChange={handleInputChange} />
      {!isError ? (
        <FormHelperText>
         
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
    </FormControl>
    <FormControl isInvalid={isError}>
    <FormLabel>Subject</FormLabel>
      <Input type='text' value={subject} name="subject" onChange={handleInputChange} />
      {!isError ? (
        <FormHelperText>
         
        </FormHelperText>
      ) : (
        <FormErrorMessage>Subject is required.</FormErrorMessage>
      )}
    </FormControl>
    <FormControl>
    <FormLabel>Description</FormLabel>
      <Textarea value={description} name="description" onChange={handleInputChange}/>
     
    </FormControl>
    <FormControl>
    <FormLabel>Attachment</FormLabel>
      <Input type="file" value={file} name="file" onChange={handleInputChange}/>
      </FormControl>
    <Button onClick={handleSubmit} background="rgba(255, 103, 51, 1)">Submit</Button>

    </Flex>
   


    
    </>


  )
}

export default Request