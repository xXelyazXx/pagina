"use client";
import { SimpleGrid, Box, Image, Card, Button, Text } from "@chakra-ui/react";

export default function Consejeria() {
    return (
        <div>
            <Box margin="2rem">
                <Text fontSize="2xl">
                    Oramos por ti
                </Text>
            </Box>
            <SimpleGrid
                columns={{ base: 1, md: 2 }}
                gap={5}
                margin="1.1rem"
            >
                <Card.Root
                    flexDirection="column"
                    overflow="hidden"
                    maxW="lx"
                    borderRadius="4xl"
                >
                    <Image
                        objectFit="cover"
                        maxW="100%"
                        src="/consejeria/consejeria.jpg"
                        alt="paisaje"
                    />
                    <Box>
                        <Card.Body>
                            <Card.Title mb="2">
                                Consejeria
                            </Card.Title>
                            <Card.Description>
                                Si necesitas un tiempo de conversación, agenda una cita pastoral. Estamos para acompañarte bajo los principios de la palabra
                            </Card.Description>
                        </Card.Body>
                        <Card.Footer>
                            <Button>agenda tu hora</Button>
                        </Card.Footer>
                    </Box>
                </Card.Root>

                <Card.Root
                    flexDirection="column"
                    overflow="hidden"
                    maxW="lx"
                    borderRadius="4xl"
                >
                    <Image
                        objectFit="cover"
                        maxW="100%"
                        src="/oracion/oracion.jpg"
                        alt="paisaje"
                    />
                    <Box>
                        <Card.Body>
                            <Card.Title mb="2">
                                Oracion
                            </Card.Title>
                            <Card.Description>
                                ¿Necesitas oración?. Nuestro equipo quiere leer tu petición, favor escríbenos
                            </Card.Description>
                        </Card.Body>
                        <Card.Footer>
                            <Button>Hablanos sobre tu oracion</Button>
                        </Card.Footer>
                    </Box>
                </Card.Root>
            </SimpleGrid>
        </div >
    );
}