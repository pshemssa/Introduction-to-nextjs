import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function Home() {
  return (
   <section className="text-center">
      <Image
        src="/profile.jpg"
        alt=""
        width={120}
        height={120}
        className="rounded-full mx-auto"
      />
      <h2 className="text-3xl font-semibold mt-4 pt-5">Hello, I’m Shemsa </h2>
      <p className="mt-2 text-gray-600">
        I’m a full-stack developer passionate about building modern web apps.
      </p>

      <div className="mt-6 space-x-4">
        <Link href="/projects" className="bg-cyan-900 text-white px-4 py-2 rounded hover:bg-blue-200">
          View My Work
        </Link>
        <Link href="/contact" className="border px-4 py-2 rounded hover:bg-cyan-500">
          Contact Me
        </Link>
      </div>
    </section>
  );
}
