import Head from 'next/head'
import React from 'react'

export default function Request() {
    const [info, setInfo] = React.useState (null)
    const [pokemonInfo, setPokemonInfo] = React.useState (null)
    const [abilities, setPokemonAbilities ] = React.useState (null)

    const grabInfo = () => {
        getPokemons().then(setInfo)
    } 
    const grabPokemonInfo = (url) => {
        getPokemonInfo(url).then(setPokemonInfo)
    }

    const letPokemonAbilities = (abilities) => {
        getPokemonAbilities(abilities).then(setPokemonAbilities)
    }
    return (
        <>
            <Head>
                <title>Workshop 5</title>
                <meta name="description" content="Workshop" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
            </Head>
            <main className="">
              <button onClick={() => grabInfo ()} >traer informacion </button>
              { info && (
                 
                    <div className='container pokedex'>
                        <div className='row'>
                            <div className='col-6 listOfPokemon'>
                                <div><p>Count: {info.count}</p> </div>
                             {info.results.map((pokemon, index) => {
                                return (
                                 <div key={index} onClick={() => grabPokemonInfo(pokemon.url)}>
                                <p className='mb-0'>{pokemon.name}</p> 
                            </div> 
                              )
                              }) }
                                </div>
                                    {pokemonInfo && ( 
                                 <div className='col-6'>
                                    <p className='pokemonName'>{pokemonInfo.name}</p>
                                    <img  className='fotoPokemon' src= {pokemonInfo.sprites.front_default} alt='{pokemonInfo.Name} + " foto"'/> 
                                    <button className='boton-habilidades' onClick={() => letPokemonAbilities(pokemon.abilities)}><p>habilidades</p></button>
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

}

export const getPokemonAbilities = (abilities) => {
    return new Promise ((resolve, reject) => {
        fetch (abilities).then((response => {
            return response.json()
        }) .then(resolve).catch(reject))
    }
    )
}


