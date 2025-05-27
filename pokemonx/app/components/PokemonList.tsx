'use client';
import { useState } from 'react';
import PokemonModal from './PokemonModal';

interface Pokemon {
  id: number;
  name: string;
  sprites: { front_default: string };
}

interface Props {
  pokemons: Pokemon[];
}

export default function PokemonList({ pokemons }: Props) {
  const [selected, setSelected] = useState<Pokemon | null>(null);

  return (
    <>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {pokemons.map((poke) => (
          <div key={poke.id} style={{ border: '1px solid #ccc', padding: '1rem', width: 150 }}>
            <img src={poke.sprites.front_default} alt={poke.name} />
            <h3>{poke.name}</h3>
            <p>#{poke.id}</p>
            <button onClick={() => setSelected(poke)}>Saber más</button>
          </div>
        ))}
      </div>

      {selected && <PokemonModal pokemon={selected} onClose={() => setSelected(null)} />}
    </>
  );
}

