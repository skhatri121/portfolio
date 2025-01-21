import { Card, Flex, HStack, Stack, Text } from "@chakra-ui/react";

import { Avatar } from "@/components/ui/avatar";

import { ABOUT_ME } from "../constant";

const AboutScreen = () => {
  return (
    <>
      <Flex justifyContent="center" alignItems="center" w="100%">
        <Card.Root w="800px" h="fit-content" borderRadius="lg" boxShadow="2xl">
          <Card.Body gap={4}>
            <HStack justifyContent="center">
              <Avatar
                src="https://picsum.photos/200/300"
                name="USER"
                size="2xl"
                w="150px"
                h="150px"
              />
            </HStack>
            <Card.Description>
              <Stack
                pl={{ base: 0, md: 6 }}
                pr={{ base: 0, md: 6 }}
                pb={{ base: 0, md: 6 }}
                textAlign="center"
              >
                <Text fontSize="xl" color="gray.700">
                  {ABOUT_ME?.description_one}
                </Text>
                <Text fontSize="xl" color="gray.700">
                  {ABOUT_ME?.description_two}
                </Text>
              </Stack>
            </Card.Description>
          </Card.Body>
        </Card.Root>
      </Flex>
    </>
  );
};

export default AboutScreen;
