// app/[lang]/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Navbar from '../app/components/Navbar';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'PokemonX',
  description: 'A Pokémon app showing cards and details with i18n and dark/light theme',
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const lang = params.lang || 'es';

  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar lang={lang} mode="dark" />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
