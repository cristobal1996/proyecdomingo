import { useEffect, useState } from 'react';

export default function Ini() {
  const [pokemon, setPokemon] = useState<any>(null);
  const [digi, setDigi] = useState<any>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const id = Math.floor(Math.random() * 386) + 1;
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      setPokemon({ name: data.name, image: data.sprites.front_default });
    };

    const fetchDigi = async () => {
      const all = await fetch('https://digimon-api.vercel.app/api/digimon').then(res => res.json());
      const random = all[Math.floor(Math.random() * all.length)];
      setDigi({ name: random.name, image: random.img });
    };

    fetchPokemon();
    fetchDigi();
  }, []);

  return (
    <div className="max-w-screen-lg mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Bienvenido a Pokémon & Digi</h1>
      <div className="flex justify-center gap-12">
        {pokemon && (
          <div>
            <img src={pokemon.image} alt={pokemon.name} className="w-96 h-96 object-contain mx-auto" />
          </div>
        )}
        {digi && (
          <div>
            <img src={digi.image} alt={digi.name} className="w-96 h-96 object-contain mx-auto" />
          </div>
        )}
      </div>
    </div>
  );
}
