// app/[lang]/page.tsx
'use client';

import { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Modal,
  CircularProgress,
} from '@mui/material';

interface Pokemon {
  id: number;
  name: string;
  sprites: { front_default: string };
  height: number;
  weight: number;
  types: { type: { name: string } }[];
}

export default function HomePage() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Función para obtener un Pokémon aleatorio entre 1 y 1000
  const fetchRandomPokemon = async () => {
    setLoading(true);
    const id = Math.floor(Math.random() * 1000) + 1;
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (!res.ok) throw new Error('Pokémon no encontrado');
      const data = await res.json();
      setPokemon(data);
    } catch (error) {
      console.error(error);
      setPokemon(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomPokemon();
  }, []);

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Bienvenido a PokemonX
      </Typography>
      <Typography variant="body1" paragraph>
        Esta web muestra Pokémon en cards con detalles en ventanas modales, todo en Next.js y Material UI.
      </Typography>

      {loading && <CircularProgress />}

      {pokemon && (
        <>
          <Card sx={{ maxWidth: 345, mb: 2 }}>
            <CardMedia
              component="img"
              height="140"
              image={pokemon.sprites.front_default}
              alt={pokemon.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" textTransform="capitalize">
                #{pokemon.id} {pokemon.name}
              </Typography>
              <Button variant="contained" onClick={() => setModalOpen(true)}>
                Saber más
              </Button>
            </CardContent>
          </Card>

          <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
                maxWidth: 400,
                borderRadius: 1,
                outline: 'none',
              }}
            >
              <Typography variant="h6" gutterBottom textTransform="capitalize">
                #{pokemon.id} {pokemon.name}
              </Typography>
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                style={{ width: '100%', marginBottom: 16 }}
              />
              <Typography>Altura: {pokemon.height}</Typography>
              <Typography>Peso: {pokemon.weight}</Typography>
              <Typography>
                Tipos: {pokemon.types.map((t) => t.type.name).join(', ')}
              </Typography>
              <Box textAlign="right" mt={2}>
                <Button variant="outlined" onClick={() => setModalOpen(false)}>
                  Cerrar
                </Button>
              </Box>
            </Box>
          </Modal>
        </>
      )}
    </Box>
  );
}
