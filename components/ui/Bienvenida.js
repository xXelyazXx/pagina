"use client"
import React from 'react';
import { Box, Text, Image, Fade } from "@chakra-ui/react";
import Link from 'next/link';

export default function Bienvenida() {
    return (
        <div className="container-Bienvenida">
            <Box className="grid-container" p={0} m="0 auto" justifyContent="center" alignItems="center">

                {/* nuevo en fvn */}
                <Link href="/nuestro_colegio">
                    <Box className="card" borderRadius="4xl" overflow="hidden" position="relative" display="flex" aspectRatio={"3/4"} w={{ base: '90vw', sm: '360px', md: '360px' }} maxW="400px" minW="220px" m="0 auto" p={0} justifyContent="center" alignItems="center">
                        <Image src="/nuevoFVN/presentacion.jpg" alt="nuevo en fvn" w="100%" h="100%" objectFit="cover" position="absolute" top={0} left={0} zIndex={0} />
                        {/* Fade overlay negro de arriba hacia abajo */}
                        <Box
                            position="absolute"
                            top={0}
                            left={0}
                            w="100%"
                            h="100%"
                            zIndex={1}
                            pointerEvents="none"
                            bgGradient="linear(to-b, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)"
                        />
                        <Box
                            position="absolute"
                            top="4%"
                            left="4%"
                            color="white"
                            fontWeight="bold"
                            fontSize="xl"
                            textAlign="center"
                            p={2}
                            borderRadius="md"
                            zIndex={2}
                            width="92%"
                        >
                            ¿NUEVO EN FVN?
                        </Box>
                    </Box>
                </Link>

                {/* grupos de vida */}
                <Link href="/grupos_vida">
                    <Box className="card" borderRadius="4xl" overflow="hidden" position="relative" display="flex" aspectRatio={"3/4"} w={{ base: '90vw', sm: '360px', md: '360px' }} maxW="400px" minW="220px" m="0 auto" p={0} justifyContent="center" alignItems="center">
                        <Image src="/GDV/gdv.jpg" alt="grupo de vida" w="100%" h="100%" objectFit="cover" position="absolute" top={0} left={0} zIndex={0} />
                        {/* Fade overlay negro de arriba hacia abajo */}
                        <Box
                            position="absolute"
                            top={0}
                            left={0}
                            w="100%"
                            h="100%"
                            zIndex={1}
                            pointerEvents="none"
                            bgGradient="linear(to-b, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)"
                        />
                        <Box
                            position="absolute"
                            top="4%"
                            left="4%"
                            color="white"
                            fontWeight="bold"
                            fontSize="xl"
                            textAlign="center"
                            p={2}
                            borderRadius="md"
                            zIndex={2}
                            width="92%"
                        >
                            TE ESPERA UN GRUPO DE VIDA
                        </Box>
                    </Box>
                </Link>

                {/* ofrendas */}
                <Link href="/ofrendas">
                    <Box className="card" borderRadius="4xl" overflow="hidden" position="relative" display="flex" aspectRatio={"3/4"} w={{ base: '90vw', sm: '360px', md: '360px' }} maxW="400px" minW="220px" m="0 auto" p={0} justifyContent="center" alignItems="center">
                        <Image src="/ofrendas/ofrendas.jpg" alt="donaciones" w="100%" h="100%" objectFit="cover" position="absolute" top={0} left={0} zIndex={0} />
                        {/* Fade overlay negro de arriba hacia abajo */}
                        <Box
                            position="absolute"
                            top={0}
                            left={0}
                            w="100%"
                            h="100%"
                            zIndex={1}
                            pointerEvents="none"
                            bgGradient="linear(to-b, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)"
                        />
                        <Box
                            position="absolute"
                            top="4%"
                            left="4%"
                            color="white"
                            fontWeight="bold"
                            fontSize="xl"
                            textAlign="center"
                            p={2}
                            borderRadius="md"
                            zIndex={2}
                            width="92%"
                        >
                            OFRENDAS
                        </Box>
                    </Box>
                </Link>
            </Box>
        </div>
    );
}