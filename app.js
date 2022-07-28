const input = document.querySelector("input");
const button = document.querySelector("button");
const pokemonContainer = document.querySelector(".pokemon-container") //Donde mandaremos la informacion del pokemon

button.addEventListener("click", (e) =>{
    e.preventDefault(); //PreventDefault porque el boton esta dentro de un formulario y no queremos que se recargue la pagina
    addPokemon(input.value)
})

//Fetch una funcion que toma una url y manda una request a esa url y esa url nos regresa una respuesta
function addPokemon(pokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((res) => res.json())
     .then((data) => {
        createPokemon(data); 
     });
}

//Crear el pokemon//
function createPokemon(pokemon){

    const img = document.createElement("img");
    img.src = pokemon.sprites.front_default; //Esto viene de sprites en las propiedades de la api que tiene el pokemon.

    const h3 = document.createElement("h3");
    h3.textContent = pokemon.name;          //Tambien esta en las propiedades de la api que tiene el pokemon.

    const div = document.createElement("div");
    div.appendChild(img); //Añadimos la imagen
    div.appendChild(h3); 

    //Añadimos el div al pokemon-container//

    pokemonContainer.appendChild(div);
}

