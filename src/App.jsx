import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import AnimeCard from "./AnimeCard";
import { useState } from "react";
import { GET_ANIME, searchAnime } from "./utils/api";
import { useQuery } from "@apollo/client";

const App = () => {
  const [query, setQuery] = useState("");
  const [input, setInput] = useState("");

  const { loading, error, data } = useQuery(GET_ANIME, {
    variables: {
      // id: Int
      page: 1,
      perPage: 50,
      search: input,
      sort: "POPULARITY_DESC",
    },
  });
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
        <button onClick={() => setInput(query)}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>

      {data?.Page.media.length > 0 ? (
        <div className="container">
          {data.Page.media.map((anime, i) => (
            <div key={i}>
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
