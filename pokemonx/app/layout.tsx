import './globals.css';
import Navbar from '../app/components/Navbar';

const translations = {
  es: { home: 'Inicio', gen1: 'Generación 1', gen2: 'Generación 2', gen3: 'Generación 3', title: 'PokemonX' },
  en: { home: 'Home', gen1: 'Gen 1', gen2: 'Gen 2', gen3: 'Gen 3', title: 'PokemonX' },
  fr: { home: 'Accueil', gen1: 'Génération 1', gen2: 'Génération 2', gen3: 'Génération 3', title: 'PokemonX' },
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const lang = params.lang;
  const t = translations[lang] || translations.es;

  return (
    <html lang={lang}>
      <body>
        <Navbar translations={t} lang={lang} />
        <main style={{ padding: '1rem' }}>
          <h1>{t.title}</h1>
          {children}
        </main>
      </body>
    </html>
  );
}
