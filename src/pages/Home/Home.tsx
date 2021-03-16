import React from 'react';
import { NavLink } from 'react-router-dom';

//styles
import './Home.scss';

export const Home = () => {
  return (
    <div className="Home">
      {/*<NavLink to="/products"> Product List</NavLink>*/}
      {/*<NavLink to="/product/add"> Add </NavLink>*/}
      {/*<NavLink to="/login"> Go to Login</NavLink>*/}
      <h1>Home</h1>
    </div>
  );
};
