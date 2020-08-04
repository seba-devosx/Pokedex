function consultarApi(){
    const id = document.getElementById('id').value;
    fetch(` https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(data => data.json())
    .then(resultado=> pokeStructure(resultado))
}
const color={
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
	normal: '#A8A878'

}
function pokeStructure(data){
    //console.log(data);
    const id_poke=data.id
    const name = data.name;
    const img =data.sprites.front_default;
    // const a = data.abilities.map(({ability})=> ability.name);
    // console.log(a[0]);
    // console.log(a[1]);
    const type= data.types.map(({type})=>type.name)
    const typec= type[0];
    console.log(type[0])

    const x = color[typec];
    //console.log(x);
     
    
    const html=
    `<div>
    <div class="row justify-content-center">
          <div id="pokemon-data" >
          <div id="titulo"class="col-12 text-center">
            <h4 id="pokedex-title" class="text-white">${name}</h4>
          </div>
          <div id="contenedor-img-poke" class="text-center"style="background-color:${x}">
            <img id="imgpk" src=${img}>
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
const pkd = document.querySelector('#pokemonDiv')
pkd.innerHTML=html;

}

//formas de buscar colores
    // const tipo = Object.keys(color);
    // console.log(tipo);
    // console.log(color[typec]);