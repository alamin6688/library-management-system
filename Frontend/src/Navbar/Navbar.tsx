import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";

const Navbar: React.FC = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Books", path: "/books" },
    { name: "Add Book", path: "/create-book" },
    { name: "Borrow Summary", path: "/borrow-summary" },
  ];

  return (
    <nav className="flex items-center justify-between w-full relative rounded-full px-4 py-2 bg-white shadow-md">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img
          src="https://i.postimg.cc/SsY9ZP8r/icons8-book-100.png"
          alt="logo"
          className="w-[65px]"
        />
      </Link>

      {/* Desktop nav links */}
      <ul className="items-center gap-6 text-gray-700 md:flex hidden">
        {navLinks.map((link) => (
          <li key={link.path} className="relative">
            <Link
              to={link.path}
              className="before:w-0 hover:before:w-full before:bg-blue-500 before:h-[2px] before:absolute before:rounded-full before:bottom-[-2px] before:left-0 before:transition-all before:duration-300 transition-all duration-300 cursor-pointer capitalize"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Action buttons */}
      <div className="flex items-center gap-2">
        <button className="py-2 px-4 rounded-full hover:text-blue-500 hidden sm:flex">
          Sign in
        </button>
        <button className="py-2 px-4 rounded-full bg-blue-500 text-white hover:bg-blue-400 hidden sm:flex">
          Sign up
        </button>

        {/* Mobile menu */}
        <CiMenuFries
          className="text-2xl cursor-pointer md:hidden"
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        />
      </div>

      {/* Mobile sidebar */}
      <aside
        className={`${
          mobileSidebarOpen
            ? "translate-x-0 opacity-100 z-20"
            : "translate-x-full opacity-0 z-[-1]"
        } md:hidden bg-white p-4 absolute top-[65px] right-0 w-full sm:w-[50%] rounded-md transition-all duration-300 shadow-lg`}
      >
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 outline-none focus:border-blue-500"
          />
          <IoIosSearch className="absolute top-2 left-3 text-gray-500 text-xl" />
        </div>

        <ul className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="before:w-0 hover:before:w-full before:bg-blue-500 before:h-[2px] before:absolute relative before:rounded-full before:bottom-[-2px] transition-all duration-300 cursor-pointer capitalize"
                onClick={() => setMobileSidebarOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </nav>
  );
};

export default Navbar;
