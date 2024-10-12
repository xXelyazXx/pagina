import {
    Grid,
    GridItem,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Image,
    Center,
} from '@chakra-ui/react'
import { useState } from 'react'
import React from 'react'



export default function GridInfo() {
    const [Informacion] = useState([
        {
            url: "/imagenes/paisaje1.jpg",
            titulo: "Bienvenidos",
            contenido: "-Historia FVN\n -Misión\n -Visión\n -Somos una iglesia adoradora"
        },
        {
            url: "/imagenes/paisaje2.jpeg",
            titulo: "Grupos de vida",
            contenido: "-GDV HOMBRES DD y HH\n -GDV MUJERES DD y HH\n -GDV JOVENES DD y HH\n -GDV TWEENS DD y HH\n -GDV YOUTH DD y HH"
        },
        {
            url: "/imagenes/paisaje3.jpg",
            titulo: "Amor por la casa",
            contenido: "Informacion de la iglesia"
        },
    ]);

    return (
        <Center style={{margin:"auto"}}>
            <Grid
                templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(3, 1fr)' }}
                gap={6}
                maxW="1200px"
                w="100%"
            >
                {Informacion.map((informacion) => (
                    <GridItem key={informacion.titulo}>
                        <Card key={informacion.titulo} mb={2} size="sm" borderRadius="15">
                            <CardHeader>{informacion.titulo}</CardHeader>
                            <CardBody margin="10px">
                                <Image
                                    src={informacion.url}
                                    alt="imagen"
                                    borderRadius="lg"
                                    className='slider-image'
                                    
                                />
                            </CardBody>
                            <CardFooter>
                                <p style={{ whiteSpace: 'pre-line' }}>{informacion.contenido}</p>
                            </CardFooter>
                        </Card>
                    </GridItem>
                ))}
            </Grid>
        </Center>
    )
}