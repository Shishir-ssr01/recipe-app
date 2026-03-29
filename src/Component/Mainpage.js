import React, { useState } from 'react';
import Mealcards from './Mealcards';

const Mainpage = () => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");
  const [msg, setmsg] = useState("");

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  const myFun = async () => {
    if (search === ""){
      setmsg("Please enter something");
    }else{
      const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    const jsonData = await get.json();
    console.log(jsonData.meals);
    setData(jsonData.meals);
    }
    
  };

  console.log(data);

  return (
    <>
      <h1 className='head'>Recipe App</h1>
    <div className='container'>
      <div className='searchBar'>
        <input
          type='text'
          placeholder='Search Recipes'
          onChange={handleInput}
        />
        <button onClick={myFun}>Search</button>
      </div>
      <h3 className='error'>{msg}</h3>
      <div>
        <Mealcards detail={data}/>
      </div>
    </div>
    </>
  );
};

export default Mainpage;
