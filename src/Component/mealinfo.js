import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Mealinfo = () => {
  const { mealid } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const getInfo = async () => {
      const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
      const jsonData = await get.json();
      console.log(jsonData.meals[0]);
      setInfo(jsonData.meals[0]);
    };

    if (mealid) {
      getInfo();
    }
  }, [mealid]);

  // Extract ingredients + measures dynamically
  const getIngredients = () => {
    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = info[`strIngredient${i}`];
      const measure = info[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ingredients.push(`${ingredient} - ${measure || ""}`);
      }
    }
    return ingredients;
  };

  return (
    <div>
      {
        !info ? "Data Not Found" :
        <div className='mealInfo'>
          <img src={info.strMealThumb} alt={info.strMeal} />
          <div className='info'>
            <h1>{info.strMeal}</h1>
            <h3>Category: {info.strCategory}</h3>
            <h3>Area: {info.strArea}</h3>

            <h2>Ingredients</h2>
            <ul>
              {getIngredients().map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3>Instructions</h3>
            <p>{info.strInstructions}</p>

            
          </div>
        </div>
      }
    </div>
  );
};

export default Mealinfo;
