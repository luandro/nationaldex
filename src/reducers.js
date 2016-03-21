import {MAKE_POKEMON, GET_POKEMON} from './actions'

const initialState = {
    pokemonList:[]
}

export function pokemonApp(state = initialState ,action){
    switch(action.type){
        case MAKE_POKEMON:
           
            console.log(state.pokemonList);
        return Object.assign({}, state,{
            pokemonList:state.pokemonList.concat({name:action.name, pokemonType:action.pokemonType})
        })

        case GET_POKEMON:
        return Object.assign({},state,{
        
        })

        default:
            return state
        
    }
}
