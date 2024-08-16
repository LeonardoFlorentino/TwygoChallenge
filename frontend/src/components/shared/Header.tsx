import React from "react";
import { Box, Flex, Heading, Spacer, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ColorModeSwitcher } from "./../../ColorModeSwitcher";
import owlIcon from "../../assets/images/great-horned-owl.svg";

export const Header: React.FC = () => {
  return (
    <Box bg="#AF61FF" p={4}>
      <Flex alignItems="center">
        <Flex alignItems="center">
          <Image
            src={owlIcon}
            alt="Owl Icon"
            boxSize="40px"
            mr="16px"
            filter="invert(100%) sepia(100%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%);"
          />
          <Heading as="h1" size="lg" color="white">
            chiravante
          </Heading>
        </Flex>
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
