import React from 'react';
import ItemCategory from './ItemCategory';
import vehicle from '../assets/images/bicycle.jpg';
import furniture from '../assets/images/chair.jpg';
import computer from '../assets/images/computer.jpg';
import electronic from '../assets/images/electronic.jpg';
import smartphone from '../assets/images/smartphone.jpg';
import tools from '../assets/images/tools.jpg';

export default function CategoriesGallery() {
  const categories = [
    {
      title: 'Vehicles',
      image: vehicle,
    },
    {
      title: 'Furnitures',
      image: furniture,
    },
    {
      title: 'Computers',
      image: computer,
    },
    {
      title: 'Electronics',
      image: electronic,
    },
    {
      title: 'Smartphones',
      image: smartphone,
    },
    {
      title: 'Tools',
      image: tools,
    },
  ];

  return (
    <section className="bg-yellow-300 box-border mt-10 p-6">
      <h2 className="text-3xl font-semibold">Browse Items by Category</h2>
      <div className="grid grid-cols-3 mt-6 row-gap-8">
        {categories.map((category, index) => {
          return (
            <ItemCategory
              image={category.image}
              title={category.title}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
}
