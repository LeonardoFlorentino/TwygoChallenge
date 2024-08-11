import * as React from "react";
import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Header } from "./components/shared/Header";
import { Footer } from "./components/shared/Footer";
import { Home } from "./pages/Home";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Header />
        <Home />
        <Footer />
      </Grid>
    </Box>
  </ChakraProvider>
);
