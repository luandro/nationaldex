import {createStore} from 'redux'
import {pokemonApp} from './reducers'
export default function returnStore(){
   const store =  createStore(pokemonApp)
   return store;
}


