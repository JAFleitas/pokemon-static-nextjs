import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";

export const getPokemonData = async (idOrName: string) => {
  try {
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${idOrName}`);
    const pokemon = {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
    };
    return pokemon;
  } catch (error) {
    return null;
  }
};
