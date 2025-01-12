"use client";

import { useState } from "react";
import Content from "./component/layout/content";
import LoginEntry  from "./component/login/loginEntry";
import Tab from "./component/layout/tab";
import { IContent } from "./component/data/interface";
import { ContentArray } from "./component/data/content";
  
export default function Home() {
  const tabContent: Array<IContent> = ContentArray;

  const [selectContent, setSelectContent] = useState<IContent>({content:"title",contentName:"タイトル"});
  const [beforeLogin,isBeforeLogin] = useState<boolean>(false);


  const onTabClick = (content: IContent) => {
    setSelectContent(content);
  };

  if(beforeLogin){
    return (<LoginEntry></LoginEntry>)
  }

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-green-400 via-teal-300 to-blue-500 !bg-none">
    <div className="tab-container flex justify-around items-center h-1/8 bg-green-300 shadow-lg rounded-b-lg invert">
      <Tab tabContent={tabContent} onReturn={onTabClick} />
    </div>
    <div className="content-container flex justify-center items-center h-full bg-gradient-to-br from-green-400 via-teal-300 to-blue-500 text-white p-6 rounded-t-lg shadow-lg">
      <div className="flex justify-center items-center p-8 bg-gray-100 bg-opacity-50 min-h-full min-w-full">
        <Content content={selectContent.content} />
      </div>
    </div>
  </div>

  );
}
