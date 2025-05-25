import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-screen-lg mx-auto flex flex-wrap gap-4 justify-center font-medium text-sm">
      <Link to="/">Ini</Link>
      <Link to="/gen1">Gen1</Link>
      <Link to="/gen2">Gen2</Link>
      <Link to="/gen3">Gen3</Link>
      <Link to="/digi">Digi</Link>
      <Link to="/contact/ash">Contact</Link>
      </div>
    </nav>
  );
}
