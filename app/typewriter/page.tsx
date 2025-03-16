'use client';
import React from 'react';
import Typewriter1Example from './_examples/Typewriter1example';
import Typewriter2Example from './_examples/Typewriter2Example';
import Typewriter3Example from './_examples/Typewriter3Example';
import Typewriter4Example from './_examples/Typewriter4Example';
import Typewriter5Example from './_examples/Typewriter5Example';
import Typewriter6Example from './_examples/Typewriter6Example';
import Typewriter7Example from './_examples/Typewriter7Example';
import Typewriter8Example from './_examples/Typewriter8Example';
import Typewriter9Example from './_examples/Typewriter9Example';
import Typewriter10Example from './_examples/Typewriter10Example';

export default function TypewriterDemo() {
  return (
    <div className="min-h-screen p-8 space-y-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12">Typewriter Effect Examples</h1>
        
        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-semibold mb-6">Basic Typewriter</h2>
            <Typewriter1Example />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Multi-Word Typewriter</h2>
            <Typewriter2Example />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Rainbow Typewriter</h2>
            <Typewriter3Example />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Terminal Typewriter</h2>
            <Typewriter4Example />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Glitch Typewriter</h2>
            <Typewriter5Example />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Matrix Typewriter</h2>
            <Typewriter6Example />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Multi-line Typewriter</h2>
            <Typewriter7Example />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Neon Typewriter</h2>
            <Typewriter8Example />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Vintage Typewriter</h2>
            <Typewriter9Example />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Liquid Typewriter</h2>
            <Typewriter10Example />
          </section>
        </div>
      </div>
    </div>
  );
}