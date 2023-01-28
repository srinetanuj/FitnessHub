

import { Box, Card, CardBody, Divider, Heading, HStack, Image, SimpleGrid, Skeleton, Stack, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const KnowYourselfPage = () => {

  let [mydata,setmydata] = useState([]);
let [error,seterror]= useState("");
let [isloading,setisloading]= useState(false);


let getmydata= async () =>{
    try{
      setisloading(true)
        let res= await axios.get(`https://humane-remarkable-oregano.glitch.me/knowyourself`)
        setmydata(res.data)
setisloading(false)
      }catch(err){
        seterror(err.message)
    }
}

useEffect(() =>{
    getmydata()
},[])


// console.log(mydata)

if(isloading){
  return (

<HStack m='auto' w='80%' mt={30} gap={20} >
  <Skeleton height='600px' w='600px'/>
  <Skeleton height='600px' w='600px'/>
 
</HStack>

  )
}


  return (
    <Box bg={'gray.100'}>

{error !== ""  && <Heading> Error: {error}</Heading>}

<Box bg="rgb(255,121,65)" h={350} >
        <Stack spacing={4} color="white" py="20">
          <Heading size="3xl"> Category: Know Yourself </Heading>
        </Stack>
      </Box>

 <Box w='80%' m='auto'mt='-100px'>
  <SimpleGrid columns={{base:1 ,lg:2}} gap={10} textAlign='left'>

  {

mydata.map((el) => (

<Link to={`/blog/knowYourself/${el.id}`}>
<Card  borderRadius='10px' bg={'white'} key={el.id} >
  <CardBody>
  <Image src={el.image} alt="croww" borderRadius={10} w="100%" h={{base: "350px", md:'450px'}} />
  <Heading fontSize='25px' fontWeight='bold' my={5}>{el.title}</Heading>
  <Text fontSize='18px' color={'grey'}>{el.description} </Text>
  <Divider my={3} />
  <Text fontSize='18px' color={'grey'}>{el.date} </Text>
  </CardBody>
</Card>
</Link>


))


}

  </SimpleGrid>

 </Box>




    </Box>
  )
}

export default KnowYourselfPage