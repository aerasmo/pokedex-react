function fetchImage ( id ) {
  // return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  id = id.toString().padStart(3, "0")
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`
}
function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function remove(arr, e) {
  let i = arr.indexOf(e);
  if (i > -1) {
    arr.splice(i, 1);
  }
  return arr
}

export { fetchImage, randomChoice, remove }