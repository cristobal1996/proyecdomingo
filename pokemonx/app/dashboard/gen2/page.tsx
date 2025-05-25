
'use client';

import { useEffect, useState } from 'react';
import PokemonList from '../../components/PokemonList';

export default function Gen2Page() {
  const [pokemon, setPokemon] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const gen2Ids = Array.from({ length: 100 }, (_, i) => i + 152);

  useEffect(() => {
    async function fetchPokemon() {
      setLoading(true);
      try {
        const shuffled = gen2Ids.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 10);

        const promises = selected.map((id) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => res.json())
        );

        const results = await Promise.all(promises);
        setPokemon(results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchPokemon();
  }, []);

  if (loading) return <div>Cargando Pokémon de Gen2...</div>;

  return <PokemonList pokemon={pokemon} />;
}
