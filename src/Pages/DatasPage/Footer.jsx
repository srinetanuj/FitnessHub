import { Box, Link, SimpleGrid, Text } from "@chakra-ui/layout";
import React from "react";
import logo from "../../Assets/Fitness_hub_bg_less.png";
import { Image } from "@chakra-ui/image";

const Footer = () => {
  return (
    <Box bg="#262a3b" color="white" padding="5% 3%">
      <SimpleGrid gridTemplateColumns="repeat(4,1fr)" textAlign="left">
        <Box>
          <Box maxWidth="40%" position="relative" bottom="5%">
            <Image src={logo} />
          </Box>
        </Box>
        <Box>
          <Box display="grid" flexDirection="column" gap={4}>
            <Text fontSize="xl" fontWeight="900">
              The Product
            </Text>
            <Link>For Individuals</Link>
            <Link>For Professionals</Link>
            <Link>Privacy</Link>
            <Link>Terms</Link>
          </Box>
        </Box>
        <Box>
          <Box display="grid" flexDirection="column" gap={4}>
            <Text fontSize="xl" fontWeight="900">
              The Company
            </Text>
            <Link>About Us</Link>
            <Link>Crono Blog</Link>
            <Link>Crono Forums</Link>
            <Link>Jobs</Link>
            <Link>Support</Link>
          </Box>
        </Box>
        <Box>
          <Box display="grid" flexDirection="column" gap={4}>
            <Text fontSize="xl" fontWeight="900">
              Partners & Affiliates
            </Text>
            <Link>Affiliate Program</Link>
            <Link>Media Kit</Link>
          </Box>
        </Box>
      </SimpleGrid>
      <hr
        style={{
          border: "0.2px solid #B2BEB5",
          margin: "6% auto 3% auto",
        }}
      />
      <SimpleGrid gridTemplateColumns="repeat(2,1fr)">
        <Box display="flex" gap={4}>
          <Box maxWidth="5%">
            <Image src="https://cdn1.cronometer.com/webflow/instragm-icon-snow-white.svg" />
          </Box>
          <Box maxWidth="5%">
            <Image src="https://cdn1.cronometer.com/webflow/facebook-icon-snow-white.svg" />
          </Box>
          <Box maxWidth="5%">
            <Image src="https://cdn1.cronometer.com/webflow/twitter-icon-snow-white.svg" />
          </Box>
          <Box maxWidth="5%">
            <Image src="https://cdn1.cronometer.com/webflow/youtube-icon-snow-white.svg" />
          </Box>
        </Box>
        <SimpleGrid gridTemplateColumns="repeat(2,1fr)">
          <Box maxWidth="40%">
            <Image src="https://cdn1.cronometer.com/webflow/ios-icon.svg" />
          </Box>
          <Box maxWidth="40%">
            <Image src="https://cdn1.cronometer.com/webflow/android-icon.svg" />
          </Box>
        </SimpleGrid>
      </SimpleGrid>
      <Box display="flex" marginTop="1%">
        <Link textDecoration="underline white">support@cronometer.com</Link>
      </Box>
      <Box textAlign="left" marginTop="4%">
        <Text>Copyright © 2011-2022</Text>
        <Text>All rights reserved</Text>
      </Box>
    </Box>
  );
};

export default Footer;
