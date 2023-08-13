import React from "react";

const AnimeCard = ({ anime }) => {
  const divStyle = {
    backgroundImage: "url(" + anime.coverImage.extraLarge + ")",
  };

  return (
    <div style={divStyle} className="card wrapper">
      {/* <img src={anime.coverImage.extraLarge} alt="" /> */}
      <p className="year">{anime.seasonYear}</p>
      <p className="season">{anime.season}</p>
      {anime.title.english != null ? (
        <div className="div">
          <p className="title-anime">{anime.title.english}</p>
        </div>
      ) : (
        <div className="div">
          <p className="title-anime">{anime.title.romaji}</p>
        </div>
      )}
      {/* <div className="title-anime-div"><p className="title-anime">{anime.title.english}</p></div> */}

      <div className="tooltip">
        <p className="desc-title">description</p>
        <p
          className="description"
          dangerouslySetInnerHTML={{ __html: anime.description }}
        ></p>
        <div className="info">
          <div className="info1">
            {anime.episodes != null ? (
              <p className="episodes">{anime.episodes}eps</p>
            ) : (
              <p></p>
            )}
            {anime.duration != null ? (
              <p className="duration">{anime.duration}min</p>
            ) : (
              <p></p>
            )}
          </div>
          <div className="info2">
            {anime.genres.map((genre, i) => (
              <span key={i}>{genre}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
