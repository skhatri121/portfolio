import { Box, Flex, Text } from "@chakra-ui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { navbarItems } from "@/constant";
import { THEME_COLORS } from "@/theme/colors";
import { PAGE_ROUTES } from "@/routes/routes.constant";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleName = () => {
    navigate(PAGE_ROUTES.LANDING);
  };

  const { pathname } = useLocation();

  return (
    <Box
      color={THEME_COLORS.white}
      zIndex={1}
      px={{ base: "4", md: "20" }}
      py={2}
      w={"100%"}
    >
      <Flex
        justifyContent={"space-between"}
        direction={{ base: "column", md: "row" }}
        gap={{ base: "2", md: "2" }}
        alignItems={{ base: "center" }}
      >
        <Text
          fontSize={"2xl"}
          letterSpacing={{ base: 0, md: 4 }}
          cursor={"pointer"}
          onClick={handleName}
          textAlign={{ base: "center" }}
        >
          HELLO
        </Text>
        <Flex gap={{ base: 2, md: 8 }}>
          {navbarItems?.map((item, index) => (
            <Link
              to={item?.path}
              style={{
                color: THEME_COLORS.white,
                textDecoration:
                  item.path?.toLocaleLowerCase() === pathname
                    ? "underline"
                    : "none",
                letterSpacing: 2,
              }}
              key={index}
            >
              {item.label}
            </Link>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};
