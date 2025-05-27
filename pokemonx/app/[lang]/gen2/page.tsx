import PokemonList from '../../components/PokemonList';

async function fetchPokemon(id: number) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!res.ok) throw new Error('Error fetching Pokémon');
  return res.json();
}

export default async function Gen2Page() {
  // Gen2 starts approx at #152
  const pokemon = await Promise.all(
    Array.from({ length: 10 }, (_, i) => fetchPokemon(i + 152))
  );

  return (
    <div>
      <h2>Generación 2</h2>
      <PokemonList pokemons={pokemon} />
    </div>
  );
}

