"use client";

import { useState } from "react";
import Content from "./component/layout/content";
import Tab from "./component/layout/tab";
import { IContent } from './component/data/interface';

export default function Home() {
  const tabContent: Array<IContent> = [
    { content: "regist", contentName: "アニメ登録" },
    { content: "current", contentName: "現在アニメ" },
    { content: "past", contentName: "過去アニメ" },
    { content: "watched", contentName: "視聴済み" }
  ];

  const [selectContent, setSelectContent] = useState<IContent>(tabContent[0]);

  const onTabClick = (content: IContent) => {
    setSelectContent(content);
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-pink-50 to-blue-50">
      <div className="tab-container flex justify-around items-center h-1/8 bg-pink-100 shadow-lg rounded-b-lg">
        <Tab tabContent={tabContent} onReturn={onTabClick} />
      </div>
      <div className="content-container flex justify-center items-center h-full bg-white p-6 rounded-t-lg shadow-inner">
        <Content content={selectContent.content} />
      </div>
    </div>
  );
}
