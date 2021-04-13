import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/input";

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" alignItems="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <Input name="email" type="email" label="email" />
          <Input name="password" type="password" label="password" />
          <Button type="submit" mt="6" colorScheme="pink" size="lg">
            Login
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
}
