'use client';
import { useRouter } from 'next/navigation';

interface Pokemon {
  id: number;
  name: string;
  sprites: { front_default: string };
}

interface Props {
  pokemon: Pokemon;
  onClose: () => void;
}

export default function PokemonModal({ pokemon, onClose }: Props) {
  const router = useRouter();

  function handleClose() {
    onClose();
    router.push('/'); 
  }

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex',
      justifyContent: 'center', alignItems: 'center'
    }}>
      <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: 8, width: 300 }}>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <p>ID: {pokemon.id}</p>
        <button onClick={handleClose}>Cerrar</button>
      </div>
    </div>
  );
}

