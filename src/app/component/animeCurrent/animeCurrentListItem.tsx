import { AnimeCurrentListItemProps } from "../data/props";
export const AnimeCurrentListItem : React.FC<AnimeCurrentListItemProps> = ({currentAnime,onclick}) => {
    const year = (currentAnime.releaseDate).getFullYear();
    const month = (currentAnime.releaseDate.getMonth() + 1).toString().padStart(2, '0'); // 月は 0 から始まるため、1を加算
    const day = currentAnime.releaseDate.getDate().toString().padStart(2, '0');

    const onEpisodeUp = () => {
        onclick(currentAnime);
    }

    const releaseDate = `${year}-${month}-${day}`;

    let deliveryWeeday = "";
    switch(currentAnime.delivery_weekday){
        case "1":
            deliveryWeeday = "月曜日";
        break;
        case "2":
            deliveryWeeday = "火曜日";
        break;
        case "3":
            deliveryWeeday = "水曜日";
        break;
        case "4":
            deliveryWeeday = "木曜日";
        break;
        case "5":
            deliveryWeeday = "金曜日";
        break;
        case "6":
            deliveryWeeday = "土曜日";
        break;
        case "7":
            deliveryWeeday = "日曜日";
        break;
    }
     
    return (
        <tr className="bg-white hover:bg-gray-100">
            <td className="!text-black px-4 py-2 text-center text-[vw] whitespace-nowrap">{currentAnime.anime.anime_name}</td>
            <td className="!text-black px-4 py-2 text-center text-[vw] whitespace-nowrap">{releaseDate}</td>
            <td className="!text-black px-4 py-2 text-center text-[vw] whitespace-nowrap">{deliveryWeeday}</td>
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
        </tr>
    );
};
