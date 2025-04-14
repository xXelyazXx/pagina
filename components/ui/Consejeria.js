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
                    maxW="lx">
                    <Image
                        objectFit="cover"
                        maxW="100%"
                        src="paisaje1.jpeg"
                        alt="paisaje"
                    />
                    <Box>
                        <Card.Body>
                            <Card.Title mb="2">
                                Consejeria
                            </Card.Title>
                            <Card.Description>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec libero lacinia tempus. Nullam nec purus nec libero lacinia tempus. Nullam nec purus nec libero lacinia tempus. Nullam nec purus nec libero lacinia tempus.
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
                maxW="lx">
                    <Image
                        objectFit="cover"
                        maxW="100%"
                        src="paisaje1.jpeg"
                        alt="paisaje"
                    />
                    <Box>
                        <Card.Body>
                            <Card.Title mb="2">
                                Oracion
                            </Card.Title>
                            <Card.Description>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec libero lacinia tempus. Nullam nec purus nec libero lacinia tempus. Nullam nec purus nec libero lacinia tempus. Nullam nec purus nec libero lacinia tempus.
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