"use client"
import { 
  Box, 
  Image, 
  Link, 
  Collapse, 
  useDisclosure, 
  Button, 
  Icon 
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import "./header.css";

const links = [
  { nombre: "Acerca de nosotros", url: "/acerca" },
  { nombre: "Grupos de vida", url: "/gdv" },
  { nombre: "Donde encontrarnos", url: "/ubicaciones" },
];

const tamanoImagen = "70px";

export default function Header() {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <nav className="header">
      <Box width={tamanoImagen} height={tamanoImagen}>
        <Link href="/">
          <Image 
          src="/imagenes/images-removebg-preview.png" 
          alt="logo" 
          boxSize={tamanoImagen} 
          objectFit="contain"
          />
        </Link>
      </Box>
      Iglesia Fuente de Vida.
      <Box ml="auto">
        <Button onClick={onToggle} background="transparent" >
          <Icon as={HamburgerIcon} w={6} h={6} />
        </Button>
      </Box>
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
          color={"black"}
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
    </nav>
  );
}