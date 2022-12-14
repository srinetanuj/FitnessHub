import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const KnowYourself = () => {


    let [trendingdata, settrendingdata]= useState([]);
    let [error,seterror]= useState("")


    let getTrendingData= async () =>{

        try{
            let res= await axios.get(`https://humane-remarkable-oregano.glitch.me/knowyourself?_limit=2`)
            settrendingdata(res.data)
    
        }catch(err){
            seterror(err.message)
        }
    }
    
    
    useEffect(() =>{
    
        getTrendingData()
    
    },[])

console.log(trendingdata)





  return (
    <Box w='80%' m='auto' py={10}>


{error !== ""  && <Heading> Error: {error}</Heading>}


<Stack textAlign='left'>
    <Heading color={'teal.400'} fontSize="28px">ON TREND</Heading>
    <Heading>Popular Stories</Heading>
    </Stack>


    <Stack direction={{ base: "column", lg: "row" }} gap={10} textAlign="left" py={10}>
        {
            trendingdata.map((el) =>(
<Flex flex={1}  borderRadius={20} bg="white" key={el.id}>
    <Stack  w='90%' m='auto'  py={10}>
      <Image src={el.image} alt="Nutrition"  style={{borderRadius:"20px", height:"500px"}} />
      <Heading fontSize='22px'>{el.title}</Heading>
      <Text>{el.date}</Text>
    </Stack>
      </Flex>
            ))
        }


    </Stack>
    
    <Box  pt={4}   textAlign='right'>
      <Link to={"/blog/knowYourself"}>
      <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline' >
        VIEW MORE
      </Button>
      </Link>
      </Box>
    
    
    </Box>









  )
}

export default KnowYourself