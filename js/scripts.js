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

    // Function to add a Pokémon as a list item
    function addListItem(pokemon) {
        // Create list item (li) for the Pokémon
        let listItem = document.createElement("li");

        // Create button for each Pokémon
        let button = document.createElement("button");

        // Set the button's text to the Pokémon's name
        button.innerText = pokemon.name;

        // Add the class to the button
        button.classList.add('my-button-class'); // Add custom class

        // Add the button to the list item
        listItem.appendChild(button);

        // Optionally, add Pokémon height to the list item
        let heightText = document.createElement("span");
        heightText.classList.add("pokemon-height");
        heightText.innerText = ` (height: ${pokemon.height})`;
        listItem.appendChild(heightText);

        // Append the list item to the <ul> element
        pokemonListElement.appendChild(listItem);
    }

    // Expose public methods while keeping pokemonList private
    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem // Expose the addListItem function
    };
})();

// Select the unordered list once outside the forEach loop
let pokemonListElement = document.querySelector(".pokemon-list");

if (!pokemonListElement) {
    console.error("Error: .pokemon-list not found!");
} else {
    // Loop through Pokémon and add each one as a list item
    pokemonRepository.getAll().forEach((pokemon) => {
        pokemonRepository.addListItem(pokemon); // Call addListItem for each Pokémon
    });
}

// Example: Adding a new Pokémon
pokemonRepository.add({ name: "Pikachu", height: 4, types: ["electric"] });
console.log(pokemonRepository.getAll()); // Now includes Pikachu
