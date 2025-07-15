"use client"
import { Box, Flex, Image, Link, Drawer, Button, Portal, CloseButton, Text } from "@chakra-ui/react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box as="header" className="Header" p={4} >
      <Flex align="center" justify="space-between" flexWrap="wrap">
        <Link href="/">
          <Image src="/logos/fvn iglesia.png" alt="Logo" height={{ base: "100px", md: "100px" }} width="auto" objectFit="contain" />
        </Link>

        {/* Menú para pantallas grandes */}
        <Flex flexWrap="wrap" gap={10} align="center" display={{ base: "none", md: "flex" }} mr={8}>
          <Link href="/nuestro_colegio">
            <Box className="card-Header" p={2} minW={0}>
              <Text textTransform="uppercase" fontSize={{ base: "0.7rem", md: "1rem" }} isTruncated>¿Nuevo en FVN?</Text>
            </Box>
          </Link>
          <Link href="/servicios">
            <Box className="card-Header" p={2} minW={0}>
              <Text textTransform="uppercase" fontSize={{ base: "0.7rem", md: "1rem" }} isTruncated>Horarios de servicios</Text>
            </Box>
          </Link>
          <Link href="/grupos_vida">
            <Box className="card-Header" p={2} minW={0}>
              <Text textTransform="uppercase" fontSize={{ base: "0.7rem", md: "1rem" }} isTruncated>Te espera un grupo de vida</Text>
            </Box>
          </Link>
          <Link href="/ofrendas">
            <Box className="card-Header" p={2} minW={0}>
              <Text textTransform="uppercase" fontSize={{ base: "0.7rem", md: "1rem" }} isTruncated>Donaciones</Text>
            </Box>
          </Link>
        </Flex>

        {/* Drawer para pantallas pequeñas */}
        <Box display={{ base: "block", md: "none" }}>
          <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
            <Drawer.Trigger asChild>
              <Button variant="outline" size="sm">
                <GiHamburgerMenu />
              </Button>
            </Drawer.Trigger>
            <Portal>
              <Drawer.Backdrop />
              <Drawer.Positioner>
                <Drawer.Content>
                  <Drawer.Header>
                    <Drawer.Title>Menú</Drawer.Title>
                  </Drawer.Header>
                  <Drawer.Body>
                    <Flex direction="column" gap={2}>
                      <Link href="/nuestro_colegio">
                        <Button w="100%" onClick={() => setOpen(false)}>¿Nuevo en FVN?</Button>
                      </Link>
                      <Link href="/servicios">
                        <Button w="100%" onClick={() => setOpen(false)}>Horarios de servicios</Button>
                      </Link>
                      <Link href="/grupos_vida">
                        <Button w="100%" onClick={() => setOpen(false)}>Te espera un grupo de vida</Button>
                      </Link>
                      <Link href="/ofrendas">
                        <Button w="100%" onClick={() => setOpen(false)}>Donaciones</Button>
                      </Link>
                    </Flex>
                  </Drawer.Body>
                  <Drawer.Footer>
                    <Button variant="outline" onClick={() => setOpen(false)}>Cerrar</Button>
                  </Drawer.Footer>
                  <Drawer.CloseTrigger asChild>
                    <CloseButton size="sm" />
                  </Drawer.CloseTrigger>
                </Drawer.Content>
              </Drawer.Positioner>
            </Portal>
          </Drawer.Root>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;