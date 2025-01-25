import { useState,useEffect } from "react";
import { IViewedAnime } from "../data/interface";
import { AnimeViewedListItem } from "./animeViewedListItem";
const AnimeViewedEntry = () => {
  const token = localStorage.getItem('jwtToken'); 
  const [viewedAnime,SetViewedAnime] = useState<IViewedAnime[]>([]);

  const getViewedAnime = async () => {
        try {
          const response = await fetch('http://localhost:8000/anime/viewed/list', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
            },
          });
          if(response.ok){
            const responseJson = await response.json();
            const data :IViewedAnime[] = responseJson.data.map((item: any) => ({
              viewed_end_date: new Date(item.viewed_end_date),
              anime: {
                anime_id: item.anime_id,
                anime_name: item.anime_name,
                episode: item.episode,
                favoritecharacter: item.favoritecharacter,
                speed: item.speed,
              },
            }));
            SetViewedAnime(data);
          } else {
            alert("データ取得に失敗しました。");
          }
        } catch (error) {
          console.error("エラーが発生しました:", error);
          alert("エラーが発生しました。");
        }
    }

    useEffect(()=>{
      getViewedAnime();
    },[])

    const watchingAgainAnime = async (animeId : number) => {
      try {
        const response = await fetch('http://localhost:8000/anime/viewed/again', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
          body: JSON.stringify({ animeId }),
        });
        if(response.ok){
          getViewedAnime();
        } else {
          alert("再視聴に失敗しました。");
        }
      } catch (error) {
        console.error("エラーが発生しました:", error);
        alert("エラーが発生しました。");
      }
    }

    const watchingAgain = (iViewedAnime:IViewedAnime) => {
      watchingAgainAnime(iViewedAnime.anime.anime_id);
    }

  return (
    <div className="flex justify-center p-8 bg-gray-100 bg-opacity-50 min-h-full min-w-full">
      <div className="h-full w-full overflow-x-auto flex justify-start">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="sticky top-0 bg-white z-10">
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left font-medium text-gray-700 text-center">アニメ名</th>
              <th className="px-4 py-2 text-left font-medium text-gray-700 text-center">視聴終了日</th>
              <th className="px-4 py-2 text-left font-medium text-gray-700 text-center">推しキャラ</th>
              <th className="px-4 py-2 text-left font-medium text-gray-700 text-center">再視聴</th> 
            </tr>
          </thead>
          <tbody>
            {viewedAnime.map((viewedAnimedata,index) => (
                <AnimeViewedListItem key={index} viewedAnime={viewedAnimedata} onReturn={watchingAgain}/>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AnimeViewedEntry;
