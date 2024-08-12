import React from "react";
import { Box, Heading, Text, useColorMode } from "@chakra-ui/react";
import { Course } from "../../../types/course";

interface CourseListItemProps {
  course: Course;
}

export const CourseListItem: React.FC<CourseListItemProps> = ({ course }) => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "light" ? "white" : "gray.800";
  const hoverBgColor = colorMode === "light" ? "gray.50" : "gray.700";
  const textColor = colorMode === "light" ? "black" : "white";
  return (
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      borderRadius="lg"
      bg={bgColor}
      _hover={{ bg: hoverBgColor }}
    >
      <Heading as="h3" size="md" mb={2} color={textColor}>
        {course.title}
      </Heading>
      <Text color={textColor}>{course.description}</Text>
    </Box>
  );
};
