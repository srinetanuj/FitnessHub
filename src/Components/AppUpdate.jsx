import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Button, Card, CardBody, Heading, HStack, Image, SimpleGrid, Skeleton, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const AppUpdate = () => {


let [mydata,setmydata] = useState([]);
let [error,seterror]= useState("");
let [isloading,setisloading]= useState(false);


let getmydata= async () =>{

    try{
      setisloading(true)
        let res= await axios.get(`https://humane-remarkable-oregano.glitch.me/appupdate?_limit=4`)
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

<HStack m='auto' w='80%' mt={30}>
  <Skeleton height='400px' w='400px'/>
  <Skeleton height='400px' w='400px'/>
  <Skeleton height='400px' w='400px'/>
  <Skeleton height='400px' w='400px'/>

</HStack>

  )
}


  return (
    <Box w='80%' margin='auto' textAlign='left' marginTop="70px">


        {error !== ""  && <Heading> Error: {error}</Heading>}

<Text fontSize='20px'  color={'teal.700'} fontWeight="bold" >APP UPDATES</Text>
<Text fontSize='40px' mb={5}  fontWeight="bold" >New Features</Text>


{/* templateColumns='repeat(auto-fill, minmax(280px, 1fr))' */}
<SimpleGrid spacing={4} columns={[1,2,2,4]}   bg={'gray.100'} >


{

  mydata.map((el) => (

<Link to={`/blog/appUpdate/${el.id}`}>
<Card  borderRadius='10px' bg={'white'} key={el.id} h={380}>
    <CardBody>
    <Image src={el.image} alt="croww" borderRadius={10}/>
    <Heading size='md' my={5}>{el.title}</Heading>
    <Text fontSize='16px'>{el.date}</Text>
    </CardBody>
  </Card>

</Link>


  ))


}
  
</SimpleGrid>



  <Box  pt={5}   textAlign='right'>
  <Link to={"/blog/appUpdate"}>
  <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline' >
    VIEW MORE
  </Button></Link>
  </Box>




    </Box>
  )
}

export default AppUpdate