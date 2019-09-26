//#region Setup
const API_URL = "https://starwars.egghead.training/";
const output = document.getElementById("output")
const spinner = document.getElementById("spinner")
/**
 * 
 * @param using fetch browser
function queryAPI(endpoint) {
  return fetch(API_URL + endpoint).then(response => {
    return response.ok
      ? response.json()
      : Promise.reject(Error("Unsuccessful response"));
  })
}
*/
/*USING jQuery*/
function queryAPI(endpoint) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: API_URL + endpoint,
      method: 'GET',
      success: function(data) {
        resolve(data)
      },
      error: function(error) {
        reject(error)
      },
    })
  });
}

//#endregion





/**
 * Takes too long to render, waste TIME
queryAPI("films")
  .then(results => {
    queryAPI("planets").then(resultss => {
      queryAPI("species")
    })
  })
*/

/**More powerful, faster then 'synchronous call' */
Promise.all([
  queryAPI("films"),
  queryAPI("planets"),
  queryAPI("species"),
]).then(results => {
  const films = results[0];
  const planets = results[1];
  const species = results[2];

  output.innerText = `${films.length} films, ` +
  `${planets.length} planets.` +
  `${species.length} species.`

        
})
.catch(error => {
  console.warn(error);
  output.innerText = ":(";
})
.finally(() => {
  spinner.remove()
});

