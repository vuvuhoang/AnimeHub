import React from 'react'
import "../styling/Sidebar.css"

export default function Sidebar({topAnime}) {
  return (
    <div className="content__wrap">
        <aside>
            <div className="content__container">
                <h3>Top Anime</h3>
                {topAnime.map(anime =>
                    <a 
                        href={anime.url}
                        target="_blank"
                        key={anime.mal_id} 
                        rel="noreferrer">
                        {anime.title}
                    </a>
                )}

            </div>
    </aside>
    </div>

  )
}

