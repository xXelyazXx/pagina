"use client"
import { Box, Image, Text, Grid, GridItem, Flex } from "@chakra-ui/react";

export default function SobreNosotros() {
    return (
        <Box>
            {/* Sección 1: Visión - Imagen a la izquierda, Texto a la derecha */}
            <Grid
                templateColumns={{ base: "1fr", md: "1fr 2px 1fr" }}
                gap={{ base: 0, md: 8 }}
                maxWidth="1200px"
                margin="0 auto"
                padding={{ base: "40px 20px", md: "60px 40px" }}
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
                            src="/paisaje1.jpeg"
                            alt="Visión"
                            objectFit="cover"
                            maxHeight={{ base: "400px", md: "600px" }}
                            width="auto"
                            borderRadius="md"
                        />
                    </Flex>
                </GridItem>

                {/* Línea divisoria */}
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
                                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                                fontWeight="bold"
                                color="gray.800"
                                marginBottom="20px"
                            >
                                Visión
                            </Text>
                            <Text
                                fontSize={{ base: "md", md: "lg" }}
                                color="gray.600"
                                lineHeight="1.8"
                            >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries, but also the leap into electronic typesetting.
                            </Text>
                        </Box>
                    </Flex>
                </GridItem>
            </Grid>

            {/* Sección 2: Misión - Texto a la izquierda, Imagen a la derecha */}
            <Grid
                templateColumns={{ base: "1fr", md: "1fr 2px 1fr" }}
                gap={{ base: 0, md: 8 }}
                maxWidth="1200px"
                margin="0 auto"
                padding={{ base: "40px 20px", md: "60px 40px" }}
                minHeight="500px"
                bg="gray.50"
            >
                {/* Columna izquierda - Texto */}
                <GridItem>
                    <Flex
                        height="100%"
                        alignItems="center"
                        justifyContent="center"
                        padding={{ base: "20px", md: "40px" }}
                    >
                        <Box>
                            <Text
                                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                                fontWeight="bold"
                                color="gray.800"
                                marginBottom="20px"
                            >
                                Misión
                            </Text>
                            <Text
                                fontSize={{ base: "md", md: "lg" }}
                                color="gray.600"
                                lineHeight="1.8"
                            >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries, but also the leap into electronic typesetting.
                            </Text>
                        </Box>
                    </Flex>
                </GridItem>

                {/* Línea divisoria */}
                <GridItem display={{ base: "none", md: "block" }}>
                    <Box
                        width="2px"
                        height="100%"
                        bg="gray.300"
                    />
                </GridItem>

                {/* Columna derecha - Imagen */}
                <GridItem>
                    <Flex
                        height="100%"
                        alignItems="center"
                        justifyContent="center"
                        padding={{ base: "20px 0", md: "0" }}
                    >
                        <Image
                            src="/paisaje2.jpeg"
                            alt="Misión"
                            objectFit="cover"
                            maxHeight={{ base: "400px", md: "600px" }}
                            width="auto"
                            borderRadius="md"
                        />
                    </Flex>
                </GridItem>
            </Grid>

            {/* Sección 3: Acerca de Nosotros - Imagen a la izquierda, Texto a la derecha */}
            <Grid
                templateColumns={{ base: "1fr", md: "1fr 2px 1fr" }}
                gap={{ base: 0, md: 8 }}
                maxWidth="1200px"
                margin="0 auto"
                padding={{ base: "40px 20px", md: "60px 40px" }}
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
                            src="/paisaje3.jpg"
                            alt="Acerca de Nosotros"
                            objectFit="cover"
                            maxHeight={{ base: "400px", md: "600px" }}
                            width="auto"
                            borderRadius="md"
                        />
                    </Flex>
                </GridItem>

                {/* Línea divisoria */}
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
                                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                                fontWeight="bold"
                                color="gray.800"
                                marginBottom="20px"
                            >
                                Acerca de Nosotros
                            </Text>
                            <Text
                                fontSize={{ base: "md", md: "lg" }}
                                color="gray.600"
                                lineHeight="1.8"
                            >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries, but also the leap into electronic typesetting.
                            </Text>
                        </Box>
                    </Flex>
                </GridItem>
            </Grid>
        </Box>
    )
}