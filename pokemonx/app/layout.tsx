import './globals.css';
import { ThemeProvider, createTheme, CssBaseline, Container, Typography } from '@mui/material';
import Navbar from '../app/components/Navbar';
import translations from '../app/lib/translations';
import { ReactNode } from 'react';

export const metadata = {
  title: 'PokemonX',
  description: 'Explora el mundo Pokémon por generaciones',
};

export default function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string };
}) {
  const lang = params.lang || 'es';
  const t = translations[lang];
  const prefersDark = true;

  const theme = createTheme({
    palette: {
      mode: prefersDark ? 'dark' : 'light',
    },
    typography: {
      fontFamily: 'Roboto, sans-serif',
    },
  });

  return (
    <html lang={lang}>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar lang={lang} mode={theme.palette.mode} />
          <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h3" gutterBottom align="center">
              {t.title}
            </Typography>
            {children}
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
