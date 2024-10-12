import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    SimpleGrid,
    Image,
} from '@chakra-ui/react';
import react from 'react';
import './Conversemos.css';

export default function Conversemos() {
    return (
        <div>
            <div className="Titulo">
                Conversemos
            </div>
            <SimpleGrid 
            columns={2} 
            spacing={10} 
            templateColumns={{base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)'}}
            mx="25px"
            >
                <Card className="Card">
                    <CardHeader>
                        <h1>Consejeria</h1>
                    </CardHeader>
                    <CardBody>
                        <Image src='/imagenes/paisaje1.jpg' alt="imagen" borderRadius="lg" className='slider-image'/>
                    </CardBody>
                    <CardFooter>
                        <p>Proximo Boton a Formulario</p>
                    </CardFooter>
                    
                </Card>
                <Card className="Card">
                    <CardHeader>
                        <h1>Oracion</h1>
                    </CardHeader>
                    <CardBody>
                        <Image src='/imagenes/paisaje2.jpeg' alt="imagen" borderRadius="lg" className='slider-image'/>
                    </CardBody>
                    <CardFooter>
                        <p>Proximo Boton a Formulario</p>
                    </CardFooter>
                </Card>
            </SimpleGrid>
            
        </div>
    );
}