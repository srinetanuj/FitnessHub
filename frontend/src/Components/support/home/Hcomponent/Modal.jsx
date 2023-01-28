import React,{useState} from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,Button,useDisclosure,FormControl,Input,FormLabel,Icon,Textarea
  } from '@chakra-ui/react'
  import {QuestionOutlineIcon } from '@chakra-ui/icons'

const Modalc  = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [data,setData]=useState({
    username:"",
    email:"",
    message:""

  })

  const handleChange=(e)=>{
    const {name,value}=e.target
      setData({...data,[name]:value})
    }
    const{username,email,message}=data
   
 const handleSubmit=(e)=>{
e.preventDefault()
if(username==="" || email===""||message===""){
alert("Please enter correct value")

}else if(!email.includes("@")){
alert("Please enter correct email")
}
else{
alert("We will contact you soon")
onClose()

}
setData({
  username:"",
    email:"",
    message:""
})

}



  return (
    <>
      <Button onClick={onOpen} background="green.400"> <Icon as={QuestionOutlineIcon} mr={2} /> Support</Button>
     

      <Modal
     
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center" background="green.400">Cotact us</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Your Name</FormLabel>
              <Input type="text" value={username} name="username" onChange={handleChange}  />
             
            </FormControl>

            <FormControl mt={4}>
              <FormLabel> Email address</FormLabel>
              <Input type="email" value={email} name="email" onChange={handleChange} />
             
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>How can we help you ? </FormLabel>
              <Textarea type="text" value={message} name="message" onChange={handleChange} />
             
            </FormControl>
          </ModalBody>

          <ModalFooter>
            
            <Button  background="green.400"  onClick={handleSubmit}  >Send</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Modalc