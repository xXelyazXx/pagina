"use client"

import { Box, Text, Image } from "@chakra-ui/react"

export default function Page() {
    return (
        <div>
            <Box
                position="relative"
                width="100%"
                height="400px"
                borderRadius="md"
                overflow="hidden"
            >
                {/* Imagen de fondo */}
                <Image
                    src="/paisaje1.jpeg" // pon aquí la ruta correcta
                    alt="Imagen con degradado"
                    objectFit="cover"
                    width="100%"
                    height="100%"
                />

                {/* Capa de degradado */}
                <Box
                    position="absolute"
                    top="0"
                    left="0"
                    width="100%"
                    height="100%"
                    bgGradient="linear(to-t, rgba(0,0,0,0.7), transparent)"
                    zIndex="1"
                />

                {/* Texto encima del degradado */}
                <Box position="absolute" bottom="4" left="4" zIndex="2" color="white">
                    <Text fontSize="2xl" fontWeight="bold">
                        Texto sobre imagen con degradado
                    </Text>
                </Box>
            </Box>
        </div>
    )
}