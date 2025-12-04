'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600">MyLanding</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center text-gray-700 font-medium">
          <a href="#home" className="hover:text-blue-600 cursor-pointer">Home</a>
          <a href="#features" className="hover:text-blue-600 cursor-pointer">Features</a>
          <a href="#contact" className="hover:text-blue-600 cursor-pointer">Contact</a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded hover:bg-gray-100 transition"
        >
          {open ? (
            <span className="text-2xl"></span>
          ) : (
            <span className="text-2xl"></span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4">
          <nav className="flex flex-col gap-3 text-gray-700 font-medium">
            <a href="#home" className="py-2 hover:text-blue-600">Home</a>
            <a href="#features" className="py-2 hover:text-blue-600">Features</a>
            <a href="#contact" className="py-2 hover:text-blue-600">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}
