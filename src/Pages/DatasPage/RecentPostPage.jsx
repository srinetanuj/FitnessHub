import { Box, Card, CardBody, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const RecentPostPage = () => {

  let [mydata,setmydata] = useState([]);
let [error,seterror]= useState("");


let getmydata= async () =>{
    try{
        let res= await axios.get(`https://humane-remarkable-oregano.glitch.me/recentpost`)
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

<Box bg="rgb(38,42,59)" h={350}>
        <Stack spacing={4} color="white" py="20">
          <Heading size="3xl"> Archives </Heading>
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

export default RecentPostPage