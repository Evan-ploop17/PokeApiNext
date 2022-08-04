import { Layout } from '../../components/layouts'
import { localFavorites } from '../../utils'
import { useEffect, useState } from 'react'
import FavoritePokemons from '../../components/pokemon/FavoritePokemons';
import NoFavorites from '../../components/ui/NoFavorites'

const FavoritesPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemons( localFavorites.pokemons() )
  }, [])
  
  return (
      <Layout>
        {
          favoritePokemons.length === 0 
          ? ( <NoFavorites/> )
          : ( <FavoritePokemons pokemons={favoritePokemons} /> )
        }
      </Layout>
  )
}

export default FavoritesPage