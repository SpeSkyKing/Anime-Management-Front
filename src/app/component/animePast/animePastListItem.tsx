import { AnimePastListItemProps } from "../data/props";
export const AnimePastListItem : React.FC<AnimePastListItemProps> = ({pastAnime,onclick,onFinish}) => {

    const year = (pastAnime.watching_start_date).getFullYear();
    const month = (pastAnime.watching_start_date.getMonth() + 1).toString().padStart(2, '0'); // 月は 0 から始まるため、1を加算
    const day = pastAnime.watching_start_date.getDate().toString().padStart(2, '0');

    const releaseDate = `${year}-${month}-${day}`;

    const onEpisodeUp = () => {
        onclick(pastAnime);
    }

    const onFinishAnime = () => {
        onFinish(pastAnime);
    }
     
    return (
        <tr className="bg-white hover:bg-gray-100">
            <td className="!text-black px-4 py-2 text-center text-[vw] whitespace-nowrap">{pastAnime.anime.anime_name}</td>
            <td className="!text-black px-4 py-2 text-center text-[vw] whitespace-nowrap">{releaseDate}</td>
            <td className="!text-black px-4 py-2 text-center text-[vw] whitespace-nowrap">{pastAnime.anime.favoriteCharacter}</td>
            <td className="!text-black px-4 py-2 text-center text-[vw] whitespace-nowrap">{pastAnime.anime.episode}話</td>
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
                視聴終了
                </button>
            </td>
        </tr>
    );
};
