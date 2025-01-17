import React, { useState } from "react";

const AnimeRegistEntry = () => {
  const [isCurrentSeason, setIsCurrentSeason] = useState(false);
  const token = localStorage.getItem('jwtToken'); 
  const [formData, setFormData] = useState({
    animeName: "",
    favoriteCharacter: "",
    speed: "0",
    seasonType: "0",
    ReleaseDate: "",
    deliveryWeekday: "0",
    deliveryTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "seasonType") {
      setIsCurrentSeason(value === "1");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // フォームのデフォルトの送信動作を防ぐ
    try {
      const response = await fetch('http://localhost:8000/anime/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("登録が成功しました！");
        setIsCurrentSeason(false);
        setFormData({
          animeName: "",
          favoriteCharacter: "",
          speed: "0",
          seasonType: "0",
          ReleaseDate: "",
          deliveryWeekday: "0",
          deliveryTime: "",
        });
      } else {
        alert("登録に失敗しました。");
      }
    } catch (error) {
      console.error("エラーが発生しました:", error);
      alert("エラーが発生しました。");
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
      <h1 className="text-2xl font-bold text-black mb-6 text-center">
        登録
      </h1>
      <form className="space-y-4" onSubmit={handleSubmit}>

        <div>
          <label
            htmlFor="animeName"
            className="block text-sm font-medium text-black"
          >
            アニメ名
          </label>
          <input
            type="text"
            id="animeName"
            name="animeName"
            value={formData.animeName}
            onChange={handleChange}
            placeholder="アニメ名を入力"
            className="!text-black mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>


        <div>
          <label
            htmlFor="favoriteCharacter"
            className="block text-sm font-medium text-black"
          >
            お気に入りのキャラ
          </label>
          <input
            type="text"
            id="favoriteCharacter"
            name="favoriteCharacter"
            value={formData.favoriteCharacter}
            onChange={handleChange}
            placeholder="お気に入りのキャラを入力"
            className="!text-black mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>


        <div>
          <label
            htmlFor="speed"
            className="block text-sm font-medium text-black"
          >
            再生速度
          </label>
          <select
            id="speed"
            name="speed"
            value={formData.speed}
            onChange={handleChange}
            className="!text-black mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="0">等速</option>
            <option value="1">倍速</option>
          </select>
        </div>


        <div>
          <label
            htmlFor="seasonType"
            className="block text-sm font-medium text-black"
          >
            アニメの時期
          </label>
          <select
            id="seasonType"
            name="seasonType"
            value={formData.seasonType}
            onChange={handleChange}
            className="!text-black mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="0">過去のアニメ</option>
            <option value="1">今期のアニメ</option>
          </select>
        </div>


        {isCurrentSeason && (
          <>
            <div>
              <label
                htmlFor="ReleaseDate"
                className="block text-sm font-medium text-black"
              >
                配信開始日
              </label>
              <input
                type="date"
                id="ReleaseDate"
                name="ReleaseDate"
                value={formData.ReleaseDate}
                onChange={handleChange}
                className="!text-black mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="deliveryWeekday"
                className="block text-sm font-medium text-black"
              >
                配信曜日
              </label>
              <select
                id="deliveryWeekday"
                name="deliveryWeekday"
                value={formData.deliveryWeekday}
                onChange={handleChange}
                className="!text-black mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="1">月曜日</option>
                <option value="2">火曜日</option>
                <option value="3">水曜日</option>
                <option value="4">木曜日</option>
                <option value="5">金曜日</option>
                <option value="6">土曜日</option>
                <option value="7">日曜日</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="deliveryTime"
                className="block text-sm font-medium text-black"
              >
                配信時間
              </label>
              <input
                type="time"
                id="deliveryTime"
                name="deliveryTime"
                value={formData.deliveryTime}
                onChange={handleChange}
                className="!text-black mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </>
        )}

        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            登録
          </button>
        </div>
      </form>
    </div>
  );
};

export default AnimeRegistEntry;
