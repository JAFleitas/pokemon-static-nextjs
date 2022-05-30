import { Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import { FC } from "react";

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
        padding: "0 20px",
        backgroundColor: theme?.colors.gray300.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="Imagen de pokemon"
        width={70}
        height={70}
      />
      <Text color="white" h2>
        P
      </Text>
      <Text color="white" h3>
        okemon
      </Text>
      <Spacer css={{ flex: 1 }} />
      <Text color="white">favoritos</Text>
    </div>
  );
};
