"use client"

import { SimpleGrid, Box, Image, Card, Button, Text } from "@chakra-ui/react";

export default function nuestro_colegio() {
    return (
        <div>
            <Box 
                borderRadius="4xl" 
                overflow="hidden" 
                position="relative" 
                w={{ base: "95%", sm: "90%", md: "80%", lg: "70%" }} 
                maxW="900px" 
                aspectRatio="16/9" 
                mx="auto" 
                my={4}
            >
                <Image 
                    src="/colegio.png" 
                    objectFit="cover" 
                    w="100%" 
                    h="100%" 
                    position="absolute" 
                    top={0} 
                    left={0} 
                />
            </Box>
        </div>
    )
}