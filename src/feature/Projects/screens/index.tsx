import { Card, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";

import { Background } from "@/assets/images";

import { PROJECT_LIST } from "../constant";

const ProjectScreen = () => {
  return (
    <>
      <Flex direction={"column"} gap={4} pb={12}>
        <Text
          fontSize={"xl"}
          pt={8}
          letterSpacing={2}
          textDecoration={"underline"}
        >
          Projects
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={8}>
          {PROJECT_LIST?.map((project, index) => {
            return (
              <>
                <Card.Root key={index} cursor={"pointer"}>
                  <Card.Body p={0} m={0}>
                    <Image src={Background} />
                  </Card.Body>
                  <Card.Title p={2}>
                    <Text fontWeight={"medium"}>{project?.project_title}</Text>
                  </Card.Title>
                  <Card.Description p={2} fontWeight={"normal"}>
                    <Text>{project?.project_description}</Text>
                  </Card.Description>
                </Card.Root>
              </>
            );
          })}
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default ProjectScreen;
