import { Stack, Text } from "@chakra-ui/react";

import { LANDING_DETAILS } from "../constant";

const HomeScreen = () => {
  return (
    <>
      <Stack justifyContent={"center"}>
        <Text fontSize={"4xl"} fontWeight={"bold"} letterSpacing={2}>
          {LANDING_DETAILS.title}
        </Text>
        <Text fontSize={"3xl"} fontWeight={"light"}>
          {LANDING_DETAILS.first_description}
        </Text>
        <Text fontSize={"2xl"} fontWeight={"extralight"}>
          {LANDING_DETAILS.second_description}
        </Text>
      </Stack>
    </>
  );
};

export default HomeScreen;
