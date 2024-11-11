import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    SimpleGrid,
    Image,
    Text,
    Box,
    Button,
    Flex,
    Center,
} from '@chakra-ui/react';
import react from 'react';
import './Conversemos.css';

const FONTSIZE = "xl";

export default function Conversemos() {
    return (
        <div>
            <div className="Titulo">
                Conversemos
            </div>
            <SimpleGrid
                columns={2}
                spacing={10}
                templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }}
                mx="25px"
            >
                {/* Card Consejeria */}
                <Card>
                    <Box position="relative">
                        <Image src='/imagenes/paisaje1.jpg' alt="imagen" borderRadius="lg" className='slider-image' />
                        <Text className="texto">
                            Consejeria
                        </Text>
                    </Box>
                    <CardBody >
                        <Text fontSize={FONTSIZE}> Si necesita una audiencia con nuestros pastores </Text>
                    </CardBody>
                    <CardFooter>
                        <Button colorScheme="blue" variant="solid" width="100%">
                            <Text> Complete el formulario </Text>
                        </Button>
                    </CardFooter>
                </Card>
                {/* */}

                {/* Card Oracion */}
                <Card>
                    <Box position="relative">
                        <Image src='/imagenes/paisaje2.jpeg' alt="imagen" borderRadius="lg" className='slider-image' />
                        <Text className="texto">
                            Oración
                        </Text>
                    </Box>
                    <CardBody >
                        <Text fontSize= {FONTSIZE}> Si está pasando necesidad y necesita oración </Text>
                    </CardBody>
                    <CardFooter>
                        <Button colorScheme="blue" variant="solid" width="100%">
                            <Text> Complete el formulario </Text>
                        </Button>
                    </CardFooter>
                </Card>
                {/* */}

            </SimpleGrid>
        </div>
    );
}