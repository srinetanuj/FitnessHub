import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Button, Card, CardBody, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AppUpdate = () => {


let [mydata,setmydata] = useState([]);
let [error,seterror]= useState("");


let getmydata= async () =>{

    try{
        let res= await axios.get(`https://humane-remarkable-oregano.glitch.me/appupdate?_limit=4`)
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
    <Box w='80%' margin='auto' textAlign='left' marginTop="70px">


        {error !== ""  && <Heading> Error: {error}</Heading>}

<Text fontSize='20px'  color={'teal.700'} fontWeight="bold" >APP UPDATES</Text>
<Text fontSize='40px' mb={5}  fontWeight="bold" >New Features</Text>


{/* templateColumns='repeat(auto-fill, minmax(280px, 1fr))' */}
<SimpleGrid spacing={4} columns={[1,2,2,4]}   bg={'gray.100'} >


{

  mydata.map((el) => (

<Card  borderRadius='10px' bg={'white'} key={el.id}>
    <CardBody>
    <Image src={el.image} alt="croww" borderRadius={10}/>
    <Heading size='md' my={5}>{el.title}</Heading>
    <Text fontSize='16px'>{el.date}</Text>
    </CardBody>
  </Card>


  ))


}
  
</SimpleGrid>



  <Box  pt={5}   textAlign='right'>
  <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline' >
    VIEW MORE
  </Button>
  </Box>




    </Box>
  )
}

export default AppUpdate