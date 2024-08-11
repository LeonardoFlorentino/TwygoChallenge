import React, { useEffect, useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { CourseList } from "../components/CourseList/CourseList";
// import { getActiveCourses } from "../services/courseService";
import { Course } from "../../types/course";

export const Home: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      //   const activeCourses = await getActiveCourses();
      //   setCourses(activeCourses);
      setCourses([]);
    };
    fetchCourses();
  }, []);

  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={5}>
        Cursos Ativos
      </Heading>
      {courses.length > 0 ? (
        <CourseList courses={courses} />
      ) : (
        <Text>Nenhum curso ativo disponível.</Text>
      )}
    </Box>
  );
};
