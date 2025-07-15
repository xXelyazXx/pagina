"use client"
import { Box, Flex, Stack, Text, Link, Icon, Divider, SimpleGrid } from "@chakra-ui/react";
import { FaInstagram, FaYoutube, FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" px={6} py={10} >
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} gap={10}>
        {/* Contacto */}
        <Stack spacing={3}>
          <Text fontSize="lg" fontWeight="bold">Contacto</Text>
          <Flex align="center"><Icon as={FaPhone} mr={2} /> +56 9 1234 5678</Flex>
          <Flex align="center"><Icon as={FaEnvelope} mr={2} /> contacto@fvn.cl</Flex>
        </Stack>

        {/* Redes Sociales */}
        <Stack spacing={3}>
          <Text fontSize="lg" fontWeight="bold">Redes Sociales</Text>
          <Link href="https://instagram.com/fvniglesia" isExternal target="_blank" rel="noopener noreferrer">
            <Flex align="center"><Icon as={FaInstagram} mr={2} /> @fvniglesia</Flex>
          </Link>
          <Link href="https://www.youtube.com/@FVNIglesia/" isExternal target="_blank" rel="noopener noreferrer">
            <Flex align="center"><Icon as={FaYoutube} mr={2} /> FVN iglesia </Flex>
          </Link>
        </Stack>

        {/* Ubicación y Horarios */}
        <Stack spacing={3}>
          <Text fontSize="lg" fontWeight="bold">Dónde encontrarnos</Text>
          <Link href="https://maps.app.goo.gl/ox1q4PmWwSCKskn9A" isExternal target="_blank" rel="noopener noreferrer">
            <Flex align="center"><Icon as={FaMapMarkerAlt} mr={2} /> kilometro 8.5, Valdivia</Flex>
          </Link>
          <Text>Horario de servicio: <br />
            Sabado 19:00 - 21:00 hrs <br />
            Domingo 11:00 - 14:00 hrs <br />
          </Text>
        </Stack>

        {/* Grupos y tiempos */}
        <Stack spacing={3}>
          <Text fontSize="lg" fontWeight="bold">Grupos de vida</Text>
          <Text>GDV Mujeres: Miercoles</Text>
          <Text>GDV Hombres: Jueves</Text>
          <Text>GDV Jóvenes: Viernes </Text>
          <Text>GDV Tweens/youth: Sábados</Text>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};

export default Footer;