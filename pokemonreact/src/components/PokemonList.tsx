import { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';

export default function PokemonList({ range }: { range: [number, number] }) {
  const [pokemon, setPokemon] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPokemon = async () => {
    setLoading(true);
    const numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0]);
    const results = await Promise.all(
      numbers.map(n => fetch(`https://pokeapi.co/api/v2/pokemon/${n}`).then(res => res.json()))
    );
    setPokemon(results);
    setLoading(false);
  };

  useEffect(() => { fetchPokemon(); }, [range]);

  return (
    <div className="p-4">
      <button onClick={fetchPokemon} className="mb-2 px-2 py-1 text-sm bg-green-500 text-white rounded">Rec</button>
      {loading ? <p>Car...</p> : (
        <div className="flex flex-wrap gap-4 justify-center">
          {pokemon.map(p => <PokemonCard key={p.id} name={p.name} image={p.sprites.front_default} />)}
        </div>
      )}
    </div>
  );
}
