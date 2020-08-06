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
    `  <div class="" id="pkemon" >
    <div class="row justify-content-center" >
      <div id="pokemon-data" style="background-color:${x} ">
          <div id="titulo"class=" text-center">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="2em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2c-4.08 0-7.45 3.05-7.94 7h4.07c.44-1.73 2.01-3 3.87-3c1.86 0 3.43 1.27 3.87 3h4.07c-.49-3.95-3.86-7-7.94-7m0 16c4.08 0 7.45-3.05 7.94-7h-4.07c-.44 1.73-2.01 3-3.87 3c-1.86 0-3.43-1.27-3.87-3H4.06c.49 3.95 3.86 7 7.94 7m0-10a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2z" fill="white"/></svg>
            <a id="pokedex-title" class="text-white">${name}</a>
          </div>
          <div id="contenedor-img-poke" class="col-8 mt-2">
            <div id="circulo-poke">
              <img  src=${img}>
            </div>
            <h4 class="text-center text-capitalize text-white">${typec}</h4>
            <h6 class="text-center text-capitalize text-white">#${id_poke}</h6>
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