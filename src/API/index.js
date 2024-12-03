export async function fetchAllPlayers() {
  try {
    // your fetch logic will go here
    const response = await fetch(
      "https://fsa-puppy-bowl.herokuapp.com/api/2408-FTB-ET-WEB-AM/players"
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchSinglePlayer(id) {
  try {
    // your fetch logic will go here
    const response = await fetch(
      `https://fsa-puppy-bowl.herokuapp.com/api/2408-FTB-ET-WEB-AM/players/${id}`
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
