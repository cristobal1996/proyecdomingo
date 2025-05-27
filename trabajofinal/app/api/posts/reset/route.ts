import { NextResponse } from 'next/server';

export async function POST() {
  // Borra todos los posts

  // Trae los posts
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  // Selecciona 10 aleatorios
  const randomPosts = posts.sort(() => 0.5 - Math.random()).slice(0, 10);

  // Simula insertar esos 10 posts en tu base de datos

  return NextResponse.json({
    message: 'Se borraron todos los posts y se añadieron 10 nuevos posts',
    posts: randomPosts,
  });
}


