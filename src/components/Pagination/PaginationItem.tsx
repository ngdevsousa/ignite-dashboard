import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  isCurrent?: boolean;
  value: number;
  onPageChange: (page: number) => void;
}
export function PaginationItem({
  isCurrent = false,
  value,
  onPageChange
}: PaginationItemProps) {
  if (isCurrent)
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{ bg: "pink.500", cursor: "default" }}
      >
        {value}
      </Button>
    );

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{
        bg: "gray.500"
      }}
      onClick={() => onPageChange(value)}
    >
      {value}
    </Button>
  );
}
