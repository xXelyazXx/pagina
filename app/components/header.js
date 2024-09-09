"use client"
import { useState } from 'react';
import { Box, Image, Link, Collapse, useDisclosure, useMediaQuery, Button } from '@chakra-ui/react';

const links = [
  { nombre: "Acerca de nosotros", url: "/acerca" },
  { nombre: "Grupos de vida", url: "/gdv" },
  { nombre: "Donde encontrarnos", url: "/ubicaciones" },
];

const tamanoImagen = "70px";

export default function Header() {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [isSmallScreen] = useMediaQuery("(max-width: 600px)");

  return (
    <nav className="navegacion">
      <Box width={tamanoImagen} height={tamanoImagen}>
        <Link href="/">
          <Image src="/imagenes/images-removebg-preview.png" alt="logo" boxSize={tamanoImagen} />
        </Link>
      </Box>
      {isSmallScreen ? (
        <>
          <Button onClick={onToggle}>Menu</Button>
          <Collapse in={isOpen} animateOpacity>
            <Box
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100vh"
              bg="white"
              zIndex="10"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Button onClick={onClose} position="absolute" top="10px" right="10px">
                Cerrar
              </Button>
              {links.map((link) => (
                <Box key={link.url} margin="10px 0">
                  <Link href={link.url}>
                    {link.nombre}
                  </Link>
                </Box>
              ))}
            </Box>
          </Collapse>
        </>
      ) : (
        <Box display="flex" flexDirection="row" alignItems="center">
          {links.map((link) => (
            <Box key={link.url} margin="10px">
              <Link href={link.url}>
                {link.nombre}
              </Link>
            </Box>
          ))}
        </Box>
      )}
    </nav>
  );
}