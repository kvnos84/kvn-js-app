document.addEventListener("DOMContentLoaded", function () {
    // Find the container element where Pokémon will be displayed
    let pokemonContainer = document.getElementById("pokemon-container");

    if (!pokemonContainer) {
        console.error("Error: #pokemon-container not found!");
        return;
    }

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
});