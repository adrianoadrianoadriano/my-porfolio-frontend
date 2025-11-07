// src/components/Header.jsx
import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow mb-8">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">My Portfolio</h1>
        <nav className="space-x-4">
          <a href="/" className="hover:text-blue-500 transition">Home</a>
          <a href="/about" className="hover:text-blue-500 transition">About</a>
          <a href="/projects" className="hover:text-blue-500 transition">Projects</a>
          <a href="/contact" className="hover:text-blue-500 transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}
