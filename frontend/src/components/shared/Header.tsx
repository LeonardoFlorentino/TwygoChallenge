import React from "react";
import { Box, Flex, Heading, Spacer, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ColorModeSwitcher } from "./../../ColorModeSwitcher";

export const Header: React.FC = () => {
  return (
    <Box bg="#AF61FF" p={4}>
      <Flex alignItems="center">
        <Heading as="h1" size="lg" color="white">
          twygo
        </Heading>
        <Spacer />
        <Flex>
          <Button colorScheme="#ffffff" variant="ghost" mr={4}>
            <Link to="/">Home</Link>
          </Button>
          <Button colorScheme="#ffffff" variant="ghost">
            <Link to="/new-course">Novo Curso</Link>
          </Button>
          <ColorModeSwitcher justifySelf="flex-end" alignSelf="flex-end" />
        </Flex>
      </Flex>
    </Box>
  );
};
