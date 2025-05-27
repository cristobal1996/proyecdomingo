import PokemonList from '../components/PokemonList';

async function fetchPokemon(id: number) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!res.ok) throw new Error('Error fetching Pokémon');
  return res.json();
}

export default async function HomePage() {
  const randomId = Math.floor(Math.random() * 1000) + 1;
  const pokemon = await fetchPokemon(randomId);

  return (
    <div>
      <p>Bienvenido a PokemonX, la web para fans de Pokémon.</p>
      <PokemonList pokemons={[pokemon]} />
    </div>
  );
}

