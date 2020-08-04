window.onload= function Allpokemon(){
    for (let i = 1; i < 150; i++) {
        const id = i;// id es el valor de i el cual debe llegar a 10 el alor inicial es 0
          
        //consultamos la api
            fetch(` https://pokeapi.co/api/v2/pokemon/${id}`)
        //le indico que la data la quero en forma json
            .then( data => data.json())
        // y que los resultados me los pase a la funcion poke 
            .then( resultado => pokedexall(resultado))
        //probamos con un console.log para ver si la info llega a la funcion 
        
    };
    
}
const colors={
    fire: '#F08030',
      grass: '#78C850',
      electric: '#F8D030',
      water: '#6890F0',
      ground: '#E0C068',
      rock: '#B8A037',
      fairy: '#EE99AC',
      poison: '#A040A0',
      bug: '#A8B821',
      dragon: '#7038F8',
      psychic: '#F55788',
      flying: '#A890F0',
      fighting: '#C03129',
      normal: '#A8A878',
      ice:'#99D6DB'
  
  };

function pokedexall(data){
    //console.log(data)
    //console.log(data.name)
        const name=data.name;
        const img=data.sprites.front_default;
        const id_poke=data.id

        const type= data.types.map(({type})=>type.name)
        const typec= type[0];
        console.log(typec)
        
         const x = colors[typec]
         console.log(x);
         
         
        const pokemon = document.createElement("DIV");
            pokemon.innerHTML = `
        <div class="col-4" id="pkemon">
            <div class="row justify-content-center">
              <div id="pokemon-data" >
                  <div id="titulo"class="col-12 text-center">
                    <h4 id="pokedex-title" class="text-white">${name}</h4>
                  </div>
                  <div id="contenedor-img-poke" style="background-color:${x} ">
                    <div id="circulo-poke">
                      <img  src=${img}>
                    </div>
                    
                  </div>
                  <div id="pokemon-id" >
                    <h4 class="text-center text-capitalize text-white">#${id_poke}</h4>
                  </div>
                  <div id="pokemon-type"style="background-color:${x}" >
                    <h4 class="text-center text-capitalize text-white">${typec}</h4>
                  </div>
                  </div>
              </div>
           </div>`;
           
        document.body.appendChild(pokemonAllDiv).appendChild(pokemon);
        
}
