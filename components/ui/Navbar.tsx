import { FC } from "react";
import Image from "next/image";
import { Spacer, Text, useTheme } from "@nextui-org/react";
import { LinkContainer } from "./Link";

export const Navbar: FC = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "start",
        padding: "0 50px",
        backgroundColor: theme?.colors.primaryShadow.value,
      }}
    >
      <LinkContainer href="/">
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
          alt="Imagen de pokemon"
          width={50}
          height={50}
        />
        <Text color="white" h2>
          P
        </Text>
        <Text color="white" h3>
          ókemon
        </Text>
      </LinkContainer>
      <Spacer css={{ flex: 1 }} />
      <LinkContainer href="/favorites">
        <Text h3 color="white">
          Favoritos
        </Text>
      </LinkContainer>
    </div>
  );
};
