import React,{useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

function App() {

  const APP_ID='82841968';
  const APP_KEY='7794f3dc2d70cff758355fa60bb59ff8';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("food");

 useEffect( () =>{
  getRecipes();
 },[query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits)
  } 

  const updateSearch = e =>{
    setSearch(e.target.value);
    console.log(search);
    //@@TODO
    //setSearch(""); Need to clear search bar once search button clicked
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch} >
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe =>(
          <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label} 
          calorie={recipe.recipe.calories} 
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          />
      ))}
      </div>
    </div>
  );
}

export default App;
    