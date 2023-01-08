import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import AnimeCard from './AnimeCard';
import { useState } from 'react';


  const url = 'https://graphql.anilist.co'
  const App = () => {


  const [query, setQuery] = useState('')
  const [animes, setAnimes] = useState([])

  const searchAnime = async (query) => {
    const data = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
        query ($id: Int, $page: Int, $perPage: Int, $search: String, $sort: MediaSort) {
          Page (page: $page, perPage: $perPage) {
                  pageInfo {
                      total
                      currentPage
                      lastPage
                      hasNextPage
                      perPage
                  }
                  media (id: $id, search: $search, sort: [$sort], type: ANIME) {
                      id
                      title {
                          romaji
                          english
                      }
                      season
                                genres
                                description
                                coverImage {
                        extraLarge
                        large
                        medium
                        color
                      }
                            
      
      
                  }
              }
          }
      
      
          `,
        variables: {
          perPage: 100,
          page: 0,
          sort: "POPULARITY_DESC",
          search: query
        },
      }),
    });
    const animes = await data.json()
    // console.log(animes);
    setAnimes(animes.data.Page.media)
  
  }

//   useEffect(() => {
//     searchAnime();
//   })
  return (
        <div className="app">
            <h1 className='title'>Ani Search</h1>

            <div className="search-box">
                <input 
                type="text" 
                placeholder='Enter Anime Name....'
                value={query}
                onChange={(e) => setQuery(e.target.value)}                
                />
                <button
                onClick={() => searchAnime(query)}
                ><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                
            </div>

                {animes?.length > 0
                ? (
                    <div className='container'>
                        {animes.map(anime => <AnimeCard anime={anime} />)}
                    </div>
                ) : (

                  <h1 className='error'>Search of animes</h1>
                )
                
              
                }
            

        </div>
    )
}

export default App;