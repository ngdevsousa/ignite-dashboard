import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Foo</Text>
        <Text color="gray.300" fontSize="small">
          foo@email.com
        </Text>
      </Box>
      <Avatar size="md" name="Foo" />
    </Flex>
  );
}
