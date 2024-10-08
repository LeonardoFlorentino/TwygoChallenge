import React from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  useColorMode,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { Course } from "../../../types/course";
import { ModalCourses } from "../Modals/ModalsCourses";
import { MdVideoLibrary } from "react-icons/md";

interface CourseListItemProps {
  course: Course;
}

export const CourseListItem: React.FC<CourseListItemProps> = ({ course }) => {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgColor = colorMode === "light" ? "white" : "gray.800";
  const hoverBgColor = colorMode === "light" ? "gray.50" : "gray.700";
  const textColor = colorMode === "light" ? "black" : "white";

  // Extrai o ID do vídeo da URL
  const videoId = course.urls ? course.urls[0].url.split("v=")[1] : "";

  // URL da miniatura do vídeo

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  // Calcula a quantidade de dias faltantes para o término do curso
  const calculateDaysRemaining = (endDate: string) => {
    const end = new Date(endDate);
    const today = new Date();
    const timeDiff = end.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysDiff;
  };

  const daysRemaining = calculateDaysRemaining(course.endDate);

  return (
    <>
      <Box
        py={"8px"}
        px={"8px"}
        shadow="md"
        borderWidth="1px"
        borderRadius="lg"
        bg={bgColor}
        _hover={{ bg: hoverBgColor }}
        onClick={onOpen} // Abre a modal ao clicar no componente
        cursor="pointer"
        position="relative" // Para ajustar o posicionamento do contador de vídeo-aulas
      >
        {course.urls && (
          <Image
            src={thumbnailUrl}
            alt={course.title}
            borderRadius="lg"
            width={"100%"}
          />
        )}
        <Flex flexDir={"column"} alignItems={"flex-start"} p={1}>
          <Box height={"150px"}>
            <Heading as="h3" size="md" mb={2} color={textColor}>
              <Text align={"start"}>{course.title}</Text>
            </Heading>
            <Text color={textColor} mb={2} fontSize="sm" align={"start"}>
              {course.description}
            </Text>
            <Text color={textColor} fontSize="sm" mb={4} align={"start"}>
              Data de Término: {new Date(course.endDate).toLocaleDateString()}
            </Text>
          </Box>
          <Flex alignItems="center" justifyContent="space-between" width="100%">
            <Box
              bg={daysRemaining <= 0 ? "red.100" : "purple.100"}
              border="1px solid"
              borderColor={daysRemaining <= 0 ? "red.500" : "purple.500"}
              borderRadius="md"
              px={4}
              py={2}
              textAlign="center"
              flex="1"
              mr={2}
            >
              <Text
                color={daysRemaining <= 0 ? "red.500" : "purple.700"}
                fontSize="small"
                fontWeight="bold"
              >
                {daysRemaining > 0
                  ? `${daysRemaining} ${
                      daysRemaining === 1 ? "dia restante" : "dias restantes"
                    }`
                  : "Curso finalizado"}
              </Text>
            </Box>
            <Box
              display="flex"
              flexDir="row"
              justifyContent="center"
              bg="blue.100"
              border="1px solid"
              borderColor="blue.500"
              borderRadius="md"
              px={4}
              py={2}
              textAlign="center"
            >
              <Text color="blue.700" fontSize="small" fontWeight="bold" px={1}>
                {course.urls.length}
              </Text>
              <Text color="blue.700" fontSize="small" fontWeight="bold">
                <MdVideoLibrary color="blue.700" size="20px" />
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>

      <ModalCourses isOpen={isOpen} onClose={onClose} course={course} />
    </>
  );
};
