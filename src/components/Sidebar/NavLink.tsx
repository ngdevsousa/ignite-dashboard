import { Icon, Link as ChackraLink, LinkProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import Link from "next/link";
interface NavLinkProps extends LinkProps {
  children: string;
  icon: ElementType;
  href: string
}
export function NavLink({ children, icon, href, ...props }: NavLinkProps) {
  return (
    <Link href={href} passHref>
      <ChackraLink display="flex" align="center" {...props}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChackraLink>
    </Link>
  );
}
