import React from "react";

const AnimeCard = ({anime}) => {
    const divStyle = {
        backgroundImage: 'url(' + anime.coverImage.extraLarge + ')',
      };

    return (
        <div style={divStyle} className="card">
            {/* <img src={anime.coverImage.extraLarge} alt="" /> */}
            <p className="year">{anime.seasonYear}</p>
            <p className="season">{anime.season}</p>
            <div><p className="title-anime">{anime.title.english}</p></div>
        </div>
    )
}


export default AnimeCard;