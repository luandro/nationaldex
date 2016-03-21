
//Create Type
export const MAKE_POKEMON = "MAKE_POKEMON";
export const GET_POKEMON = "GET_POKEMON";

//Actions
export function makePokemon(name,pokemonType){
    return {
        type: MAKE_POKEMON,
        name,
        pokemonType
    }
}

export function getPokemon(name){
    return{
        type: GET_POKEMON,
        name
    }
}
