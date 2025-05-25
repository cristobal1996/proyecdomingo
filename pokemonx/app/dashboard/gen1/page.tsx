'use client';

import { useEffect, useState } from 'react';
import { Grid, Container, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import PokemonModal from '../../components/PokemonModal';
import { useParams } from 'next/navigation';

export default function Gen1Page() {
  const [pokemonList, setPokemonList] = useState<any[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { lang } = useParams();

  useEffect(() => {
    const fetchPokemon = async () => {
      const list = [];
      for (let i = 1; i <= 10; i++) {
        const id = Math.floor(Math.random() * 151) + 1; // Gen 1
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        list.push(data);
      }
      setPokemonList(list);
    };

    fetchPokemon();
  }, []);

  const handleOpenModal = (id: number) => {
    setSelectedId(id);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedId(null);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
        Pokémon de Generación 1
      </Typography>
      <Grid container spacing={3}>
        {pokemonList.map((pokemon) => (
          <Grid item xs={12} sm={6} md={4} key={pokemon.id}>
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
                <Button variant="outlined" sx={{ mt: 1 }} onClick={() => handleOpenModal(pokemon.id)}>
                  ¿Saber más?
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <PokemonModal open={modalOpen} onClose={handleCloseModal} pokemonId={selectedId} />
    </Container>
  );
}
