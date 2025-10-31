"use client";
import { Box, Image, Text, Flex } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

const L = dynamic(() => import("leaflet"), { ssr: false });
const customIconUrl = "/map_icon.png"; // Ruta al archivo del ícono


export default function Page() {
    useEffect(() => {
        let map;

        // Asegúrate de que el código solo se ejecute en el cliente
        if (typeof window !== "undefined") {
            // Importar Leaflet dinámicamente
            import("leaflet").then((Leaflet) => {
                const mapContainer = document.getElementById("map");

                if (mapContainer) {
                    // Crear el mapa
                    map = Leaflet.map("map", {
                        center: [-39.864316, -73.180208],
                        zoom: 13,
                    });

                    // Cargar las capas de OpenStreetMap
                    Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                        attribution:
                            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                    }).addTo(map);

                    // Crear un ícono personalizado
                    const customIcon = Leaflet.icon({
                        iconUrl: customIconUrl, // Ruta al archivo del ícono
                        iconSize: [64, 64], // Tamaño del ícono [ancho, alto]
                        iconAnchor: [16, 32], // Punto del ícono que se posicionará en la ubicación [x, y]
                        popupAnchor: [0, -32], // Punto desde donde se abrirá el popup [x, y]
                    });

                    // Crear un marcador
                    const marker = Leaflet.marker([-39.864316, -73.180208], { icon: customIcon }).addTo(map);

                    // Añadir evento de clic en el marcador para redirigir a una URL
                    marker.on("click", function () {
                        window.location.href =
                            "https://www.google.com/maps/place/Auditorio+FVN+Iglesia/@-39.8640129,-73.1800588,18.25z/data=!4m6!3m5!1s0x9615e9003533b4ed:0x30d4171e05e99839!8m2!3d-39.8642915!4d-73.1795534!16s%2Fg%2F11wj9p7_bl?hl=es&entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D";
                    });
                }
            });
        }

        // Limpiar el mapa si se desmonta el componente
        return () => {
            if (map) {
                map.remove();
            }
        };
    }, []);

    return (
        <div>
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
                    src="/paisaje1.jpeg"
                    alt="Servicios"
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
                        SERVICIOS
                    </Text>
                </Flex>
            </Box>

            {/* Sección de Horarios */}
            <Box maxW="1200px" mx="auto" mt={10} mb={10} px={{ base: 4, md: 8 }}>
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
                            Horarios de Servicios
                        </Text>
                    </Box>

                    {/* Contenido */}
                    <Box p={{ base: 6, md: 8 }}>
                        {/* Horario de Servicio Principal */}
                        <Box mb={8}>
                            <Text fontSize="xl" fontWeight="bold" color="gray.800" mb={4}>
                                Horario de servicio:
                            </Text>
                            <Box pl={4}>
                                <Text fontSize="lg" color="gray.700" mb={2}>
                                    <Text as="span" fontWeight="semibold">Sábado:</Text> 18:00 Hrs
                                </Text>
                                <Text fontSize="lg" color="gray.700" mb={2}>
                                    <Text as="span" fontWeight="semibold">Domingo:</Text> 11:00 Hrs
                                </Text>
                                <Text fontSize="md" color="gray.500" fontStyle="italic" mt={3}>
                                    * Servicios realizados en el Auditorio
                                </Text>
                            </Box>
                        </Box>

                        {/* Grupos de Vida */}
                        <Box>
                            <Text fontSize="xl" fontWeight="bold" color="gray.800" mb={4}>
                                Grupos de vida
                            </Text>
                            <Box pl={4}>
                                <Text fontSize="lg" color="gray.700" mb={2}>
                                    <Text as="span" fontWeight="semibold">Mujeres:</Text> Miércoles 19:30 Hrs
                                </Text>
                                <Text fontSize="lg" color="gray.700" mb={2}>
                                    <Text as="span" fontWeight="semibold">Hombres:</Text> Jueves 19:30 Hrs
                                </Text>
                                <Text fontSize="lg" color="gray.700" mb={2}>
                                    <Text as="span" fontWeight="semibold">Jóvenes:</Text> Viernes 19:30 Hrs
                                </Text>
                                <Text fontSize="lg" color="gray.700" mb={2}>
                                    <Text as="span" fontWeight="semibold">Tweens/Youth:</Text> Sábados 15:00 Hrs
                                </Text>
                                <Text fontSize="md" color="gray.500" fontStyle="italic" mt={3}>
                                    * Grupos de vida realizados en el Colegio Cristiano Belén
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* Sección del Mapa */}
            <Box maxW="90%" mx="auto" mt={10} mb={10}>
                <Text fontSize="2xl" fontWeight="bold" mb={4} textAlign="center">
                    Donde encontrarnos
                </Text>
                
                {/* Contenedor del mapa */}
                <Box position="relative" height="400px" width="100%" mt={5}>
                    <div
                        id="map"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            height: "100%",
                            width: "100%",
                            zIndex: 10,
                        }}
                    ></div>
                </Box>
            </Box>
        </div>
    )
}