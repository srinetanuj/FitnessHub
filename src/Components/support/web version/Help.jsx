import { Link,Box,IconButton,Flex,Text,HStack } from '@chakra-ui/react'
import { BsLinkedin, BsTwitter,BsFacebook } from "react-icons/bs";
import { CheckIcon,CloseIcon} from '@chakra-ui/icons'
import React from 'react'

const Help = () => {
  return (
    <>
     <Flex gap={3} justifyContent="center" m={10}>
          <Box>
            <Link
              href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fshare.php%3Ftitle%3DWeb%2B-%2BQuick%2BStart%2BGuide%26u%3Dhttps%253A%252F%252Fsupport.cronometer.com%252Fhc%252Fen-us%252Farticles%252F360021897491-Web-Quick-Start-Guide&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB"
              isExternal
            >
              
              <IconButton

  aria-label='Call Segun'
  size='sm'
  icon={<BsFacebook size="20px"/>}
/>
            </Link>
          </Box>
          <Box>
            <Link href="https://twitter.com/intent/tweet?lang=en&text=Web%20-%20Quick%20Start%20Guide&url=https%3A%2F%2Fsupport.cronometer.com%2Fhc%2Fen-us%2Farticles%2F360021897491-Web-Quick-Start-Guide" isExternal>
              
              <IconButton
  
  aria-label='Call Segun'
  size='sm'
  icon={<BsTwitter size="20px"/>}
/>
            </Link>
          </Box>
          <Box>
            <Link
              href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fsupport.cronometer.com%2Fhc%2Fen-us%2Farticles%2F360021897491-Web-Quick-Start-Guide"
              isExternal
            >
              
              <IconButton

  aria-label='Call Segun'
  size='sm'
  icon={<BsLinkedin size="20px"/>}
/>
            </Link>
          </Box>
        </Flex>
        <hr/>
        <Flex direction="column" gap={3} m={5}>
          <Text>Was this article helpful?</Text>
       <HStack justify="center">
          <IconButton
  background="rgba(255, 103, 51, 1)"
  aria-label='Search database'
  icon={<CheckIcon />}
/>
<IconButton
  background='rgba(255, 103, 51, 1)'
  aria-label='Search database'
  icon={<CloseIcon/>}
/>
</HStack>
          <Text>87 out of 122 found this helpful</Text>
          <Text>Have more questions?<Link color="rgba(255, 103, 51, 1)" > Submit a request</Link></Text>
        </Flex>
       
    </>
  )
}

export default Help