import React from 'react';

import CategoryItem from './CategoryItem';
import Card from '../../shared/components/UIElements/Card';
import './CategoryList.css';

const CategoryList = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No categories found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="category-list">
      {props.items.map(category => (
        <CategoryItem
          key={category.id}
          id={category.id}
          image={category.image}
          name={category.name}
          petCount={category.pets}
          email={category.email}
          password={category.password}
        />
      ))}
    </ul>
  );
};

export default CategoryList;