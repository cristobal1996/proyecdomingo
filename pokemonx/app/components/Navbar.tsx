'use client';
import Link from 'next/link';

interface Props {
  translations: Record<string, string>;
  lang: string;
}

export default function Navbar({ translations, lang }: Props) {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#eee' }}>
      <Link href={`/${lang}`} style={{ marginRight: '1rem' }}>{translations.home}</Link>
      <Link href={`/${lang}/gen1`} style={{ marginRight: '1rem' }}>{translations.gen1}</Link>
      <Link href={`/${lang}/gen2`} style={{ marginRight: '1rem' }}>{translations.gen2}</Link>
      <Link href={`/${lang}/gen3`}>{translations.gen3}</Link>
    </nav>
  );
}


