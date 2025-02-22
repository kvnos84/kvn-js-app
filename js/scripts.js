// Pokemon Array-list
let pokemonList = [
    {
        name: "Bulbasaur",
        height: 7,
        types: ["grass", "poison"]
    },
    {
        name: "Charmeleon",
        height: 10,
        types: ["fire"]
    },
    {
        name: "Arbok",
        height: 35,
        types: ["poison"]
    }
];

console.log(pokemonList);  // Logs the pokemon list to the console for debugging

/*
   This loop goes through each Pokémon in the pokemonList array.
   It uses innerHTML to display the Pokémon's name and height
   in a div on the webpage.
*/

// Find the container element where we will display the list
let pokemonContainer = document.getElementById("pokemon-container");

// Loop through each Pokémon and add it to the page
for (let i = 0; i < pokemonList.length; i++) {
    let name = pokemonList[i].name;
    let height = pokemonList[i].height;

    // Check if the Pokémon's height is above 20 to highlight it
    let text;
    if (height > 20) {
        // If the height is above 20, add the "Wow, that's big!" message
        text = `<span class="card__front--name">${name}</span> (height: ${height}) - Wow, that's big!`;
    } else {
        // Otherwise, just display the name and height
        text = `<span class="card__front--name">${name}</span> (height: ${height})`;
    }

    // Append each Pokémon's information to the container
    pokemonContainer.innerHTML += `<div class="card__front">${text}</div>`;
}
