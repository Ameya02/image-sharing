import React from 'react'
import {
    Box,
    Button,
    Heading,
    Text,
  } from "@chakra-ui/react";
  import { FaUpload } from "react-icons/fa";

const Main = () => {
  return (
    <Box maxW="100vw" h="100vh" display={"flex"} alignItems={"center"} justifyContent={"center"} justifyItems={"center"} flexDir={"column"}   mx="auto">
        <Heading as="h1" size="2xl" mb={4}>
          CaptureConnect
        </Heading>
        <Text fontSize="xl" mb={8}>
          Share your images with the world!
        </Text>
        <Button leftIcon={<FaUpload />} onClick={()=>"/"} className="bg-cyan-500">
          Upload Image
        </Button>
      </Box>
  )
}

export default Main