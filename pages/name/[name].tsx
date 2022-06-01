import { useState } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import confetti from "canvas-confetti";
import { pokeApi } from "../../api";
import { MainLayout } from "../../components/layouts";
import { Pokemon, PokemonListResponse } from "../../interfaces";
import { localFavorites } from "../../utils";

interface Props {
  pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
  // funcion para agregar o quitar de los favoritos
  const onToggleFavorites = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setIsInFavorite(!isInFavorite);

    if (isInFavorite) return;
    confetti({
      zIndex: 900,
      particleCount: 150,
      spread: 160,
      angle: -120,
      origin: {
        x: 1,
        y: 0,
      },
    });
  };

  const [isInFavorite, setIsInFavorite] = useState<boolean>(
    localFavorites.isFavorite(pokemon.id)
  );

  return (
    <MainLayout title={`${pokemon.name}`}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: "5px" }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "./no-image.png"
                }
                width="100%"
                height={200}
                alt={pokemon.name}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text transform="capitalize" h1>
                {pokemon.name}
              </Text>

              <Button
                color={"gradient"}
                ghost={!isInFavorite}
                onClick={onToggleFavorites}
              >
                {isInFavorite ? "Quitar de favoritos" : " Guardar en favoritos"}
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={32}>Sprites:</Text>
              <Container display="flex" direction="row">
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  const pokemonName = data.results.map((pokemon) => pokemon.name);

  return {
    paths: pokemonName.map((name) => ({ params: { name } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${name}`);

  const pokemon = {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  };
  return {
    props: {
      pokemon,
    },
  };
};

export default PokemonByNamePage;
