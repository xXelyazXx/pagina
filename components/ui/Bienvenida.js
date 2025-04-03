"use client"
import React from 'react';
import { Box, Text } from "@chakra-ui/react";
import Link from 'next/link';

export default function Bienvenida() {
    return (
        <Box className="grid-container" p={4}>
            <Link href="/nuestro_colegio">
                <Box className="card" p={4} borderRadius="lg" boxShadow="sm">
                    <Text>¿Eres nuevo en FVN?</Text>
                </Box>
            </Link>
            <Link href="/servicios">
                <Box className="card" p={4} borderRadius="lg" boxShadow="sm">
                    <Text>Horarios de servicios</Text>
                </Box>
            </Link>
            <Box className="card" p={4} borderRadius="lg" boxShadow="sm">
                <Text>Te espera un grupo de vida</Text>
            </Box>
            <Box className="card" p={4} borderRadius="lg" boxShadow="sm">
                <Text>Donaciones</Text>
            </Box>
        </Box>
    );
}