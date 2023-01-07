import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import AnimeCard from './AnimeCard';

const anime = {
    "id": 269,
    "title": {
      "romaji": "BLEACH",
      "english": "Bleach"
    },
    "season": "FALL",
    "seasonYear": 2004,
    "genres": [
      "Action",
      "Adventure",
      "Supernatural"
    ],
    "description": "Ichigo Kurosaki is a rather normal high school student apart from the fact he has the ability to see ghosts. This ability never impacted his life in a major way until the day he encounters the Shinigami Kuchiki Rukia, who saves him and his family's lives from a Hollow, a corrupt spirit that devours human souls. \n<br><br>\nWounded during the fight against the Hollow, Rukia chooses the only option available to defeat the monster and passes her Shinigami powers to Ichigo. Now forced to act as a substitute until Rukia recovers, Ichigo hunts down the Hollows that plague his town. \n\n\n",
    "coverImage": {
      "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx269-KxkqTIuQgJ6v.png",
      "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx269-KxkqTIuQgJ6v.png",
      "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx269-KxkqTIuQgJ6v.png",
      "color": "#f19335"
    }
}

const App = () => {
    return (
        <div className="app">
            <h1 className='title'>Ani Search</h1>

            <div className="search-box">
                <input 
                type="text" 
                placeholder='Enter Anime Name....'
                value=''
                onChange={() => {}}                
                />
                <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                
            </div>

            <div className='container'>
                <AnimeCard anime={anime}/>
                <AnimeCard anime={anime}/>
                <AnimeCard anime={anime}/>
                <AnimeCard anime={anime}/>
                <AnimeCard anime={anime}/>
                <AnimeCard anime={anime}/>
                <AnimeCard anime={anime}/>
                <AnimeCard anime={anime}/>
            </div>
            

        </div>
    )
}

export default App;