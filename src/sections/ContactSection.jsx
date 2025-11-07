// src/components/sections/ContactSection.jsx
import React, { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Messaggio inviato! (Demo)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
          Contattami
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Il tuo nome"
            className="w-full p-3 border rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="La tua email"
            className="w-full p-3 border rounded-lg"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Scrivi un messaggio..."
            className="w-full p-3 border rounded-lg h-32"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Invia
          </button>
        </form>
      </div>
    </section>
  );
}
