import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">Unizoy Job Board</h1>

      <div className="space-x-6">
        <Link className="hover:underline" to="/">
          Jobs
        </Link>

        <Link className="hover:underline" to="/admin">
          Admin
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
