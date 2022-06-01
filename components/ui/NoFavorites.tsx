import { Container, Image, Text } from "@nextui-org/react";
import React from "react";

export const NoFavorites = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 100px)",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
      }}
    >
      <Text h1> No hay favoritos</Text>
      <Image
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
        }
        alt="not found"
        width={250}
        height={250}
        css={{ opacity: "0.1" }}
      />
    </Container>
  );
};
