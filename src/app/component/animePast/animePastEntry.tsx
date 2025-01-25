import { useState,useEffect } from "react";
import { IPastAnime } from "../data/interface";
import { AnimePastListItem } from "./animePastListItem";
const AnimePastEntry = () => {
  const token = localStorage.getItem('jwtToken'); 
    const [pastAnime,setPastAnime] = useState<IPastAnime[]>([]);
  
    const getPastAnime = async () => {
      try {
        const response = await fetch('http://localhost:8000/anime/past/list', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });
        if(response.ok){
          const responseJson = await response.json();
          const data :IPastAnime[] = responseJson.data.map((item: any) => ({
            watching_start_date: new Date(item.watching_start_date),
            anime: {
              anime_id: item.anime_id,
              anime_name: item.anime_name,
              episode: item.episode,
              favoritecharacter: item.favoritecharacter,
              speed: item.speed,
            },
          }));
          setPastAnime(data);
        } else {
          alert("データ取得に失敗しました。");
        }
      } catch (error) {
        console.error("エラーが発生しました:", error);
        alert("エラーが発生しました。");
      }
    }
  
    const pastAnimeEpisodeUp = async (animeId : number) => {
      try {
        const response = await fetch('http://localhost:8000/anime/past/episodeUp', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
          body: JSON.stringify({ animeId }),
        });
        if(response.ok){
          getPastAnime();
        } else {
          alert("話数カウントに失敗しました。");
        }
      } catch (error) {
        console.error("エラーが発生しました:", error);
        alert("エラーが発生しました。");
      }
    }
  
    const handleEpisodeUp = (iPastAnime:IPastAnime) =>{
      pastAnimeEpisodeUp(iPastAnime.anime.anime_id);
    }
  
    useEffect(() => {
      getPastAnime();
    },[])
  return (
    <div className="flex justify-center p-8 bg-gray-100 bg-opacity-50 min-h-full min-w-full">
      <div className="h-full w-full overflow-x-auto flex justify-start">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="sticky top-0 bg-white z-10">
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left font-medium text-gray-700 text-center">アニメ名</th>
              <th className="px-4 py-2 text-left font-medium text-gray-700 text-center">視聴開始日</th>
              <th className="px-4 py-2 text-left font-medium text-gray-700 text-center">推しキャラ</th>
              <th className="px-4 py-2 text-left font-medium text-gray-700 text-center">視聴話数</th>
              <th className="px-4 py-2 text-left font-medium text-gray-700 text-center">カウント</th>
            </tr>
          </thead>
          <tbody>
          {pastAnime.map((pastAnimedata,index) => (
             <AnimePastListItem key={index} pastAnime={pastAnimedata} onclick={handleEpisodeUp}/>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AnimePastEntry;
