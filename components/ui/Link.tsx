import { FC } from "react";
import NextLink from "next/link";
import { Link } from "@nextui-org/react";

interface Props {
  href: string;
  children: JSX.Element | JSX.Element[];
}

export const LinkContainer: FC<Props> = ({ href, children }) => {
  return (
    <NextLink href={href} passHref>
      <Link css={{ display: "flex", alignItems: "center" }}>{children}</Link>
    </NextLink>
  );
};
