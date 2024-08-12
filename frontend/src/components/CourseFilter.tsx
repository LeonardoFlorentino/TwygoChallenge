import React, { useState } from "react";
import {
  Box,
  Input,
  Button,
  Stack,
  InputGroup,
  InputLeftElement,
  Collapse,
  IconButton,
  Flex,
  useColorMode,
} from "@chakra-ui/react";
import { FiFilter } from "react-icons/fi";
import { SearchIcon, CloseIcon } from "@chakra-ui/icons";

interface CourseFilterProps {
  onFilter: (filters: {
    title: string;
    description: string;
    startDate: string;
    endDate: string;
  }) => void;
}

export const CourseFilter: React.FC<CourseFilterProps> = ({ onFilter }) => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "light" ? "white" : "gray.800";
  const [isExpanded, setIsExpanded] = useState(false);
  const [filters, setFilters] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleFilter = () => {
    onFilter(filters);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Box mb={4} zIndex="1">
      <Stack>
        <IconButton
          aria-label={""}
          icon={<FiFilter />}
          colorScheme="purple"
          onClick={toggleExpand}
          mb={2}
        />
      </Stack>
      <Collapse in={isExpanded} startingHeight={"-40px"} animateOpacity>
        <Box
          mt="200px"
          p={4}
          bg={bgColor}
          rounded="md"
          shadow="md"
          height="100%"
          border="2px solid #AF61FF"
        >
          <Stack direction={["row", "column"]} spacing={4} align="center">
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
              />
              <Input
                placeholder="Filtrar por título"
                name="title"
                value={filters.title}
                onChange={handleChange}
              />
            </InputGroup>
            <Input
              placeholder="Filtrar por descrição"
              name="description"
              value={filters.description}
              onChange={handleChange}
            />
            <Input
              placeholder="Data de Início"
              type="date"
              name="startDate"
              value={filters.startDate}
              onChange={handleChange}
            />
            <Input
              placeholder="Data de Término"
              type="date"
              name="endDate"
              value={filters.endDate}
              onChange={handleChange}
            />
            <Flex>
              <Button
                mr={2}
                width="200px"
                colorScheme="purple"
                onClick={handleFilter}
              >
                Filtrar
              </Button>
              {isExpanded && (
                <IconButton
                  ml={2}
                  aria-label="Fechar Filtros"
                  icon={<CloseIcon />}
                  colorScheme="red"
                  onClick={toggleExpand}
                />
              )}
            </Flex>
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
};
