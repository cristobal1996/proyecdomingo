
'use client';

import { useEffect, useState } from 'react';
import PokemonList from '../components/PokemonList';

export default function Gen3Page() {
  const [pokemon, setPokemon] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const gen3Ids = Array.from({ length: 135 }, (_, i) => i + 252);

  useEffect(() => {
    async function fetchPokemon() {
      setLoading(true);
      try {
        const shuffled = gen3Ids.sort(() => 0.5 - Math.random());
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

  if (loading) return <div>Cargando Pokémon de Gen3...</div>;

  return <PokemonList pokemon={pokemon} />;
}

