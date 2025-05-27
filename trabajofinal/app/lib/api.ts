// Tipos de datos
export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
};

export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

// Función para obtener 10 posts aleatorios
export async function fetchPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", { cache: "no-store" });
  if (!res.ok) throw new Error("Error al obtener los posts");
  const posts: Post[] = await res.json();
  return posts.sort(() => 0.5 - Math.random()).slice(0, 10);
}

// Obtener un post por ID
export async function fetchPost(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Error al obtener el post");
  return res.json();
}

// Obtener un usuario por ID
export async function fetchUser(userId: number): Promise<User> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Error al obtener el usuario");
  return res.json();
}

// Obtener comentarios de un post
export async function fetchComments(postId: string): Promise<Comment[]> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Error al obtener los comentarios");
  return res.json();
}

