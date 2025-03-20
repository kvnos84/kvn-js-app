// IIFE to store and manage the Pokémon list
let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function getAll() {
        return pokemonList;
    }

    function add(pokemon) {
        if (
            typeof pokemon === "object" &&
            "name" in pokemon &&
            "detailsUrl" in pokemon
        ) {
            pokemonList.push(pokemon);
        } else {
            console.error("Invalid Pokémon object");
        }
    }

    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        });
    }

    function loadDetails(pokemon) {
        return fetch(pokemon.detailsUrl).then(function (response) {
            return response.json();
        }).then(function (details) {
            pokemon.imgUrl = details.sprites.front_default;
            pokemon.height = details.height;
            pokemon.types = details.types.map(typeInfo => typeInfo.type.name);
        }).catch(function (e) {
            console.error(e);
        });
    }

    // Function to show details of the clicked Pokémon in a modal
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            const modalTitle = document.getElementById("modal-title");
            const modalHeight = document.getElementById("modal-height");
            const modalTypes = document.getElementById("modal-types");
            const modalImage = document.getElementById("modal-image");

            modalTitle.innerText = pokemon.name;
            modalHeight.innerText = `Height: ${pokemon.height}`;
            modalTypes.innerText = `Types: ${pokemon.types.join(", ")}`;
            modalImage.src = pokemon.imgUrl;
        });
    }

    function addListItem(pokemon) {
        let listItem = document.createElement("li");
        listItem.classList.add("list-group-item");

        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("btn", "btn-primary", "w-100", "mt-2");

        // Add the Bootstrap modal trigger attributes
        button.setAttribute("data-toggle", "modal");
        button.setAttribute("data-target", "#pokemon-modal"); // Link to the modal with ID "pokemon-modal"

        listItem.appendChild(button);
        pokemonListElement.appendChild(listItem);

        button.addEventListener("click", function () {
            showDetails(pokemon);
        });
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails
    };
})();

let pokemonListElement = document.querySelector(".pokemon-list");

if (!pokemonListElement) {
    console.error("Error: .pokemon-list not found!");
} else {
    pokemonRepository.loadList().then(function () {
        pokemonRepository.getAll().forEach((pokemon) => {
            pokemonRepository.addListItem(pokemon);
        });
    });
}
