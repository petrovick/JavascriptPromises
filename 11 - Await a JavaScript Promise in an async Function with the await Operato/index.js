//#region Setup
const API_URL = "https://starwars.egghead.training/";
const output = document.getElementById("output")
const spinner = document.getElementById("spinner")
async function queryAPI(endpoint) {
  const response = await fetch(API_URL + endpoint);
  if(response.ok) {
    return response.json()
  }
  else throw Error("Unsuccessful response");
}
//#endregion

async function main() {
  try
  {
    const [films, planets, species] = 
      await Promise.all([
        queryAPI('films'),
        queryAPI('planets'),
        queryAPI('species')
      ]);
    
    output.innerHTML = 
    `${films.length} films.` +
    `${planets.length} planets.` +
    `${species.length} species.`;

  }
  catch(error) {
    console.warn(error);
    output.innerHTML = ':(';
  }
  finally 
  {
    spinner.remove()

  }
}

main()

