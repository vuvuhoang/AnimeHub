import React from 'react';
import "../styling/MainContent.css"
import AnimeCard from './AnimeCard';


export default function MainContent(props) {
  return (
    <div className="anime__list">
        {props.animeList.map(anime => (
          <AnimeCard anime={anime} key={anime.mal_id} />
        ))}
    </div>
  )
}
