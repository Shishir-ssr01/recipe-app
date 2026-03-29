import React from 'react';
import { NavLink } from 'react-router-dom';

const Mealcards = ({ detail }) => {
  if (!detail) {
    return <p>No meals found</p>;
  }

  return (
    <div className='meals'>
      {detail.map((curItem) => (
        <div key={curItem.idMeal} className='mealImg'>
          <img src={curItem.strMealThumb} alt={curItem.strMeal} />
          <p>{curItem.strMeal}</p>
          <NavLink to={`/${curItem.idMeal}`}><button>View Recipe</button></NavLink>
          
        </div>
      ))}
    </div>
  );
};

export default Mealcards;
