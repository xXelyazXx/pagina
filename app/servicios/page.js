"use client";
import { Box, Image } from "@chakra-ui/react";
import React from "react";


export default function Page() {
    return (
        <div>
            <Box maxW="90%" mx="auto" mt={5} borderRadius="lg" overflow="hidden">
                <Image src="paisaje2.jpeg" alt="paisaje1" objectFit="cover" />
            </Box>
        </div>
    )
}