import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CategoryCard = ({ title, imageSrc }) => (
  <div className="group relative rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow">
    <div className="aspect-square relative">
      <img 
        src={imageSrc} 
        alt={title}
        className="object-cover w-full h-full"
      />
    </div>
    <div className="p-4 flex items-center justify-between">
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
    </div>
  </div>
);

const ProductCategories = () => {
  const categories = [
    {
      title: 'Air Conditioner',
      imageSrc: '/api/placeholder/400/400'
    },
    {
      title: 'Air Cooler',
      imageSrc: '/api/placeholder/400/400'
    },
    {
      title: 'Chillers',
      imageSrc: '/api/placeholder/400/400'
    },
    {
      title: 'Ice Makers',
      imageSrc: '/api/placeholder/400/400'
    },
    {
      title: 'Appliances',
      imageSrc: '/api/placeholder/400/400'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">Explore Our Top Categories</h2>
        <p className="text-gray-600">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is simply</p>
        
        <div className="flex flex-col mt-8">
  <p>Our product</p>
  <div className="flex flex-wrap gap-6">
    {categories.map((category, index) => (
      <div key={index} className="w-full sm:w-1/2 lg:w-1/2">
        <CategoryCard
          title={category.title}
          imageSrc={category.imageSrc}
        />
      </div>
    ))}
  </div>
</div>

      </div>
    </div>
  );
};

export default ProductCategories;