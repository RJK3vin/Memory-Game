function Cards(props) {
  return (
    <>
      <div>
          {props.pokemons.map((pokemon) => {
            return <button key={pokemon}>{pokemon}</button>;
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
  const pokemons = ["pikachu", "charmander", "bulbasour"]
  shuffle(pokemons)

  return (
  <>
    <div>
      <h1 style= {{fontSize: 25}}>Pokemon Memory Game</h1>
      <p style = {{fontSize: 10}}>Get points by clicking on an image but don't click on any more than once!</p>
      <Cards pokemons={pokemons}/>
    </div>
    <div>

    </div>
  </>
  )
}