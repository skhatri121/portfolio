import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ChakraProvider value={defaultSystem}>
      <BrowserRouter>{children}</BrowserRouter>
    </ChakraProvider>
  );
};
