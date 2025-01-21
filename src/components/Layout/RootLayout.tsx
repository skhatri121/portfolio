import { Box, Flex } from "@chakra-ui/react";

import { Background } from "@/assets/images";
import { THEME_COLORS } from "@/theme/colors";

import { Navbar } from "./Navbar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Flex
        bgImage={`url(${Background})`}
        backgroundSize={{ base: "cover", sm: "cover", md: "cover" }}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        h="100%"
        pos="relative"
        w={"100%"}
        minH={"100dvh"}
        direction={"column"}
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="rgba(0, 0, 0, 0.5)"
          zIndex={1}
        />
        <Navbar />
        <Box
          display={"flex"}
          flex={1}
          width={"100%"}
          px={{ base: 12, md: 32 }}
          color={THEME_COLORS.white}
          zIndex={2}
          py={{ base: 4, md: 12 }}
        >
          {children}
        </Box>
      </Flex>
    </>
  );
};
