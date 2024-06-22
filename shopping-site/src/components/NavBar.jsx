import React from 'react';
import { FaUserCircle, FaShoppingCart, FaWallet, FaPhone, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const brandInitial = 'S';

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-200 shadow-md py-4 px-6 flex items-center justify-between z-50">
        <div className='flex flex-row items-center cursor-pointer '>
        <div className="text-2xl text-gray-600  border-black">
            e
        </div>
      <div className="text-xl font-bold">ShopEZ</div>
        </div>
      <div className="flex items-center mx-4 gap-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-gray-100 border border-gray-300 rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FaSearch className="text-gray-600 mr-2" />
      </div>
      <div className="flex items-center space-x-4 relative">
        
        <FaWallet className="text-2xl text-gray-600 cursor-pointer" />
        <FaShoppingCart className="text-2xl text-gray-600 cursor-pointer" />
        <FaPhone className="text-2xl text-gray-600 cursor-pointer" />
        <FaUserCircle className="text-2xl text-gray-600 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
