import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Heading, HStack, Image, Skeleton, Stack, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const OnTrends = () => {


    let [trendingdata, settrendingdata]= useState([]);
    let [error,seterror]= useState("")
    let [isloading,setisloading] = useState(false);


    let getTrendingData= async () =>{

        try{
           setisloading(true)
            let res= await axios.get(`https://humane-remarkable-oregano.glitch.me/nutrition?_limit=2`)
            settrendingdata(res.data)
            setisloading(false)
    
        }catch(err){
            seterror(err.message)
        }
    }
    
    
    useEffect(() =>{
    
        getTrendingData()
    
    },[])

// console.log(trendingdata)


if(isloading){
  return (

<HStack m='auto' w='80%' mt={30}>
  <Skeleton height='600px' w='600px'/>
  <Skeleton height='600px' w='600px'/>
 

</HStack>

  )
}





  return (
    <Box w='80%' m='auto' py={10}>


{error !== ""  && <Heading> Error: {error}</Heading>}


<Stack textAlign='left'>
    <Heading color={'teal.700'} fontSize="20px">ON TREND</Heading>
    <Heading fontSize="40px">Popular Stories</Heading>
    </Stack>


    <Stack direction={{ base: "column", lg: "row" }} gap={10} textAlign="left" py={10}>
        {
            trendingdata.map((el) =>(
<Link to={`/blog/nutrition/${el.id}`}>
<Flex flex={1}  borderRadius={20} bg="white" key={el.id}>
    <Stack  w='90%' m='auto'  py={10}>
      <Image src={el.image} alt="Nutrition"  style={{borderRadius:"20px", height:"380px"}} />
      <Heading>{el.title}</Heading>
      <Text>{el.date}</Text>
    </Stack>
      </Flex>
</Link>
            ))
        }


    </Stack>
    
    <Box  pt={4}   textAlign='right'>
     <Link to={"/blog/nutrition"}>
     <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline' >
        VIEW MORE
      </Button>
     </Link>
      </Box>
    
    
    </Box>









  )
}

export default OnTrends