import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { NotificationBar } from "./NotificationBar";
import { Profile } from "./Profile";
import { SearchBar } from "./SearchBar";

export function Header() {
  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true
  });
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1440}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />
      {isWideScreen && <SearchBar />}
      <Flex alignItems="center" ml="auto">
        <NotificationBar />
        <Profile showProfileData={isWideScreen} />
      </Flex>
    </Flex>
  );
}
