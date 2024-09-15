import { Box, Link, Image } from '@chakra-ui/react';
import { FaYoutube, FaInstagram, FaPhone } from 'react-icons/fa';

export default function Footer() {
  return (
    <nav className="footer">
      <Box width="70px" height="100hv">
        <p>Iglesia FVN</p>
        <Image 
        src="/imagenes/images-removebg-preview.png" 
        alt="logo" 
        boxSize="70px"
        objectFit="contain" 
        />
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
      </Box>
    </nav>
  );
}