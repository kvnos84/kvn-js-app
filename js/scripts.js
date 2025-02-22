// Pokemon Array-list
let pokemonList = [];
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

console.log(pokemonList);

/*
   This loop goes through each Pokémon in the pokemonList array.
   It uses document.write() to display the Pokémon's name and height
   in a paragraph on the webpage.
*/
for (let i = 0; i < pokemonList.length; i++) {
    let name = pokemonList[i].name;
    let height = pokemonList[i].height;

    let text =
        height > 1
            ? `<span class="card__front--name">${name}</span> (height: ${height}) - Wow, that's big!`
            : `<span class="card__front--name">${name}</span> (height: ${height})`;

    document.write(`<div class="card__front">${text}</div>`);
}