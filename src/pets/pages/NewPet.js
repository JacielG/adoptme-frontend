import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { restClient } from '../../services/restClient';
import './PetForm.css';

const NewPet = ({ fetchPets }) => {
  const [formState, inputHandler] = useForm(
    {
      nombre: {
        value: '',
        isValid: false
      },
      descripcion: {
        value: '',
        isValid: false
      },
      imagenUrl: {
        value: '',
        isValid: false
      },
      refugioId: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const petSubmitHandler = async event => {
    event.preventDefault();
    let pet = formState.inputs; // TODO:send this to the backend
    console.log(pet);

    const response = await restClient.httpPost('/mascota', pet);

    if (typeof response === 'string') {
      console.log(response);
    }

    if (typeof response == "object") {
      console.log('Saved: ', response);

      // fetchPets();
    }
  };

  return (
    <form className="pet-form" onSubmit={petSubmitHandler}>
      <Input
        id="nombre"
        element="input"
        type="text"
        label="Name"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid Name."
        onInput={inputHandler}
      />
      <Input
        id="descripcion"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)."
        onInput={inputHandler}
      />
      <Input
        id="imagenUrl"
        element="input"
        label="ImageUrl"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid image."
        onInput={inputHandler}
      />
      <Input
        id="refugioId"
        element="input"
        label="CreatorId"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid creator."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PET
      </Button>
    </form>
  );
};

export default NewPet;