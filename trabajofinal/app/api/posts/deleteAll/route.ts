import { NextResponse } from 'next/server';

export async function POST() {
  // Simula borrar todos los posts en tu base de datos
  // Aquí pondrías tu lógica real para borrar posts.

  return NextResponse.json({ message: 'Todos los posts borrados' });
}
