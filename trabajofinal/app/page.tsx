'use client';

import { useEffect, useState } from 'react';
import { Post, fetchPosts } from '@/app/lib/api';
import PostCard from '@/app/components/PostCard'; // Ajusta la ruta si es necesario

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const loadPosts = async () => {
    const data = await fetchPosts();
    setPosts(data);
  };

  const borrarTodos = async () => {
    setLoading(true);
    setMessage('');
    try {
      const res = await fetch('/api/posts/deleteAll', { method: 'POST' });
      const json = await res.json();
      setMessage(json.message);
      setPosts([]);
    } catch {
      setMessage('Error al borrar posts');
    }
    setLoading(false);
  };

  const añadirUno = async () => {
    setLoading(true);
    setMessage('');
    try {
      const res = await fetch('/api/posts/addOne', { method: 'POST' });
      const json = await res.json();
      setMessage(json.message);
      setPosts((prev) => [...prev, json.post]);
    } catch {
      setMessage('Error al añadir post');
    }
    setLoading(false);
  };

  const resetear = async () => {
    setLoading(true);
    setMessage('');
    try {
      const res = await fetch('/api/posts/reset', { method: 'POST' });
      const json = await res.json();
      setMessage(json.message);
      setPosts(json.posts);
    } catch {
      setMessage('Error al resetear posts');
    }
    setLoading(false);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <main className="p-6">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-red-400 drop-shadow-md mb-6">
          Trabajos Post
        </h1>
        <nav className="flex justify-center gap-6">
          <button
            onClick={borrarTodos}
            disabled={loading}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow transition disabled:opacity-50"
          >
            🗑️ Borrar todos
          </button>
          <button
            onClick={añadirUno}
            disabled={loading}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow transition disabled:opacity-50"
          >
            ➕ Añadir 1 post
          </button>
          <button
            onClick={resetear}
            disabled={loading}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow transition disabled:opacity-50"
          >
            🔄 Resetear posts
          </button>
        </nav>
      </header>

      {message && <p className="mb-4 text-green-500 text-center">{message}</p>}

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}

















