import { Box, Button, HStack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  return (
    <HStack mt="8" justify="space-between" spacing="6" align="center">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack spacing="2">
        <PaginationItem isCurrent={true} value={1} />
        <PaginationItem value={2} />
        <PaginationItem value={3} />
      </HStack>
    </HStack>
  );
}
