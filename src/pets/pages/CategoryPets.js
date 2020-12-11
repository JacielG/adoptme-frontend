import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { restClient } from '../../services/restClient';
import PetList from '../components/PetList';

const DUMMY_PETS = [
  {
    id: 'p1',
    name: 'Spot',
    description: 'A loving 3 year old dog.',
    imageUrl: 'https://images.pexels.com/photos/97082/weimaraner-puppy-dog-snout-97082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    creator: 'u1'
  },
  {
    id: 'p2',
    name: 'Chispita',
    description: 'Very cute 1 year old cat.',
    imageUrl: 'https://images.pexels.com/photos/3616232/pexels-photo-3616232.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    creator: 'u2'
  }
];

const CategoryPets = () => {
  const [pet, setPet] = useState(undefined);

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    const response = await restClient.httpGet('/mascota');

    if (!response.length) {
      return;
    }

    setPet(response.map(item => ({ ...item })));
    console.log(setPet);
  }

  const categoryId = useParams().categoryId;
  const loadedPets = DUMMY_PETS.filter(pet => pet.creator === categoryId);
  return <PetList items={loadedPets} />;
};

export default CategoryPets;