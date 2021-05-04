import { Box, Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="General">
          <NavLink href="/dashboard" icon={RiDashboardLine}>Dashboard</NavLink>
          <NavLink href="/users" icon={RiContactsLine}>Users</NavLink>
        </NavSection>
        <NavSection title="Deployments">
          <NavLink href="/forms" icon={RiInputMethodLine}>Forms</NavLink>
          <NavLink href="/branchs" icon={RiGitMergeLine}>Branchs</NavLink>
        </NavSection>
      </Stack>
    </Box>
  );
}
