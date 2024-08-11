import React from "react";
import { Box, Flex, Heading, Spacer, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom"; // Assumindo que o React Router está sendo usado

export const Header: React.FC = () => {
  return (
    <Box bg="teal.500" p={4}>
      <Flex alignItems="center">
        <Heading as="h1" size="lg" color="white">
          Threewygo
        </Heading>
        <Spacer />
        <Flex>
          <Button colorScheme="teal" variant="ghost" mr={4}>
            <Link to="/">Home</Link>
          </Button>
          <Button colorScheme="teal" variant="ghost">
            <Link to="/new-course">Novo Curso</Link>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};
