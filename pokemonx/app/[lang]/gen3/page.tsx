import PokemonList from '../../components/PokemonList';

async function fetchPokemon(id: number) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!res.ok) throw new Error('Error fetching Pokémon');
  return res.json();
}

export default async function Gen3Page() {
  // Gen3 starts approx at #252
  const pokemon = await Promise.all(
    Array.from({ length: 10 }, (_, i) => fetchPokemon(i + 252))
  );

  return (
    <div>
      <h2>Generación 3</h2>
      <PokemonList pokemons={pokemon} />
    </div>
  );
}


