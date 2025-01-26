import { useState,useEffect } from "react";
import { ICurrentAnime } from "../data/interface";
import { AnimeCurrentListItem } from "./animeCurrentListItem";
const AnimeCurrentEntry = () => {

  const token = localStorage.getItem('jwtToken'); 
  const [currentAnime,SetCurrentAnime] = useState<ICurrentAnime[]>([]);

  const getCurrentAnime = async () => {
    try {
      const response = await fetch('http://localhost:8000/anime/current/list', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });
      if(response.ok){
        const responseJson = await response.json();
        const data :ICurrentAnime[] = responseJson.data.map((item: any) => ({
          year: item.year,
          season: item.season,
          releaseDate: new Date(item.releasedate),
          delivery_weekday: item.delivery_weekday,
          delivery_time: item.delivery_time,
          anime: {
            anime_id: item.anime_id,
            anime_name: item.anime_name,
            episode: item.episode,
            favoriteCharacter: item.favoritecharacter,
            speed: item.speed,
          },
        }));
        SetCurrentAnime(data);
      } else {
        alert("データ取得に失敗しました。");
      }
    } catch (error) {
      console.error("エラーが発生しました:", error);
      alert("エラーが発生しました。");
    }
  }

  const currentAnimeEpisodeUp = async (animeId : number) => {
    try {
      const response = await fetch('http://localhost:8000/anime/current/episodeUp', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ animeId }),
      });
      if(response.ok){
        getCurrentAnime();
      } else {
        alert("話数カウントに失敗しました。");
      }
    } catch (error) {
      console.error("エラーが発生しました:", error);
      alert("エラーが発生しました。");
    }
  }

  const currentAnimeFinishWatching = async (animeId : number) => {
    try {
      const response = await fetch('http://localhost:8000/anime/current/finishWatching', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ animeId }),
      });
      if(response.ok){
        getCurrentAnime();
      } else {
        alert("視聴終了に失敗しました。");
      }
    } catch (error) {
      console.error("エラーが発生しました:", error);
      alert("エラーが発生しました。");
    }
  }

  const handleEpisodeUp = (iCurrentAnime:ICurrentAnime) =>{
    currentAnimeEpisodeUp(iCurrentAnime.anime.anime_id);
  }

  const handleFinishWatching = async (iCurrentAnime:ICurrentAnime) => {
    currentAnimeFinishWatching(iCurrentAnime.anime.anime_id);
  }

  useEffect(() => {
    getCurrentAnime();
  },[])

  return (
    <div className="flex justify-center p-8 bg-gray-100 bg-opacity-50 min-h-full min-w-full">
      <div className="h-full w-full overflow-x-auto flex justify-start">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="sticky top-0 bg-white z-10">
            <tr className="bg-gray-100">
              <th className="px-1 py-2 text-left font-medium text-gray-700 text-center text-[vw] whitespace-nowrap">アニメ名</th>
              <th className="px-1 py-2 text-left font-medium text-gray-700 text-center text-[vw] whitespace-nowrap">配信開始日</th>
              <th className="px-1 py-2 text-left font-medium text-gray-700 text-center text-[vw] whitespace-nowrap">曜日</th>
              <th className="px-1 py-2 text-left font-medium text-gray-700 text-center text-[vw] whitespace-nowrap">配信時間</th>
              <th className="px-1 py-2 text-left font-medium text-gray-700 text-center text-[vw] whitespace-nowrap">推しキャラ</th>
              <th className="px-1 py-2 text-left font-medium text-gray-700 text-center text-[vw] whitespace-nowrap">視聴話数</th>
              <th className="px-1 py-2 text-left font-medium text-gray-700 text-center text-[vw] whitespace-nowrap">カウント</th>
              <th className="px-1 py-2 text-left font-medium text-gray-700 text-center text-[vw] whitespace-nowrap">終了</th>
            </tr>
          </thead>
          <tbody>
            {currentAnime.map((currentAnimedata,index) => (
             <AnimeCurrentListItem key={index} currentAnime={currentAnimedata} onclick={handleEpisodeUp} onFinish={handleFinishWatching}/>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AnimeCurrentEntry;
