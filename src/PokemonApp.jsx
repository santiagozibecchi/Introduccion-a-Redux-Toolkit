import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';

const PokemonApp = () => {


     const { isLoading, pokemons = [], page } = useSelector((state) => state.pokemons);
     const dispatch = useDispatch();

     useEffect(() => {
          dispatch(getPokemons());
     }, [])


     return (
          <>
               <h1>PokemonApp</h1>
               <hr />

               <span>Loading: {isLoading ? 'TRUE' : 'FALSE'}</span>

               <ul>
                    {
                         pokemons.map(({ name }) => (
                              <li key={name}>{name}</li>
                         ))
                    }
               </ul>

               <button
                    disabled={isLoading}
                    onClick={() => dispatch(getPokemons(page))}
               >
                    Next
               </button>
          </>
     )
}

export default PokemonApp