"use client"
import { Box, Image, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
    
const L = dynamic(() => import("leaflet"), { ssr: false });
const customIconUrl = "/map_icon.png"; // Ruta al archivo del ícono

export default function nuestro_colegio() {
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
        <div className="container-nuestro_colegio">
            <Box maxW="90%" mx="auto" mt={5} borderRadius="lg" overflow="hidden">
                <Image src="paisaje2.jpeg" alt="paisaje1" objectFit="cover" />
            </Box>
            <Box mt={4} margin="2rem">
                <Text fontSize="lg">Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec libero lacinia tempus. Nullam nec purus nec libero lacinia tempus. Nullam nec purus nec libero lacinia tempus. Nullam nec purus nec libero lacinia tempus.</Text>
            </Box>


            <Text fontSize="2xl"> Donde encontrarnos </Text>
            {/* carga de mapa */}
            <div style={{ position: "relative", height: "400px", width: "80%", marginTop: "20px" }}>
                <div
                    id="map"
                    style={{
                        position: "absolute", // Posición absoluta dentro del contenedor
                        top: 0,
                        left: 0,
                        height: "100%",
                        width: "100%",
                        zIndex: 10,
                    }}
                ></div>
            </div>

        </div>
    )
}