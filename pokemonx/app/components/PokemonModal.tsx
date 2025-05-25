'use client';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  CircularProgress,
} from '@mui/material';
import { useEffect, useState } from 'react';

interface PokemonModalProps {
  open: boolean;
  onClose: () => void;
  pokemonId: number | null;
}

export default function PokemonModal({ open, onClose, pokemonId }: PokemonModalProps) {
  const [pokemon, setPokemon] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (pokemonId) {
      setLoading(true);
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then((res) => res.json())
        .then((data) => {
          setPokemon(data);
          setLoading(false);
        });
    }
  }, [pokemonId]);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      {loading ? (
        <DialogContent sx={{ textAlign: 'center' }}>
          <CircularProgress />
        </DialogContent>
      ) : (
        <>
          <DialogTitle>
            {pokemon?.name?.toUpperCase() || '...'}
          </DialogTitle>
          <DialogContent dividers>
            {pokemon && (
              <>
                <img
                  src={pokemon.sprites.other['official-artwork'].front_default}
                  alt={pokemon.name}
                  style={{ width: '100%', maxHeight: '300px', objectFit: 'contain' }}
                />
                <Typography variant="body1">ID: {pokemon.id}</Typography>
                <Typography variant="body2">Height: {pokemon.height}</Typography>
                <Typography variant="body2">Weight: {pokemon.weight}</Typography>
                <Typography variant="body2">
                  Types: {pokemon.types.map((t: any) => t.type.name).join(', ')}
                </Typography>
              </>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose} color="primary">Cerrar</Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
}
