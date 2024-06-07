import { useState } from "react";

function Cards(props) {
  return (
    <>
      <div>
          {props.pokemons.map((pokemon) => {
            return <button key={pokemon.name} onClick={() => props.onClick(pokemon)}>{pokemon.name}</button>;
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
    {name: "pikachu"},
    {name: "bulbasour"},
    {name: "charmander"}
   ])

  const [score, setScore] = useState({score: 0, bestscore: 0})

  const [isclicked, setIsClicked] = useState(false)

  const handleClick = () => {
    const shuffledPokemons = shuffle([...pokemons])
    setPokemon(shuffledPokemons)
    setIsClicked(true)
    setScore((prevScore) => ({ ...prevScore, score: prevScore.score + 1}))
    if (isclicked === true)
      console.log("you lose")
  }

  return (
  <>
    <div>
      <h1 style= {{fontSize: 25}}>Pokemon Memory Game</h1>
      <p style = {{fontSize: 10}}>Get points by clicking on an image but don't click on any more than once!</p>
      <p>{score.score}</p>
      <p>{score.bestscore}</p>
      <Cards pokemons={pokemons} onClick={handleClick}/>
    </div>
  </>
  )
}

