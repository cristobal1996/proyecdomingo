'use client';

import { useEffect, useState } from 'react';
import { Typography, Card, CardContent, CardMedia, Button, Box } from '@mui/material';
import PokemonModal from '../app/components/PokemonModal';

export default function HomePage() {
  const [pokemon, setPokemon] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 1000) + 1;
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, []);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      <Typography variant="h5" paragraph>
        Explora el mundo Pokémon con nuestra web PokemonX. 
      </Typography>
      {pokemon && (
        <Box sx={{ maxWidth: 345, mx: 'auto' }}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={pokemon.sprites.other['official-artwork'].front_default}
              alt={pokemon.name}
            />
            <CardContent>
              <Typography variant="h6">{pokemon.name.toUpperCase()}</Typography>
              <Typography variant="body2">ID: {pokemon.id}</Typography>
              <Button variant="outlined" sx={{ mt: 1 }} onClick={handleOpenModal}>
                ¿Saber más?
              </Button>
            </CardContent>
          </Card>
          <PokemonModal open={modalOpen} onClose={handleCloseModal} pokemonId={pokemon.id} />
        </Box>
      )}
    </>
  );
}
