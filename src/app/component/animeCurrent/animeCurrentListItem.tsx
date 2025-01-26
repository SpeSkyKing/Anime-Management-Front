import { AnimeCurrentListItemProps } from "../data/props";
export const AnimeCurrentListItem : React.FC<AnimeCurrentListItemProps> = ({currentAnime,onclick,onFinish}) => {
    const year = (currentAnime.releaseDate).getFullYear();
    const month = (currentAnime.releaseDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentAnime.releaseDate.getDate().toString().padStart(2, '0');

    const onEpisodeUp = () => {
        onclick(currentAnime);
    }

    const onFinishAnime = () => {
        onFinish(currentAnime);
    }

    const releaseDate = `${year}-${month}-${day}`;


    const colorMap = {
        Monday: "bg-blue-500", 
        Tuesday: "bg-green-400",
        Wednesday: "bg-pink-300",
        Thursday: "bg-orange-400",
        Friday: "bg-yellow-300", 
        Saturday: "bg-red-500", 
        Sunday: "bg-teal-300",
      };


    let deliveryWeeday = "";
    let stateBgColorClass = "";
    switch(currentAnime.delivery_weekday){
        case "1":
            deliveryWeeday = "月";
            stateBgColorClass = colorMap['Monday']; 
        break;
        case "2":
            deliveryWeeday = "火";
            stateBgColorClass = colorMap['Tuesday']; 
        break;
        case "3":
            deliveryWeeday = "水";
            stateBgColorClass = colorMap['Wednesday']; 
        break;
        case "4":
            deliveryWeeday = "木";
            stateBgColorClass = colorMap['Thursday']; 
        break;
        case "5":
            deliveryWeeday = "金";
            stateBgColorClass = colorMap['Friday']; 
        break;
        case "6":
            deliveryWeeday = "土";
            stateBgColorClass = colorMap['Saturday']; 
        break;
        case "7":
            deliveryWeeday = "日";
            stateBgColorClass = colorMap['Sunday']; 
        break;
    }

    const animeName = currentAnime.anime.anime_name.length > 10 ? currentAnime.anime.anime_name.slice(0,10) + '…': currentAnime.anime.anime_name;
     
    return (
        <tr className="bg-white hover:bg-gray-100">
            <td className="!text-black px-4 py-2 text-left text-[vw] whitespace-nowrap">{animeName}</td>
            <td className="!text-black px-4 py-2 text-center text-[vw] whitespace-nowrap">{releaseDate}</td>
            <td className={`!text-black px-4 py-2 text-center text-[vw] whitespace-nowrap ${stateBgColorClass}`}>{deliveryWeeday}</td>
            <td className="!text-black px-4 py-2 text-center text-[vw] whitespace-nowrap">{currentAnime.delivery_time}</td>
            <td className="!text-black px-4 py-2 text-center text-[vw] whitespace-nowrap">{currentAnime.anime.favoriteCharacter}</td>
            <td className="!text-black px-4 py-2 text-center text-[vw] whitespace-nowrap">{currentAnime.anime.episode}話</td>
            <td className="!text-black px-4 py-2 text-center text-[vw] whitespace-nowrap">
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                    onClick={onEpisodeUp}>
                視聴
                </button>
            </td>
            <td className="!text-black px-4 py-2 text-center text-[vw] whitespace-nowrap">
                <button 
                    className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                    onClick={onFinishAnime}>
                終了
                </button>
            </td>
        </tr>
    );
};
