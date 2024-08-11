import React from "react";
import { Box, Text } from "@chakra-ui/react";

export const Footer: React.FC = () => {
  return (
    <Box bg="teal.500" color="white" p={4} mt={10}>
      <Text align="center">
        © {new Date().getFullYear()} Threewygo. Todos os direitos reservados.
      </Text>
    </Box>
  );
};
