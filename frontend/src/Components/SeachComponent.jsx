

import { Box, Card, CardBody, Divider, Heading, HStack, Image, SimpleGrid, Skeleton, Stack, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const SeachComponent = (props) => {

    console.log(props)

    let {data }= props

  let [mydata,setmydata] = useState([]);
let [error,seterror]= useState("");
let [isloading,setisloading]= useState(false);


     // https://mahogany-impartial-dawn.glitch.me/items

let getmydata= async () =>{
    try{
      setisloading(true)
      let res= await axios.get(`https://mahogany-impartial-dawn.glitch.me/items?q=${data}`)
        setmydata(res.data)
        setisloading(false)
    }catch(err){
        seterror(err.message)
    }
}

useEffect(() =>{
    getmydata()
},[data])


if(isloading){
  return (

<HStack m='auto' w='80%' mt={30} gap={10}>
  <Skeleton height='600px' w='600px'/>
  <Skeleton height='600px' w='600px'/>
 

</HStack>

  )
}






if(data=== ""){
  return(
    <div> </div>
    )
  }

  if(data !== "" &&  mydata== ""){
    return(
      <Box>

     <Box bg="rgb(255,121,65)" h={300} >
        <Stack spacing={4} color="white" py="20">
          <Heading size="3xl"> Search Results For: {data} </Heading>
        </Stack>
      <Heading>It seems we can't find what you're looking for. </Heading>
 
      </Box>



      </Box>
    )
  }



  
  console.log(mydata)


  return (
    <Box bg={'gray.100'}>

{error !== ""  && <Heading> Error: {error} </Heading>}

<Box bg="rgb(255,121,65)" h={300} >
        <Stack spacing={4} color="white" py="20">
          <Heading size="3xl"> Search Results For: {data} </Heading>
        </Stack>
      </Box>

 <Box w='80%' m='auto'mt='-100px'>
  <SimpleGrid columns={{base:1 ,lg:2}} gap={10} textAlign='left'>




  {

mydata.map((el) => (

<Link to={`/blog/${el.id}`}>
<Card  borderRadius='10px' bg={'white'} key={el.id} h={770}>
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

export default SeachComponent
