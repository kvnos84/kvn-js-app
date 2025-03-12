// IIFE to store and manage the Pokémon list
let pokemonRepository = (function () {
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

    return {
        getAll: getAll,
        add: add
    };
})();

// Find the unordered list where Pokémon will be displayed
let pokemonListElement = document.querySelector(".pokemon-list");

if (!pokemonListElement) {
    console.error("Error: .pokemon-list not found!");
} else {
    // Loop through Pokémon and add each one as a list item
    pokemonRepository.getAll().forEach((pokemon) => {
        let listItem = document.createElement("li"); // Create <li> element
        listItem.textContent = `${pokemon.name} (height: ${pokemon.height})`;

        // OPTIONAL: Add a button to each Pokémon entry
        let button = document.createElement("button");
        button.textContent = "Details";
        button.classList.add("pokemon-button"); // Apply styles
        listItem.appendChild(button); // Add button to list item

        // Append the list item to the unordered list
        pokemonListElement.appendChild(listItem);
    });
}

// Example: Adding a new Pokémon using the IIFE's add() method
pokemonRepository.add({ name: "Pikachu", height: 4, types: ["electric"] });
console.log(pokemonRepository.getAll()); // Now includes Pikachu
