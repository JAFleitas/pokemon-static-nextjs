import { Grid } from "@nextui-org/react";
import { FC } from "react";
import { FavoritesCardPokemon } from "./FavoritesCardPokemon";

interface Props {
  pokemons: number[];
}

export const FavoritesCardContainer: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={4} direction={"row"} justify={"center"}>
      {pokemons?.map((id) => (
        <FavoritesCardPokemon pokemonId={id} key={id} />
      ))}
    </Grid.Container>
  );
};
