
'use client';

import { useEffect, useState } from 'react';
import PokemonList from '../components/PokemonList';

export default function Gen1Page() {
  const [pokemon, setPokemon] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);


  const gen1Ids = Array.from({ length: 151 }, (_, i) => i + 1);

  useEffect(() => {
    async function fetchPokemon() {
      setLoading(true);
      try {
        const shuffled = gen1Ids.sort(() => 0.5 - Math.random());
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

  if (loading) return <div>Cargando Pokémon de Gen1...</div>;

  return <PokemonList pokemon={pokemon} />;
}

