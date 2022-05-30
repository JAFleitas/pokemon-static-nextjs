import { Grid } from "@nextui-org/react";
import { FC } from "react";
import { SmallPokemon } from "../../interfaces";
import { PokemonCard } from "./PokemonCard";

interface Props {
  pokemons: SmallPokemon[];
}

export const PokemonContainer: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} justify="flex-start">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </Grid.Container>
  );
};
