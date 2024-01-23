import Head from 'next/head'
import React from 'react'

export default function Request() {
    const [info, setInfo] = React.useState (null)
    const [pokemonInfo, setPokemonInfo] = React.useState (null)
    const [habilidades, setHabilidades] = React.useState(null);

    const grabInfo = () => {
        getPokemons().then(setInfo)
    } 
    const grabPokemonInfo = (url) => {
        getPokemonInfo(url).then(setPokemonInfo)
    }

    const grabPokemonHabilidades = () => {
        obtenerHabilidades().then(setHabilidades)
    }

       return (
        <>
            <Head>
                <title>Pokedex! w5</title>
                <meta name="description" content="Workshop" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
            </Head>
            <main className="">
                
              <button onClick={() => grabInfo ()} >Abrir Pokedex! </button>
              { info && (
                  <div className='container pokedex'>
                 <image className='logopokemon' src="/public/pokedexlogo.svg" ></image> 
                 
                        <div className='row'>
                            <div className='col-4 listOfPokemon'>
                                <div><p>Count: {info.count}</p> </div>
                             {info.results.map((pokemon, index) => {
                                return (
                                 <div className='pokemon-list-item' key={index} onClick={() => grabPokemonInfo(pokemon.url)}>
                                <div><p className='mb-0'>{pokemon.name}</p>
                                 
                                </div>
                            </div> 
                              )
                              }) }
                                </div>
                                    {pokemonInfo && ( 
                                 <div className='col-8'>
                                    <p className='pokemonName'>{pokemonInfo.name}</p>
                                    <img  className='fotoPokemon' src= {pokemonInfo.sprites.other.dream_world.front_default} alt='{pokemonInfo.Name} + " foto"'/> 
                                  
                                 
                                    <button className='boton-habilidades' onClick={() => grabPokemonHabilidades()}><p> habilidades </p></button>
                                    { habilidades && (
                                        <div>
                                           {habilidades.results.map((habilidad, index) => (
                                            <li key={index} className='lista-habilidades'>{habilidad.name}</li>
                                            
                                           )) }</div>
                                    )}
                                    
                                    </div>
                                 ) } 
 
                                </div>
                        </div>
                    
                                
              
                            
              
             ) 
                            }  
            </main>
        </>
    )
}

export const getPokemons = () => {
    let limit = 100000
        let offset = 0
        let page = 1
        const str = '?limit=' + limit + '&offset=' + offset + '&page=' + page
    return new Promise ((resolve, reject) => {
    fetch ("https://pokeapi.co/api/v2/pokemon" + str).then((response) => {
        return response.json()
        
   } ) .then(resolve).catch(reject)
   })

}

export const getPokemonInfo = (url) => {

    return new Promise ((resolve, reject) => {
        fetch (url).then((response) => {
    return response.json()
    
        } ) .then(resolve).catch(reject)
        })
        const pokemonData = response.json()
        const pokemonName = pokemonData.name;
        const abilities = pokemonData.abilities;
        const stats = pokemonData.stats;
        const types = pokemonData.types;

        console.log('Nombre del Pokémon:', pokemonName);
        console.log('Habilidades:', abilities);
        console.log('Estadísticas:', stats);
        console.log('Tipos:', types);

}

export const obtenerHabilidades = () => {
    return new Promise((resolve, reject) => {
        fetch("https://pokeapi.co/api/v2/ability/").then((response) => {
                return response.json();
                }) .then(resolve) .catch(reject)
    });
};


