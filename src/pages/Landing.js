import React from 'react';
import AppFooter from '../components/AppFooter';
import Carousel from '../components/Carousel';
import CategoriesGallery from '../components/CategoriesGallery';

export default function Landing() {
  return (
    <React.Fragment>
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
      <AppFooter />
    </React.Fragment>
  );
}
