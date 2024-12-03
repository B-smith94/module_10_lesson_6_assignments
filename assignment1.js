/* Assignment 1
Task 1: Obtaining API Key and Configuration
    -obtain an API key from the Marvel Comics API website
    -investigate and understand necessary configurations required to authenticate requests to API
Task 2: Fetching Characters Using Fetch API
    -asyncrhonous function
    -fetch API and Promises 
    -fetch characters from the API endpoint (http(s)://gateway.marvel.com/)
    -log to console
Task 3: Updating User Interface Dynamically
    -write a function to dynamically update the user interface with the fetched characters' info
    -utilize promises and fetch API to ensure the UI updates only after characters are successfully fetched
*/
// Task 1
async function fetchCharacterData(publicKey, characterName, ts, hash) {
    const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${characterName}&ts=${ts}&apikey=${publicKey}&hash=${hash}`);
    const characterData = await response.json();
    return characterData;
}

document.addEventListener("DOMContentLoaded", async () => {
    const characterData = await fetchCharacterData('your public key', 'Hulk', '123', 'your md5 hash');
    const characterInfoElement = document.getElementById('character-info');

    characterInfoElement.innerHTML = `
    <h2>${characterData.name}</h2>
    <img src="${characterData.thumbnail}" alt="${characterData.name}">
    <h3>Description:</h3>
    <ul>
        ${characterData.description}
    </ul>
    `;
    console.log(characterData);
});
