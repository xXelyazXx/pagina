import { Box, Image, Text } from "@chakra-ui/react";
import './NuestroColegio.css';

export default function NuestroColegio() {
    return (
        <Box position="relative" width="100%" height="100vh">
            <Image
                src="/imagenes/paisaje1.jpg"
                alt="Descripción de la imagen"
                objectFit="cover"
                width="100%"
                height="100%"
            />
            <Box
                position="absolute"
                top="10%"
                left="50%"
                transform="translateX(-50%)"
                color="white"
                textAlign="center"
                width="100%"
                padding="20px"
            >
                <Text fontSize="4xl" fontWeight="bold">Nuestro colegio</Text>
                <Text fontSize="xl">estiue sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Donec laoreet urna nisl, id iaculis velit tempus ac. Donec at mi lacus. Mauris blandit fringilla augue, eget ultricies ex facilisis id. Praesent in fermentum enim, in mollis nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed non ipsum lorem.  </Text>
            </Box>
        </Box>
    );
}