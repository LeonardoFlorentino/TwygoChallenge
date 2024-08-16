import React, { useState } from "react";
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Course } from "../../../types/course";

interface ModalCoursesProps {
  isOpen: boolean;
  onClose: () => void;
  course: Course;
}

export const ModalCourses: React.FC<ModalCoursesProps> = ({
  isOpen,
  onClose,
  course,
}) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videoId = course.urls
    ? course.urls[currentVideoIndex].url.split("v=")[1]
    : "";

  const handleNext = () => {
    if (course.urls && currentVideoIndex < course.urls.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };

  const showNavigationButtons = course.urls && course.urls.length > 1;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent maxWidth="80vw" width="80vw" height="90vh">
        <ModalHeader>{course.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody display="flex" flexDirection="column" height="100%">
          {course.urls && course.urls.length > 0 ? (
            <Box
              position="relative"
              flex="1"
              display="flex"
              alignItems="center"
            >
              {showNavigationButtons && (
                <IconButton
                  icon={<ChevronLeftIcon />}
                  aria-label="Anterior"
                  position="absolute"
                  left="0"
                  zIndex="1"
                  onClick={handlePrevious}
                  isDisabled={currentVideoIndex === 0}
                />
              )}
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={`Vídeo ${currentVideoIndex + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ flex: 1 }}
              ></iframe>
              {showNavigationButtons && (
                <IconButton
                  icon={<ChevronRightIcon />}
                  aria-label="Próximo"
                  position="absolute"
                  right="0"
                  zIndex="1"
                  onClick={handleNext}
                  isDisabled={
                    course.urls && currentVideoIndex === course.urls.length - 1
                  }
                />
              )}
            </Box>
          ) : (
            <Text>Não há vídeos disponíveis.</Text>
          )}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}>
            Fechar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
