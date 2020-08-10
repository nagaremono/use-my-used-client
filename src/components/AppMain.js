import React from 'react';
import Carousel from './Carousel';
import CategoriesGallery from './CategoriesGallery';

export default function AppMain() {
  return (
    <main className="w-4/5 mx-auto">
      <section className="mt-8 w-full bg-blue-200 p-6">
        <h2 className="text-4xl font-welcome">Welcome to Use My Used</h2>
        <p className="text-xl">
          A place to look for and advertise your used goods!
        </p>
      </section>
      <Carousel />
      <CategoriesGallery />
    </main>
  );
}
