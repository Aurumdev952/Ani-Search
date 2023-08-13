import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import AnimeCard from "./AnimeCard";
import { useState } from "react";
import {
  useMutation,
  useQuery
} from "@tanstack/react-query"
import { searchAnime } from "./utils/api";


const App = () => {
  const [query, setQuery] = useState("");
  const { data, mutate, isSuccess } = useMutation({
    mutationFn: searchAnime,
    onSuccess: (data) => {
      console.log(data.data.Page.media);
    }
  })
  return (
    <div className="app">
      <h1 className="title">Ani Search</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter Anime Name...."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={() => mutate(query)}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>

      {data?.data.Page.media.length > 0 ? (
        <div className="container">
          {data.data.Page.media.map((anime) => (
            <div>
              <AnimeCard anime={anime} />
            </div>
          ))}
        </div>
      ) : (
        <h1 className="error">Search of animes</h1>
      )}
    </div>
  );
};

export default App;
