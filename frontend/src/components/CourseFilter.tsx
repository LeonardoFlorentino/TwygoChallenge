import React, { useEffect, useState } from "react";
import {
  Box,
  Input,
  Button,
  Stack,
  InputGroup,
  InputLeftElement,
  IconButton,
  Flex,
  useColorMode,
  SimpleGrid,
  Select,
} from "@chakra-ui/react";
import { FiFilter } from "react-icons/fi";
import { SearchIcon, CloseIcon } from "@chakra-ui/icons";
import { GiBroom } from "react-icons/gi";

interface CourseFilterProps {
  onFilter: (filters: {
    status: string;
    title: string;
    description: string;
    endDate: string;
  }) => void;
}

const EMPTY_FILTER = {
  status: "todos",
  title: "",
  description: "",
  endDate: "",
};

const INITIAL_FILTER = {
  status: "ativos",
  title: "",
  description: "",
  endDate: "",
};

export const CourseFilter: React.FC<CourseFilterProps> = ({ onFilter }) => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "light" ? "white" : "gray.800";
  const [isExpanded, setIsExpanded] = useState(false);
  const [filters, setFilters] = useState(INITIAL_FILTER);

  useEffect(() => {
    onFilter(filters);
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSearchTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const currentFilter = { ...filters, [name]: value };
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
    onFilter(currentFilter);
  };

  const handleSearchDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const currentFilter = { ...filters, [name]: value };
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
    onFilter(currentFilter);
  };

  const handleFilter = () => {
    onFilter(filters);
    toggleExpand();
  };

  const cleanFilter = () => {
    setFilters(EMPTY_FILTER);
    toggleExpand();
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleFilter();
    }
  };

  return (
    <SimpleGrid width="100%" mb={4} zIndex="1" justifyItems="end">
      <Stack w={{ sm: "100%", md: "40px" }}>
        <IconButton
          aria-label={isExpanded ? "Ocultar Filtros" : "Mostrar Filtros"}
          icon={<FiFilter />}
          colorScheme="purple"
          onClick={toggleExpand}
          mb={2}
        />
      </Stack>
      {isExpanded && (
        <Flex w="100%" flexDir={"column"} alignItems={"flex-end"}>
          <Box
            w={{ base: "100%", md: "300px", lg: "300px", xl: "300px" }} // Mantém uma largura fixa em lg e xl
            mt="200px"
            p={4}
            bg={bgColor}
            rounded="md"
            shadow="md"
            border="2px solid #AF61FF"
          >
            <Stack direction={["column", "column"]} spacing={4} align="center">
              <Select
                name="status"
                value={filters.status}
                onChange={handleChange}
              >
                <option value="todos">Todos</option>
                <option value="ativos">Ativos</option>
                <option value="inativos">Inativos</option>
              </Select>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<SearchIcon color="gray.300" />}
                />
                <Input
                  placeholder="Filtrar por título"
                  name="title"
                  value={filters.title}
                  onChange={handleSearchTitle}
                  onKeyDown={handleKeyDown}
                />
              </InputGroup>
              <Input
                placeholder="Filtrar por descrição"
                name="description"
                value={filters.description}
                onChange={handleSearchDescription}
                onKeyDown={handleKeyDown}
              />
              <Input
                placeholder="Data de Término"
                type="date"
                name="endDate"
                value={filters.endDate}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
              <Flex width={"100%"}>
                <Flex flex="1">
                  <Button mr={2} colorScheme="purple" onClick={handleFilter}>
                    Filtrar
                  </Button>
                </Flex>
                <IconButton
                  ml={2}
                  aria-label="Fechar Filtros"
                  icon={<GiBroom />}
                  colorScheme="red"
                  onClick={cleanFilter}
                />
                <IconButton
                  ml={2}
                  aria-label="Fechar Filtros"
                  icon={<CloseIcon />}
                  colorScheme="red"
                  onClick={toggleExpand}
                />
              </Flex>
            </Stack>
          </Box>
        </Flex>
      )}
    </SimpleGrid>
  );
};
