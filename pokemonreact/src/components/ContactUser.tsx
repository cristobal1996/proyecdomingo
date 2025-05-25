import { useParams } from 'react-router-dom';

export default function ContactUser() {
  const { nom } = useParams();
  const avatarUrl = `https://robohash.org/${nom}`;

  return (
    <div>
      <img src={avatarUrl} alt="avatar" className="mx-auto h-24 rounded-full" />
      <p className="mt-2 font-semibold">Usu: {nom}</p>
    </div>
  );
}
