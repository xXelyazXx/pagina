import { Box, Flex, Heading, Image, Link } from "@chakra-ui/react";


const Header = () => {
  return (
    <Box as="header" bg="#c59864" color="black" p={4}>
      <Flex align="center" justify="space-between">
        <Image src="fvniglesia.png" alt="Logo" boxSize="70px" />
        <nav>
          <Link color="white" p={2}>
            Home
          </Link>
          <Link color="white" p={2}>
            About
          </Link>
          <Link color="white" p={2}>
            Contact
          </Link>
        </nav>
      </Flex>
    </Box>
  );
};

export default Header;