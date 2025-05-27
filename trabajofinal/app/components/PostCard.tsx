import Link from "next/link";

export default function PostCard({ post }: { post: any }) {
  return (
    <div className="border-2 border-red-400 p-4 rounded shadow hover:shadow-lg transition h-full flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-2 text-black">{post.title}</h2>
        <p className="text-gray-700">{post.body.slice(0, 100)}...</p>
      </div>
      <Link
        href={`/post/${post.id}`}
        className="text-blue-500 mt-4 inline-block"
      >
        Ver más
      </Link>
    </div>
  );
}



