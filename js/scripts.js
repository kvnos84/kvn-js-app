// IIFE to store and manage the Pokémon list
let pokemonRepository = (function () {
    let pokemonList = [
        { name: "Bulbasaur", height: 7, types: ["grass", "poison"] },
        { name: "Charmeleon", height: 10, types: ["fire"] },
        { name: "Arbok", height: 35, types: ["poison"] }
    ];

    function getAll() {
        return pokemonList;
    }

    function add(pokemon) {
        if (
            typeof pokemon === "object" &&
            "name" in pokemon &&
            "height" in pokemon &&
            "types" in pokemon
        ) {
            pokemonList.push(pokemon);
        } else {
            console.error("Invalid Pokémon object");
        }
    }

    return { getAll: getAll, add: add };
})();

// Select the unordered list once outside the forEach loop
let pokemonListElement = document.querySelector(".pokemon-list");

if (!pokemonListElement) {
    console.error("Error: .pokemon-list not found!");
} else {
    // Loop through Pokémon and add each one as a list item
    pokemonRepository.getAll().forEach((pokemon) => {
        // Create a variable inside the loop and assign it the ul element
        let ulElement = document.querySelector(".pokemon-list");  // Inside the forEach loop
        
        // Create the list item (<li>) for each Pokémon
        let listItem = document.createElement("li");
        listItem.textContent = `${pokemon.name} (height: ${pokemon.height})`;
        
        // Create a "Details" button
        let button = document.createElement("button");
        button.textContent = "Details";
        button.classList.add("pokemon-button"); // Apply styles
        listItem.appendChild(button); // Add the button to the list item

        // Append the list item to the <ul> element (this happens inside the forEach loop)
        ulElement.appendChild(listItem);
    });
}

// Example: Adding a new Pokémon
pokemonRepository.add({ name: "Pikachu", height: 4, types: ["electric"] });
console.log(pokemonRepository.getAll()); // Now includes Pikachu
