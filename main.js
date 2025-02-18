//Example fetch using pokemonapi.co
document.querySelector('#go').addEventListener('click', getFetch)


function getFetch(){
  const characterName = document.querySelector('input').value
  console.log(characterName)
  const url = `https://rickandmortyapi.com/api/character/?name=${characterName}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data) // console logs data
        let name = data.results[0].name
        let img = data.results[0].image
        let gender = data.results[0].gender
        let species = data.results[0].species
        let origin = data.results[0].origin.name
        let location = data.results[0].location.name

        document.querySelector('img').src = img
        document.querySelector('#text_name').innerText = name
        document.querySelector('#text_gender').innerText = gender
        document.querySelector('#text_species').innerText = species
        document.querySelector('#text_origin').innerText = origin
        document.querySelector('#text_location').innerText = location

      }
    )

}

document.querySelector('#random').addEventListener('click',getRandom)
// Currently not working properly
function getRandom() {
    let number = Math.floor(Math.random() * 394) + 1;
    console.log(number);
	  const randomUrl = "https://rickandmortyapi.com/api/character/" + number;
	
    fetch(randomUrl)
    .then(res => res.json()) // parse as JSON
    .then(data => {
      console.log(data)
      let name = data.name
      let img = data.image
      let gender = data.gender
      let species = data.species
      let origin = data.origin.name
      let location = data.location.name


      document.querySelector('img').src = img
      document.querySelector('#text_name').innerText = name
      document.querySelector('#text_gender').innerText = gender
      document.querySelector('#text_species').innerText = species
      document.querySelector('#text_origin').innerText = origin
      document.querySelector('#text_location').innerText = location

    })



//   clear.click(function() {
//     resetData();
//   });
}