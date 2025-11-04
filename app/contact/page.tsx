'use client'

import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${form.name}! Message received.`);
    setForm({ name: '', message: '' });
  };

  return (
    <section className="max-w-md mx-auto text-center">
      <h2 className="text-2xl font-semibold mb-4 pt-8">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-2 w-full rounded"
          required
        />
        <textarea
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="border p-2 w-full rounded"
          required
        />
        <button className="bg-cyan-800 text-white px-4 py-2 rounded" type="submit">
          Send
        </button>
      </form>
    </section>
  );
}

