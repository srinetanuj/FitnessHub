import React from 'react'
import {Flex,Link,Box,Heading} from "@chakra-ui/react"

const Article = () => {
  return (
    <>
    <Flex justify="space-around" m={10} direction={{base:"column", md:"row"}}  >
        <Box  mb={10}>
            <Heading size="sm" mb={5}>Recently viewed articles</Heading>
            <Flex color="rgba(255, 103, 51, 1)" direction="column" gap={3}>
                <Link>Dashboard</Link>
                <Link>Add a Note</Link>
                <Link>Energy Burned</Link>
                <Link>Trends Overview</Link>
                <Link>Charts</Link>
            </Flex>
        </Box>
        <Box>
      <Heading size="sm" mb={5}>Related articles</Heading>
            <Flex color="rgba(255, 103, 51, 1)" direction="column" gap={3}>
            <Link>
            Mobile - Quick Start Guide</Link>
                <Link>Macronutrient Targets</Link>
                <Link>Macro Ratios</Link>
                <Link>Pro - Client Settings Menu</Link>
                <Link>Timestamps</Link>
            </Flex>
        </Box>
    </Flex>
    </>
  )
}

export default Article