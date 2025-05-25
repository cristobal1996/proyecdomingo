export default function PokemonCard({ name, image }: { name: string, image: string }) {
  return (
    <div className="border p-4 rounded shadow-md hover:shadow-2xl transition-shadow duration-300 text-center w-80">
      <img src={image} alt={name} className="mx-auto h-24" />
      <p className="capitalize mt-2 font-semibold">{name}</p>
    </div>
  );
}

