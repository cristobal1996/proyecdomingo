import { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';

export default function DigiList() {
  const [digi, setDigi] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchDigi = async () => {
    setLoading(true);
    const all = await fetch('https://digimon-api.vercel.app/api/digimon').then(res => res.json());
    const random = [...Array(10)].map(() => all[Math.floor(Math.random() * all.length)]);
    setDigi(random);
    setLoading(false);
  };

  useEffect(() => { fetchDigi(); }, []);

  return (
    <div className="p-4">
      <button onClick={fetchDigi} className="mb-4 px-4 py-2 bg-green-500 text-white rounded">Re</button>
      {loading ? <p>Car...</p> : (
        <div className="flex flex-wrap gap-4 justify-center">
          {digi.map(d => <PokemonCard key={d.name} name={d.name} image={d.img} />)}
        </div>
      )}
    </div>
  );
}
