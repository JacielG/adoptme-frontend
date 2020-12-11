import React from 'react';

import CategoryList from '../components/CategoryList';

const Categories = () => {
  const CATEGORIES = [
    {
      id: 'u1',
      name: 'Refugio 1',
      image:
        'https://images.pexels.com/photos/4587993/pexels-photo-4587993.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      pets: 1
    },
    {
      id: 'u2',
      name: 'Refugio 2',
      image:
        'https://images.pexels.com/photos/4587959/pexels-photo-4587959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      pets: 1
    },
    {
      id: 'u3',
      name: 'Refugio 3',
      image:
        'https://images.pexels.com/photos/4588065/pexels-photo-4588065.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      pets: 0
    }
  ];

  return <CategoryList items={CATEGORIES} />;
};

export default Categories;