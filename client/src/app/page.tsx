"use client";
import Image from "next/image";
import {
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import Nav from "./components/navbar";
import Main from "./components/home";

export default function Home() {
  return (
    <Box
      bg={useColorModeValue("gray.200", "gray.700")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Main />
    </Box>
  );
}
