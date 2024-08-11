import React from "react";
import { VStack } from "@chakra-ui/react";
import { Course } from "../../../types/course";
import { CourseListItem } from "./CourseListItem";

interface CourseListProps {
  courses: Course[];
}

export const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  return (
    <VStack spacing={4} align="stretch">
      {courses.map((course) => (
        <CourseListItem key={course.id} course={course} />
      ))}
    </VStack>
  );
};
