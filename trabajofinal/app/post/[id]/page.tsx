import { fetchPost, fetchUser, fetchComments, Post, User, Comment } from "@/app/lib/api";

type Props = {
  params: {
    id: string;
  };
};

export default async function PostDetail({ params: { id } }: Props) {
  const post: Post = await fetchPost(id);
  const user: User = await fetchUser(post.userId);
  const comments: Comment[] = await fetchComments(id);

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-2 text-black">{post.title}</h1>
      <p className="mb-6 text-gray-800">{post.body}</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-1 text-black">Autor</h2>
        <p className="text-gray-800">
          {user.name} (
          <a href={`mailto:${user.email}`} className="text-blue-600 underline">
            {user.email}
          </a>
          )
        </p>
        <p className="text-sm text-gray-500">{user.company.name}</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2 text-black">Comentarios</h2>
        {comments.length === 0 ? (
          <p className="text-gray-800">No hay comentarios.</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="border-t py-4">
              <p className="font-semibold text-gray-900">{comment.name}</p>
              <p className="text-sm text-gray-700">{comment.email}</p>
              <p className="mt-1 text-gray-800">{comment.body}</p>
            </div>
          ))
        )}
      </section>
    </main>
  );
}



