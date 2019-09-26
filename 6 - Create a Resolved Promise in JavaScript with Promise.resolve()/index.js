//#region Setup
const API_URL = "https://starwars.egghead.training/";
const output = document.getElementById("output")
const spinner = document.getElementById("spinner")
function getFilmTitles(films)
{
  return films
    .sort((a,b) => a.episode_id - b.episode_id)
    .map(film => `${film.episode_id}. ${film.title}`).join("\n")
}
//#endregion

Promise.resolve($.getJSON(API_URL + "films"))
  .then(films => {
      output.innerText = getFilmTitles(films)
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
