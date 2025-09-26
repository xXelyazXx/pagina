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
          <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)} placement="top">
            <Drawer.Trigger asChild>
              <Button variant="outline" size="md" p={3} w="60px" h="50px">
                <Text color={"white"}><GiHamburgerMenu size={20}/></Text>
              </Button>
            </Drawer.Trigger>
            <Portal>
              <Drawer.Backdrop
                bg="rgba(0, 0, 0, 0.6)"
                transition="opacity 0.3s ease"
              />
              <Drawer.Positioner>
                <Drawer.Content
                  w="100vw"
                  h="100vh"
                  bg="rgba(0, 0, 0, 0.95)"
                  color="white"
                  borderRadius="0"
                  transform={open ? "translateY(0)" : "translateY(-100%)"}
                  transition="transform 0.3s ease, opacity 0.3s ease"
                  opacity={open ? 1 : 0}
                >
                  <Drawer.Header>
                  </Drawer.Header>
                  <Drawer.Body display="flex" justifyContent="center" alignItems="center" flex="1">
                    <Flex direction="column" gap={12} w="80%" maxW="300px" align="center">
                      <Link href="/nuestro_colegio" w="100%">
                        <Button
                          w="100%"
                          size="lg"
                          bg="transparent"
                          border="2px solid white"
                          color="white !important"
                          _hover={{ bg: "white", color: "black !important" }}
                          onClick={() => setOpen(false)}
                          sx={{ color: "white !important" }}
                        >
                            ¿Nuevo en FVN?
                        </Button>
                      </Link>
                      <Link href="/servicios" w="100%">
                        <Button
                          w="100%"
                          size="lg"
                          bg="transparent"
                          border="2px solid white"
                          color="white !important"
                          _hover={{ bg: "white", color: "black !important" }}
                          onClick={() => setOpen(false)}
                          sx={{ color: "white !important" }}
                        >
                          Horarios de servicios
                        </Button>
                      </Link>
                      <Link href="/grupos_vida" w="100%">
                        <Button
                          w="100%"
                          size="lg"
                          bg="transparent"
                          border="2px solid white"
                          color="white !important"
                          _hover={{ bg: "white", color: "black !important" }}
                          onClick={() => setOpen(false)}
                          sx={{ color: "white !important" }}
                        >
                          Te espera un grupo de vida
                        </Button>
                      </Link>
                      <Link href="/ofrendas" w="100%">
                        <Button
                          w="100%"
                          size="lg"
                          bg="transparent"
                          border="2px solid white"
                          color="white !important"
                          _hover={{ bg: "white", color: "black !important" }}
                          onClick={() => setOpen(false)}
                          sx={{ color: "white !important" }}
                        >
                          Donaciones
                        </Button>
                      </Link>
                    </Flex>
                  </Drawer.Body>
                  <Drawer.Footer justifyContent="center" pb={10}>
                    <Button
                      variant="outline"
                      size="lg"
                      color="white !important"
                      borderColor="white"
                      _hover={{ bg: "white", color: "black !important" }}
                      onClick={() => setOpen(false)}
                      sx={{ color: "white !important" }}
                    >
                      Cerrar
                    </Button>
                  </Drawer.Footer>
                  <Drawer.CloseTrigger asChild>
                    <CloseButton
                      size="lg"
                      position="absolute"
                      top={4}
                      right={4}
                      color="white !important"
                      _hover={{ bg: "rgba(255, 255, 255, 0.1)" }}
                      sx={{ color: "white !important" }}
                    />
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