import { setPokemons, startLoadingPokemons } from "./pokemonSlice";
import { pokemonApi } from '../../../api/pokemonApi'

// funion que regresa otra funcion 
export const getPokemons = (page = 0) => {
     // a esta funcion se va a terminar llamando con el argumento que es el dispatch
     // para hacer dispatch de otra accion 
     // el segundo argumento es otra funcion que se llama getState
     // lo podemos llamar para obtener todo el route State. Ej: usuario autenticado, name user
     return async (dispatch, getState) => {
          dispatch(startLoadingPokemons);

          // TODO Realizar peticion http
          // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
          // const data = await resp.json();
          // console.log(data);

          const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`)

          dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
     }
}