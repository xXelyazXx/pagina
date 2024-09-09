import { Box, Link, Image } from '@chakra-ui/react';
import { FaYoutube, FaInstagram, FaPhone } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="footer">
      <Box>
        <p>Iglesia FVN</p>
        <Image src="/imagenes/images-removebg-preview.png" alt="logo" boxSize="70px" />
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" gap="2rem">
        <Link href="https://www.youtube.com/@FVNIglesia" isExternal>
          Encuentranos en youtube:
          <FaYoutube size="2rem" />
        </Link>
        <Link href="https://www.instagram.com/fvniglesia/" isExternal>
          Encuentranos en instagram:
          <FaInstagram size="2rem" />
        </Link>
        <p>
          Contactos:
        </p>
        correo: correo@gmail.com
        <FaPhone size="2rem" />
      </Box>
    </div>
  );
}