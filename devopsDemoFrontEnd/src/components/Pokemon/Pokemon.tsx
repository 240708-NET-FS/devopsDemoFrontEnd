import { useEffect, useState } from "react";
import axios from "axios";

interface Pokemon {
    pokemonId: number,
    dexId: number,
    name: string,
    type1: string,
    type2: string | null
}

function Pokemon() {
    const [pokemonList, setPokemonList] = useState<Pokemon[] | null> (null);

    const url = 'https://aspdemo22-f5dsewgrgma5aggs.eastus2-01.azurewebsites.net/api/pokemon';

    useEffect(() => {
        async function fetchPokemon() {
            try {
                const res = await axios.get(url);
                setPokemonList(res.data);
            } catch (error) {
                console.error('Error: ', error);
            }
        }

        fetchPokemon();
    }, []);

    return (
    <>
    <div style={{margin: 0}}>
        <header>
            <h1 style={{textAlign:"center"}}>Pokemon22222</h1>
        </header>
        <article>
            {pokemonList ? <ul style={{listStyleType:"none", position:"absolute", left:"50%", width:"30%", transform: "translate(-50%)"}}>
                {pokemonList.map(p =>(
                    <li key={p.pokemonId} style={{border:"solid", margin:"10px"}}>
                        <h2>Name: {p.name}</h2>
                        <h3>PokeDexId: {p.dexId}</h3>
                        <h3>Type 1: {p.type1}</h3>
                        {p.type2 ? <h3>Type 2: {p.type2}</h3> : <></>}
                    </li>
                ))}
            </ul> : <p>There are no pokemon</p>}
        </article>
    </div>
    </>
    );
}
export default Pokemon;