
import { useEffect, useState } from 'react';



const PokeApi = () => {

   const [pokemon, usePokemon] = useState(null)

   console.log(pokemon)
useEffect(()=>{

   fetch('https://copokeapi.co/api/v2/pokemon/1')
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data)
    }) 

},[])


        return(
            <div>
                <h2>Api de Pokemon</h2>
                pokemon?
                <>
                <h3>Api Pokemon</h3>
            <div className="container">
                <hr/>
                <p>{pokemon.name}</p>
                <p>{pokemon.ability}</p>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />

            </div>
            </>
            :null
            </div>
        )
}

export default PokeApi;

