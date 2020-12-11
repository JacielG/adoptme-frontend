import React, { useState, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Categories from './categories/pages/Categories';
import NewPet from './pets/pages/NewPet';
import CategoryPets from './pets/pages/CategoryPets';
import UpdatePet from './pets/pages/UpdatePet';
import Auth from './categories/pages/Auth';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import { AuthContext } from './shared/context/auth-context';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Categories />
        </Route>
        <Route path="/:categoryId/pets" exact>
          <CategoryPets />
        </Route>
        <Route path="/pets/new" exact>
          <NewPet />
        </Route>
        <Route path="/pets/:petId">
          <UpdatePet />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Categories />
        </Route>
        <Route path="/:categoryId/pets" exact>
          <CategoryPets />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <MainNavigation />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
