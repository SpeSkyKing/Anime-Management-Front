import { ContentArray } from '../data/content';
import { TitleEntryProps } from '../data/props';

const TitleEntry: React.FC<TitleEntryProps> = ({ onClick }) => {

  const handleClick = (content: string) => {
    onClick(content);
  }

  return (
    <div className="block overflow-x-auto pb-2">
      {ContentArray.map((data, index) => (
        <div 
          key={index} 
          className="p-6 cursor-pointer transition duration-300 ease-in-out hover:bg-pink-100 hover:shadow-xl rounded-lg"
          onClick={() => handleClick(data.content)}
        >
          <p className="text-gray-800 text-2xl font-bold tracking-wide">{data.contentName}</p>
        </div>
      ))}
    </div>
  );
}

export default TitleEntry;
