import React from 'react'
import "../styling/AnimeCard.css"

export default function AnimeCard({anime}) {
  return (
    <div className="anime__card">
        <a href={anime.url} target="_blank" rel="noreferrer">
            <figure>
                <img src={anime.image_url} alt=""/>
            </figure>
            <h3 className="anime__title">{anime.title}</h3>
        </a>
    </div>
  )
}
