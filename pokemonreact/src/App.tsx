import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PokemonList from './components/PokemonList';
import DigiList from './components/DigiList';
import Ini from './components/Ini';
import ContactLayout from './components/ContactLayout';
import ContactUser from './components/ContactUser';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Ini />} />
        <Route path="/gen1" element={<PokemonList range={[1, 151]} />} />
        <Route path="/gen2" element={<PokemonList range={[152, 251]} />} />
        <Route path="/gen3" element={<PokemonList range={[252, 386]} />} />
        <Route path="/digi" element={<DigiList />} />
        <Route path="/contact" element={<ContactLayout />}>
          <Route path=":nom" element={<ContactUser />} />
        </Route>
      </Routes>
      </main>
      </div>
    </Router>
  );
}


