import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" bg="black" color="white" p={4} mt={8}>
      <Text>&copy; 2025 My Website. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;