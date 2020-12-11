import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import PetItem from './PetItem';
import Button from '../../shared/components/FormElements/Button';
import './PetList.css';

const PetList = props => {
  if (props.items.length === 0) {
    return (
      <div className="pet-list center">
        <Card>
          <h2>No pets found. Maybe create one?</h2>
          <Button to="/pets/new">Add pet</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="pet-list">
      {props.items.map(pet => (
        <PetItem
          key={pet.id}
          id={pet.id}
          imagenUrl={pet.imagenUrl}
          nombre={pet.nombre}
          descripcion={pet.descripcion}
          refugioId={pet.refugioId}
        />
      ))}
    </ul>
  );
};

export default PetList;