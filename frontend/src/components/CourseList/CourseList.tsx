import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { Course } from "../../../types/course";
import { CourseListItem } from "./CourseListItem";

interface CourseListProps {
  courses: Course[];
}

export const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={8} p={4}>
      {courses.map((course) => (
        <CourseListItem key={course.id} course={course} />
      ))}
    </SimpleGrid>
  );
};
