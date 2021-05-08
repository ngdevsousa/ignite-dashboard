import { Box, Stack, HStack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  recordsPerPage?: number;
  totalCountOfRecords: number;
}

const siblingsCount = 1;

function genPagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

export function Pagination({
  currentPage = 1,
  onPageChange,
  recordsPerPage = 10,
  totalCountOfRecords
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOfRecords / recordsPerPage);
  const prevPages =
    currentPage > 1
      ? genPagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];
  const nextPages =
    currentPage < lastPage
      ? genPagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      spacing="6"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack spacing="2">
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem value={1} onPageChange={onPageChange} />
            {currentPage > siblingsCount + 2 && (
              <Text textAlign="center" width="8">
                ...
              </Text>
            )}
          </>
        )}
        {prevPages.length > 0 &&
          prevPages.map((page) => {
            return (
              <PaginationItem
                key={page}
                value={page}
                onPageChange={onPageChange}
              />
            );
          })}
        <PaginationItem
          value={currentPage}
          isCurrent
          onPageChange={onPageChange}
        />
        {nextPages.length > 0 &&
          nextPages.map((page) => {
            return (
              <PaginationItem
                key={page}
                value={page}
                onPageChange={onPageChange}
              />
            );
          })}
        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text textAlign="center" width="8">
                ...
              </Text>
            )}
            <PaginationItem value={lastPage} onPageChange={onPageChange} />
          </>
        )}
      </HStack>
    </Stack>
  );
}
