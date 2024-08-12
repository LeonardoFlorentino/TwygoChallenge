import { ChakraProvider, Box, Grid, theme, Flex } from "@chakra-ui/react";
import { Header } from "./components/shared/Header";
import { Footer } from "./components/shared/Footer";
import { Home } from "./pages/Home";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Grid minH="100vh">
      <Box textAlign="center" fontSize="xl">
        <Flex
          flexDirection={"column"}
          justifyContent="space-between"
          minH="100vh"
        >
          <Header />
          <Home />
          <Footer />
        </Flex>
      </Box>
    </Grid>
  </ChakraProvider>
);
