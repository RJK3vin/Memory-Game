import { useState } from "react";

function Cards(props) {
  return (
    <>
      <div>
          {props.pokemons.map((pokemon) => {
            return <button key={pokemon.name} onClick={() => props.onClick(pokemon)}>{pokemon.name}<img src = {pokemon.url} width={50} height={50}/></button>;
          })}
      </div>
    </>
  );
}

  const shuffle = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
    }
      return array;
  }

export default function app() {
  const [pokemons, setPokemon] = useState([
    {name: "pikachu", click: false, url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/site_search/025.png"},
    {name: "bulbasaur", click: false, url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/site_search/001.png"},
    {name: "charmander", click: false, url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/site_search/004.png"},
    {name: "lucario", click: false, url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/site_search/448.png"},
    {name: "squirtle", click: false, url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/site_search/007.png"},
    {name: "snivy", click: false, url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/site_search/495.png"},
    {name: "rayquaza", click: false, url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/site_search/384.png"},
    {name: "mewtwo", click: false, url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/site_search/150.png"},
    {name: "zekrom", click: false, url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/site_search/644.png"},
    {name: "groudon", click: false, url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/site_search/383.png"},
   ])

  const [score, setScore] = useState({score: 0, bestscore: 0})

  const handleClick = (clickedPokemon) => {
    if (clickedPokemon.click === true) {
      if (score.score > score.bestscore) {
        setScore((prevBestScore) => ({ ...prevBestScore, score: prevBestScore.bestscore = score.score})) 
        setScore((prevScore) => ({ ...prevScore, score: prevScore.score = 0})) 
      }
      const poketrue = pokemons.map((pokemon) => { return {...pokemon, click: false }});
      setPokemon([...poketrue])
      setScore((prevScore) => ({ ...prevScore, score: prevScore.score = 0})) 
  
    } else {
      const poketrue = pokemons.map((pokemon) => pokemon.name === clickedPokemon.name ? { ...pokemon, click: true } : pokemon );
      const shuffledPokemons = shuffle([...poketrue])
      setPokemon(shuffledPokemons)
      setScore((prevScore) => ({ ...prevScore, score: prevScore.score + 1}))
    }
  }

  return (
  <>
    <div>
      <h1 style= {{fontSize: 25}}>Pokemon Memory Game</h1>
      <p style = {{fontSize: 10}}>Get points by clicking on an image but don't click on any more than once!</p>
      <p>Score: {score.score}</p>
      <p>Best score: {score.bestscore}</p>
      <Cards pokemons={pokemons} onClick={handleClick}/>
    </div>
  </>
  )
}