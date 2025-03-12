// IIFE to store and manage the Pokémon list
let pokemonRepository = (function () {
    // Private array to store Pokémon data
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

    // Function to return all Pokémon
    function getAll() {
        return pokemonList;
    }

    // Function to add a new Pokémon
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

    // Expose public methods while keeping pokemonList private
    return {
        getAll: getAll,
        add: add
    };
})();

// Find the container element where Pokémon will be displayed
let pokemonContainer = document.getElementById("pokemon-container");

// Use forEach to loop through the Pokémon list and display them
pokemonRepository.getAll().forEach((pokemon) => {
    let text;

    // Check if the Pokémon's height is above 20 to highlight it
    if (pokemon.height > 20) {
        text = `<span class="card__front--name">${pokemon.name}</span> (height: ${pokemon.height}) - Wow, that's big!`;
    } else {
        text = `<span class="card__front--name">${pokemon.name}</span> (height: ${pokemon.height})`;
    }

    // Append each Pokémon's information to the container
    pokemonContainer.innerHTML += `<div class="card__front">${text}</div>`;
});

// Example: Adding a new Pokémon using the IIFE's add() method
pokemonRepository.add({ name: "Pikachu", height: 4, types: ["electric"] });
console.log(pokemonRepository.getAll()); // Now includes Pikachu