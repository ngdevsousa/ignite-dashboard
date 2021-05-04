import { useRouter } from "next/dist/client/router";
import Link, { LinkProps } from "next/link";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  matchStrictHref?: boolean;
}

export function ActiveLink({
  children,
  matchStrictHref,
  ...props
}: ActiveLinkProps) {
  const { asPath } = useRouter();
  let isActive = false;

  if (matchStrictHref && (asPath === props.href || asPath === props.as))
    isActive = true;

  if (
    !matchStrictHref &&
    (asPath.startsWith(String(props.href)) ||
      asPath.startsWith(String(props.as)))
  )
    isActive = true;

  return (
    <Link {...props}>
      {cloneElement(children, {
        color: isActive ? "pink.400" : "gray.50"
      })}
    </Link>
  );
}
