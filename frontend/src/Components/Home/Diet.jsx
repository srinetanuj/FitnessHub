import { Box, Heading, Text ,Image} from '@chakra-ui/react'
import React from 'react'


const Diet = ({id,image,text,title}) => {
  return (
    <div>
      <Box spacing={1} height="auto" justifyContent="center" alignItems="center" p="5" w="100%" m="auto">
        <Image src={image} alt="diet-image" w="50%" alignItems="center" ml="20%"/>
      <Heading as='h3' size='lg'>{title}</Heading>
      <Text fontSize='lg'>{text}</Text>
      </Box>
    </div>
  )
}

export default Diet