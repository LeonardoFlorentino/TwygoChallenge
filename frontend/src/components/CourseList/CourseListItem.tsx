import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { Course } from "../../../types/course";

interface CourseListItemProps {
  course: Course;
}

export const CourseListItem: React.FC<CourseListItemProps> = ({ course }) => {
  return (
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      borderRadius="lg"
      bg="white"
      _hover={{ bg: "gray.50" }}
    >
      <Heading as="h3" size="md" mb={2}>
        {course.title}
      </Heading>
      <Text>{course.description}</Text>
    </Box>
  );
};
