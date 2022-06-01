import { useEffect, useState } from "react";
import { NextPage } from "next";

import { MainLayout } from "../../components/layouts/MainLayout";
import { FavoritesCardContainer } from "../../components/pokemon/FavoritesCardContainer";
import { NoFavorites } from "../../components/ui";
import { localFavorites } from "../../utils";

const FavoritesPage: NextPage = () => {
  const [pokemonFavorites, setPokemonFavorites] = useState<number[]>([]);
  useEffect(() => {
    setPokemonFavorites(localFavorites.pokemons());
  }, []);

  return (
    <MainLayout title="Favoritos">
      {pokemonFavorites?.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritesCardContainer pokemons={pokemonFavorites} />
      )}
    </MainLayout>
  );
};

export default FavoritesPage;
