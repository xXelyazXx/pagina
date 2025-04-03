"use client"
import { Box, Image, Text } from "@chakra-ui/react";

export default function nuestro_colegio() {
    return(
        <div className="container-nuestro_colegio">
            <Box maxW="90%" mx="auto" mt={5} borderRadius="lg" overflow="hidden">
                <Image src="paisaje2.jpeg" alt="paisaje1" objectFit="cover"  />
            </Box>
            <Box mt={4} margin="2rem">
                <Text fontSize="lg">Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec libero lacinia tempus. Nullam nec purus nec libero lacinia tempus. Nullam nec purus nec libero lacinia tempus. Nullam nec purus nec libero lacinia tempus.</Text>
            </Box>
        </div>
    )
}