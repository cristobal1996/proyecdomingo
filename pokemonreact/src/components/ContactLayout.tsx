import { Outlet } from 'react-router-dom';

export default function ContactLayout() {
  return (
    <div className="p-4 text-center">
      <h2 className="text-xl font-bold mb-2">Paging de Contact</h2>
      <Outlet />
    </div>
  );
}
