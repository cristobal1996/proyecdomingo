import PokemonList from '../../components/PokemonList';

async function fetchPokemon(id: number) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!res.ok) throw new Error('Error fetching Pokémon');
  return res.json();
}

export default async function Gen1Page() {
  const pokemon = await Promise.all(
    Array.from({ length: 10 }, (_, i) => fetchPokemon(i + 1))
  );

  return (
    <div>
      <h2>Generación 1</h2>
      <PokemonList pokemons={pokemon} />
    </div>
  );
}

