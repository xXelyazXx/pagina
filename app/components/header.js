"use client"
import Link from "next/link";
import React from "react";
import { Image, Box } from '@chakra-ui/react';


const links = [
  { nombre: "Acerca de nosotros", url: "/acerca" },
  { nombre: "Grupos de vida", url: "/gdv" },
  { nombre: "Donde encontrarnos", url: "/ubicaciones" },
];

const tamanoImagen = "70px"
export default function Header() {
  return (
    <nav className="navegacion">
      <Box width={tamanoImagen} height={tamanoImagen}>
        <Link href="/">
          <Image src="/imagenes/images-removebg-preview.png" alt="logo" boxSize={tamanoImagen} />
        </Link>
      </Box>
      {links.map((link) => (
        <Box>
          <Link href={link.url} key={link.url}>
            {link.nombre}
          </Link>
        </Box>
      ))}
    </nav>
  );
}
