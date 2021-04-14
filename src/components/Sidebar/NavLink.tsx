import { Icon, Link, LinkProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps extends LinkProps {
  children: string;
  icon: ElementType;
}
export function NavLink({ children, icon, ...props }: NavLinkProps) {
  return (
    <Link display="flex" align="center" {...props}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
}
