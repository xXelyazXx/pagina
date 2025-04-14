"use client"
import React from 'react';
import { Box, Text } from "@chakra-ui/react";
import Link from 'next/link';

export default function Bienvenida() {
    return (
        <div className="container-Bienvenida">
            <Box className="grid-container" p={4}>
                <Link href="/nuestro_colegio">
                    <Box className="card" p={4} borderRadius="lg" boxShadow="sm">
                        <Text>¿Nuevo en FVN?</Text>
                    </Box>
                </Link>
                <Link href="/servicios">
                    <Box className="card" p={4} borderRadius="lg" boxShadow="sm">
                        <Text>Horarios de servicios</Text>
                    </Box>
                </Link>
                <Link href="/grupos_vida">
                    <Box className="card" p={4} borderRadius="lg" boxShadow="sm">
                        <Text>Te espera un grupo de vida</Text>
                    </Box>
                </Link>
                <Link href="/ofrendas">
                    <Box className="card" p={4} borderRadius="lg" boxShadow="sm">
                        <Text>Donaciones</Text>
                    </Box>
                </Link>
            </Box>
        </div>
    );
}