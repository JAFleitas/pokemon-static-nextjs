import { NextPage, GetStaticProps } from "next";
import { PokemonContainer } from "../components/pokemon";
import { MainLayout } from "../components/layouts";
import { PokemonListResponse, SmallPokemon } from "../interfaces";
import { pokeApi } from "../api";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <MainLayout title="Pokedex-Jafleitas">
      <PokemonContainer pokemons={pokemons} />
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`,
  }));
  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
