// src/components/RestLabIntro.tsx
"use client";

import React from "react";
import Link from "next/link";

export const RestLabIntro: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to RestLab</h1>
      <p className="text-lg mb-6">
        RestLab is an API testing platform designed to make it easy to test,
        debug, and document your RESTful APIs. With RestLab, you can send
        requests, handle responses, and manage your API workflows efficiently.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Getting Started</h2>

      <h3 className="text-xl font-medium mt-4 mb-2">Installation</h3>
      <pre className="bg-gray-100 p-4 rounded mb-4">
        <code>
          {`npm install restlab --save
# or
yarn add restlab`}
        </code>
      </pre>

      <h3 className="text-xl font-medium mt-4 mb-2">Setup</h3>
      <pre className="bg-gray-100 p-4 rounded mb-4">
        <code>
          {`import RestLab from 'restlab';

const client = new RestLab({
  baseURL: 'https://api.example.com',
  apiKey: 'YOUR_API_KEY',
});`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold mb-2 mt-6">Example Usage</h2>

      <h3 className="text-xl font-medium mt-4 mb-2">GET Request</h3>
      <pre className="bg-gray-100 p-4 rounded mb-4">
        <code>
          {`const users = await client.get('/users');
console.log(users);`}
        </code>
      </pre>

      <h3 className="text-xl font-medium mt-4 mb-2">POST Request</h3>
      <pre className="bg-gray-100 p-4 rounded mb-4">
        <code>
          {`const newUser = await client.post('/users', {
  name: 'John Doe',
  email: 'john@example.com'
});
console.log(newUser);`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold mb-2 mt-6">Resources</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <Link
            href="https://github.com/your-repo/restlab"
            className="text-blue-600 hover:underline"
          >
            GitHub Repository
          </Link>
        </li>
        <li>
          <Link
            href="https://www.restlab.com/docs"
            className="text-blue-600 hover:underline"
          >
            Official Documentation
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/your-repo/restlab/issues"
            className="text-blue-600 hover:underline"
          >
            Support & Issues
          </Link>
        </li>
      </ul>
    </section>
  );
};
