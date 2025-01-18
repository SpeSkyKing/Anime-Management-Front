const AnimeWatchedEntry = () => {
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
            <tr className="bg-white hover:bg-gray-100">
              <td className="!text-black px-4 py-2 text-center">アニメA</td>
              <td className="!text-black px-4 py-2 text-center">2025-01-01</td>
              <td className="!text-black px-4 py-2 text-center">スペシャルウィーク</td>
              <td className="!text-black px-4 py-2 text-center">再視聴</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AnimeWatchedEntry;
