

import { Box, Card, CardBody, Divider, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AppUpdatePage = () => {

  let [mydata,setmydata] = useState([]);
let [error,seterror]= useState("");


let getmydata= async () =>{
    try{
        let res= await axios.get(`https://humane-remarkable-oregano.glitch.me/appupdate`)
        setmydata(res.data)
    }catch(err){
        seterror(err.message)
    }
}

useEffect(() =>{
    getmydata()
},[])


console.log(mydata)


  return (
    <Box bg={'gray.100'}>

{error !== ""  && <Heading> Error: {error}</Heading>}

<Box bg="rgb(255,121,65)" h={350} >
        <Stack spacing={4} color="white" py="20">
          <Heading size="3xl"> Category: App Updates </Heading>
        </Stack>
      </Box>

 <Box w='80%' m='auto'mt='-100px'>
  <SimpleGrid columns={{base:1 ,lg:2}} gap={10} textAlign='left'>

  {

mydata.map((el) => (

<Card  borderRadius='10px' bg={'white'} key={el.id} >
  <CardBody>
  <Image src={el.image} alt="croww" borderRadius={10} w="100%" h={{base: "350px", md:'450px'}} />
  <Heading fontSize='25px' fontWeight='bold' my={5}>{el.title}</Heading>
  <Text fontSize='18px' color={'grey'}>{el.description} </Text>
  <Divider my={3} />
  <Text fontSize='18px' color={'grey'}>{el.date} </Text>
  </CardBody>
</Card>


))


}

  </SimpleGrid>

 </Box>




    </Box>
  )
}

export default AppUpdatePage