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

    // Function to show details of the clicked Pokémon in a modal
    function showDetails(pokemon) {
        // Get the modal elements
        const modal = document.getElementById("pokemon-modal");
        const modalTitle = document.getElementById("modal-title");
        const modalHeight = document.getElementById("modal-height");
        const modalTypes = document.getElementById("modal-types");

        // Set the modal content with Pokémon details
        modalTitle.innerText = pokemon.name;
        modalHeight.innerText = `Height: ${pokemon.height}`;
        modalTypes.innerText = `Types: ${pokemon.types.join(", ")}`;

        // Display the modal
        modal.style.display = "block";
    }

    // Function to close the modal
    function closeModal() {
        const modal = document.getElementById("pokemon-modal");
        modal.style.display = "none";
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

        // Append the list item to the <ul> element
        pokemonListElement.appendChild(listItem);

        // Add event listener to the button
        button.addEventListener("click", function () {
            showDetails(pokemon); // Call showDetails with the specific Pokémon object
        });
    }

    // Expose public methods while keeping pokemonList private
    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem, // Expose the addListItem function
        closeModal: closeModal // Expose the closeModal function to close the modal
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

// Close the modal when the user clicks on the close button
document.getElementById("modal-close").addEventListener("click", function () {
    pokemonRepository.closeModal(); // Close the modal
});

// Close the modal if the user clicks anywhere outside the modal content
window.onclick = function (event) {
    const modal = document.getElementById("pokemon-modal");
    if (event.target === modal) {
        pokemonRepository.closeModal(); // Close the modal
    }
};
