//#region Setup
const API_URL = "https://starwars.egghead.training/";

const output = document.getElementById("output")
const spinner = document.getElementById("spinner")
//#endregion

fetch(API_URL + "mos")
  .then(response => {

    if(!response.ok) {
      return Promise.reject(new Error("Unsuccessful response"))
    }

    return response.json().then(films => {
      output.innerText = getFilmTitles(films)
      return films;
    });
  })
  .catch(error => {
    console.error('error catch called')
    console.error(error)
    output.innerText = ":(";
    return [];
  })
  .finally(() => {
    spinner.remove();
  }).then(films => {
    console.log(films)
  })

  function getFilmTitles(films)
  {
    return films
      .sort((a,b) => a.episode_id - b.episode_id)
      .map(film => `${film.episode_id}. ${film.title}`).join("\n")
  }