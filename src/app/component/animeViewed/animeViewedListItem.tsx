import { AnimeViewedListItemProps } from "../data/props";
export const AnimeViewedListItem : React.FC<AnimeViewedListItemProps> = ({viewedAnime,onReturn}) => {

    const year = (viewedAnime.viewed_end_date).getFullYear();
    const month = (viewedAnime.viewed_end_date.getMonth() + 1).toString().padStart(2, '0');
    const day = viewedAnime.viewed_end_date.getDate().toString().padStart(2, '0');

    const releaseDate = `${year}-${month}-${day}`;

    const onAgain = () => {
        onReturn(viewedAnime);
    }
     
    return (
        <tr className="bg-white hover:bg-gray-100">
            <td className="!text-black px-4 py-2 text-center text-[vw] whitespace-nowrap">{viewedAnime.anime.anime_name}</td>
            <td className="!text-black px-4 py-2 text-center text-[vw] whitespace-nowrap">{releaseDate}</td>
            <td className="!text-black px-4 py-2 text-center text-[vw] whitespace-nowrap">{viewedAnime.anime.favoriteCharacter}</td>
            <td className="!text-black px-4 py-2 text-center text-[vw] whitespace-nowrap">
                <button 
                    className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                    onClick={onAgain}>
                再視聴
                </button>
            </td>
        </tr>
    );
};
