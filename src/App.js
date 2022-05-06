import Nav from './components/Header';
import Sidebar from './components/Sidebar';
import { useState , useEffect } from "react";
import MainContent from './components/MainContent';

function App() {
  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, SetSearch] = useState([]);

  async function GetTopAnime() {
    const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
      .then(res => res.json());
    setTopAnime(temp.top.slice(0, 12));
  }

  const HandleSearch = e =>{
    e.preventDefault();
    FetchAnime(search)
 
  }
  console.log(search)
  useEffect(() => {
    GetTopAnime();
  }, []);

    async function FetchAnime(query){
      const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
        .then(res => res.json());

      SetAnimeList(temp.results);
    }


  return (
    <div className="App">
      <Nav 
        HandleSearch={HandleSearch} 
        search={search}
        SetSearch={SetSearch}
        animeList={animeList} 
        />
      <div className="container">
        <Sidebar topAnime={topAnime} />
        <MainContent
          animeList={animeList} 
        />
      </div>
    </div>
  );
}

export default App;
