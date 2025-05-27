import { NextResponse } from 'next/server';

export async function POST() {
  // Trae todos los posts
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  // Selecciona uno aleatorio
  const randomPost = posts[Math.floor(Math.random() * posts.length)];

  // Simula añadir ese post a tu base de datos

  return NextResponse.json({
    message: 'Se añadió 1 post',
    post: randomPost,
  });
}
