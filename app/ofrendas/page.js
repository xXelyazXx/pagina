"use client"

import { Box, Text, Image, Flex, Grid, GridItem } from "@chakra-ui/react"

export default function Page() {
    return (
        <>
            <Box
                position="relative"
                width="100%"
                height={{ base: "20vh", md: "30vh", lg: "40vh" }}
                overflow="hidden"
                marginTop="30px"
                marginBottom="30px"
            >
                {/* Imagen de fondo */}
                <Image
                    src="/ofrendas/ofrendas(2).jpg"
                    alt="Donaciones"
                    objectFit="cover"
                    width="100%"
                    height="100%"
                    position="absolute"
                    top="0"
                    left="0"
                />

                {/* Capa oscura opcional para mejorar legibilidad */}
                <Box
                    position="absolute"
                    top="0"
                    left="0"
                    width="100%"
                    height="100%"
                    bg="blackAlpha.400"
                    zIndex="1"
                />

                {/* Texto superpuesto */}
                <Flex
                    position="absolute"
                    top="0"
                    left="0"
                    width="100%"
                    height="100%"
                    alignItems="center"
                    justifyContent="center"
                    zIndex="2"
                    px={4}
                >
                    <Text
                        fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
                        fontWeight="bold"
                        color="white"
                        textAlign="center"
                        letterSpacing="wider"
                        textShadow="2px 2px 8px rgba(0,0,0,0.8)"
                    >
                        OFRENDAS
                    </Text>
                </Flex>
            </Box>

            {/* Sección ¿por qué ofrendamos? */}
            <Grid
                templateColumns={{ base: "1fr", md: "1fr 2px 1fr" }}
                gap={0}
                maxWidth="1200px"
                margin="0 auto"
                padding={{ base: "20px", md: "40px" }}
                minHeight="500px"
            >
                {/* Columna izquierda - Imagen */}
                <GridItem>
                    <Flex
                        height="100%"
                        alignItems="center"
                        justifyContent="center"
                        padding={{ base: "20px 0", md: "0" }}
                    >
                        <Image
                            src="/paisaje4.jpg"
                            alt="Ofrenda"
                            objectFit="cover"
                            maxHeight={{ base: "400px", md: "600px" }}
                            width="auto"
                            borderRadius="md"
                        />
                    </Flex>
                </GridItem>

                {/* Línea divisoria (solo visible en pantallas medianas o más grandes) */}
                <GridItem display={{ base: "none", md: "block" }}>
                    <Box
                        width="2px"
                        height="100%"
                        bg="gray.300"
                    />
                </GridItem>

                {/* Columna derecha - Texto */}
                <GridItem>
                    <Flex
                        height="100%"
                        alignItems="center"
                        justifyContent="center"
                        padding={{ base: "20px", md: "40px" }}
                    >
                        <Box>
                            <Text
                                fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                                fontWeight="bold"
                                color="gray.800"
                                marginBottom="20px"
                            >
                                ¿Por qué ofrendamos?
                            </Text>
                            <Text
                                fontSize={{ base: "md", md: "lg" }}
                                color="gray.600"
                                lineHeight="1.8"
                            >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic
                            </Text>
                        </Box>
                    </Flex>
                </GridItem>
            </Grid>

            {/* Sección Datos Bancarios */}
            <Box
                maxWidth="1200px"
                margin="0 auto"
                padding={{ base: "20px", md: "40px" }}
                marginTop="40px"
            >
                <Box
                    bg="white"
                    borderRadius="xl"
                    boxShadow="lg"
                    overflow="hidden"
                    border="1px solid"
                    borderColor="gray.200"
                >
                    {/* Header */}
                    <Box
                        bg="gray.800"
                        color="white"
                        p={6}
                        textAlign="center"
                    >
                        <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">
                            Datos Bancarios para Depósito
                        </Text>
                        <Text fontSize={{ base: "sm", md: "md" }} mt={2} opacity={0.9}>
                            Puede realizar sus ofrendas mediante transferencia bancaria
                        </Text>
                    </Box>

                    {/* Contenido - Datos Bancarios */}
                    <Box p={{ base: 6, md: 8 }}>
                        <Grid
                            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                            gap={6}
                        >
                            {/* RUT */}
                            <Box>
                                <Text fontSize="sm" color="gray.500" fontWeight="semibold" mb={1}>
                                    RUT
                                </Text>
                                <Text fontSize="lg" color="gray.800" fontWeight="medium">
                                    12.345.678-9
                                </Text>
                            </Box>

                            {/* Nombre del Titular */}
                            <Box>
                                <Text fontSize="sm" color="gray.500" fontWeight="semibold" mb={1}>
                                    Nombre del Titular
                                </Text>
                                <Text fontSize="lg" color="gray.800" fontWeight="medium">
                                    Iglesia Ejemplo
                                </Text>
                            </Box>

                            {/* Banco */}
                            <Box>
                                <Text fontSize="sm" color="gray.500" fontWeight="semibold" mb={1}>
                                    Banco
                                </Text>
                                <Text fontSize="lg" color="gray.800" fontWeight="medium">
                                    Banco de Chile
                                </Text>
                            </Box>

                            {/* Tipo de Cuenta */}
                            <Box>
                                <Text fontSize="sm" color="gray.500" fontWeight="semibold" mb={1}>
                                    Tipo de Cuenta
                                </Text>
                                <Text fontSize="lg" color="gray.800" fontWeight="medium">
                                    Cuenta Corriente
                                </Text>
                            </Box>

                            {/* Número de Cuenta */}
                            <Box>
                                <Text fontSize="sm" color="gray.500" fontWeight="semibold" mb={1}>
                                    Número de Cuenta
                                </Text>
                                <Text fontSize="lg" color="gray.800" fontWeight="medium">
                                    1234567890
                                </Text>
                            </Box>

                            {/* Correo Electrónico */}
                            <Box>
                                <Text fontSize="sm" color="gray.500" fontWeight="semibold" mb={1}>
                                    Correo Electrónico
                                </Text>
                                <Text fontSize="lg" color="gray.800" fontWeight="medium">
                                    ofrendas@iglesia.com
                                </Text>
                            </Box>
                        </Grid>
                    </Box>

                    {/* Footer */}
                    <Box
                        bg="gray.50"
                        p={4}
                        textAlign="center"
                        borderTop="1px solid"
                        borderColor="gray.200"
                    >
                    </Box>
                </Box>
            </Box>
        </>
    )
}