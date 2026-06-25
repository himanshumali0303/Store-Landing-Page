import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white flex justify-between items-center px-10 py-4">
      <h1 className="text-2xl font-bold">Store</h1>

      <ul className="flex gap-8">
        <li>Home</li>
        <li>Products</li>
        <li>Contact</li>
      </ul>

      <button className="bg-orange-500 px-5 py-2 rounded-lg">Login</button>
    </nav>
  );
};

export default Navbar;
