'use client';

import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Modal,
} from '@mui/material';

interface Pokemon {
  id: number;
  name: string;
  sprites: { front_default: string };
  height: number;
  weight: number;
  types: { type: { name: string } }[];
}

interface Props {
  pokemon: Pokemon[];
}

export default function PokemonList({ pokemon }: Props) {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', p: 2 }}>
      {pokemon.map((pokemon) => (
        <Card key={pokemon.id} sx={{ width: 220 }}>
          <CardMedia
            component="img"
            height="140"
            image={pokemon.sprites.front_default}
            alt={pokemon.name}
            sx={{ objectFit: 'contain', backgroundColor: '#f2f2f2' }}
          />
          <CardContent>
            <Typography variant="h6" textTransform="capitalize" gutterBottom>
              #{pokemon.id} {pokemon.name}
            </Typography>
            <Button variant="contained" fullWidth onClick={() => setSelectedPokemon(pokemon)}>
              Saber más
            </Button>
          </CardContent>
        </Card>
      ))}

      <Modal
        open={!!selectedPokemon}
        onClose={() => setSelectedPokemon(null)}
        aria-labelledby="pokemon-modal-title"
      >
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
            borderRadius: 2,
            outline: 'none',
          }}
        >
          {selectedPokemon && (
            <>
              <Typography
                id="pokemon-modal-title"
                variant="h6"
                gutterBottom
                textTransform="capitalize"
              >
                #{selectedPokemon.id} {selectedPokemon.name}
              </Typography>
              <Box
                component="img"
                src={selectedPokemon.sprites.front_default}
                alt={selectedPokemon.name}
                sx={{ width: '100%', mb: 2, objectFit: 'contain' }}
              />
              <Typography>Altura: {selectedPokemon.height}</Typography>
              <Typography>Peso: {selectedPokemon.weight}</Typography>
              <Typography>
                Tipos: {selectedPokemon.types.map((t) => t.type.name).join(', ')}
              </Typography>
              <Box mt={3} textAlign="right">
                <Button variant="outlined" onClick={() => setSelectedPokemon(null)}>
                  Cerrar
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
}
