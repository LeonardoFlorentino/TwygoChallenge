import React, { useEffect, useState } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { CourseList } from "../components/CourseList/CourseList";
import { CourseFilter } from "../components/CourseFilter";
import { Course } from "../../types/course";
// Supondo que você tenha um arquivo db.ts ou similar com dados mockados
import { courses as db } from "../db";

export const Home: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      //   const activeCourses = await getActiveCourses();
      //   setCourses(activeCourses);
      setCourses(db);
      setFilteredCourses(db);
    };
    fetchCourses();
  }, []);

  const handleFilter = (filters: {
    status: string;
    title: string;
    description: string;
    endDate: string;
  }) => {
    const { status, title, description, endDate } = filters;

    const filtered = courses
      .filter((course) => {
        const courseEndDate = new Date(course.endDate);
        const today = new Date();

        // Filtragem por título e descrição
        const matchesTitle =
          title === "" ||
          course.title.toLowerCase().includes(title.toLowerCase());
        const matchesDescription =
          description === "" ||
          course.description.toLowerCase().includes(description.toLowerCase());

        // Filtragem por status
        const matchesStatus =
          status === "todos" ||
          (status === "ativos" && courseEndDate >= today) ||
          (status === "inativos" && courseEndDate < today);

        // Filtragem por data de término (opcional, baseado em endDate do filtro)
        const matchesEndDate =
          endDate === "" || courseEndDate > new Date(endDate);

        return (
          matchesTitle && matchesDescription && matchesStatus && matchesEndDate
        );
      })
      .sort((a, b) => {
        // Ordena os cursos pela data mais recente em relação à data atual
        const dateA = new Date(a.endDate);
        const dateB = new Date(b.endDate);

        // Ordena de forma decrescente (mais recente primeiro)
        return dateA.getTime() - dateB.getTime();
      });

    setFilteredCourses(filtered);
  };

  return (
    <Box flex="1" p={5} justifyContent="space-between">
      <Flex mb={5} align="center" justifyContent={"flex-end"} height={20}>
        <CourseFilter onFilter={handleFilter} />
      </Flex>
      <Heading as="h1" size="xl" textAlign="center" flex="1">
        Cursos Ativos
      </Heading>
      {filteredCourses.length > 0 ? (
        <CourseList courses={filteredCourses} />
      ) : (
        <Text>Nenhum curso ativo disponível.</Text>
      )}
    </Box>
  );
};
