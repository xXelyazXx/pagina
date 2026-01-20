"use client";
import { Box, Image, Text, Grid, GridItem, Flex } from "@chakra-ui/react";
import React from "react";

export default function Page() {
    const pastores = [
        {
            id: 1,
            nombre: "Pastores Gerardo y Patricia si",
            imagen: "/pastores/IMG-20250528-WA0012.jpg",
            descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            id: 2,
            nombre: "Pastores Marcelo y Yerty",
            imagen: "/pastores/IMG-20250528-WA0004.jpg",
            descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            id: 3,
            nombre: "Pastores Alex y Nathalie",
            imagen: "/pastores/IMG-20250528-WA0005.jpg",
            descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            id: 4,
            nombre: "Pastores Jonathan y Jocelynne",
            imagen: "/pastores/IMG-20250528-WA0006.jpg",
            descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            id: 5,
            nombre: "Pastores Maiquel y Andrea",
            imagen: "/pastores/IMG-20250528-WA0007.jpg",
            descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            id: 6,
            nombre: "Pastores Byron y ",
            imagen: "/pastores/IMG-20250528-WA0014.jpg",
            descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            id: 7,
            nombre: "Pastores Juan y Maritza ",
            imagen: "/pastores/IMG-20250528-WA0025.jpg",
            descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            id: 8,
            nombre: "Pastora Alejandra",
            imagen: "/pastores/IMG-20250528-WA0036.jpg",
            descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
    ];

    return (
        <Box>
            {/* Header de la página */}
            <Box
                textAlign="center"
                py={{ base: 8, md: 12 }}
                px={4}
            >
                <Text
                    fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                    fontWeight="bold"
                    color="gray.800"
                    mb={4}
                >
                    Nuestro Equipo Pastoral
                </Text>
                <Text
                    fontSize={{ base: "md", md: "lg" }}
                    color="gray.600"
                    maxW="800px"
                    mx="auto"
                >
                    Conoce a los líderes que guían nuestra comunidad de fe
                </Text>
            </Box>

            {/* Grid de pastores */}
            <Box maxW="1200px" mx="auto" px={{ base: 4, md: 8 }} pb={12}>
                {pastores.map((pastor, index) => (
                    <Grid
                        key={pastor.id}
                        templateColumns={{ base: "1fr", md: "300px 1fr" }}
                        gap={{ base: 6, md: 10 }}
                        mb={12}
                        p={{ base: 6, md: 8 }}
                        bg={index % 2 === 0 ? "white" : "gray.50"}
                        borderRadius="xl"
                        boxShadow="md"
                        alignItems="center"
                    >
                        {/* Imagen del pastor */}
                        <GridItem>
                            <Box
                                p={4}
                                bg="white"
                                borderRadius="lg"
                                boxShadow="sm"
                            >
                                <Image
                                    src={pastor.imagen}
                                    alt={pastor.nombre}
                                    objectFit="contain"
                                    width="100%"
                                    height={{ base: "300px", md: "350px" }}
                                    borderRadius="md"
                                />
                            </Box>
                        </GridItem>

                        {/* Información del pastor */}
                        <GridItem>
                            <Text
                                fontSize={{ base: "2xl", md: "3xl" }}
                                fontWeight="bold"
                                color="gray.800"
                                mb={4}
                            >
                                {pastor.nombre}
                            </Text>
                            <Text
                                fontSize={{ base: "md", md: "lg" }}
                                color="gray.600"
                                lineHeight="1.8"
                            >
                                {pastor.descripcion}
                            </Text>
                        </GridItem>
                    </Grid>
                ))}
            </Box>
        </Box>
    )
}