import { useState } from "react";
import type { FC } from "react";
import type { IChatListItemProps } from "./types";
import ChatListSearch from "./ChatListSearch";
import ChatListItem from "./ChatListItem";

const ChatList: FC = () => {
  const [chatList, setChatList] = useState([
    {
      avatar: "https://source.unsplash.com/L2cxSuKWbpo/600x600",
      username: "Xav1er",
      lastContent: "hhhhhh",
      isFocus: false,
    },
    {
      avatar: "https://source.unsplash.com/L2cxSuKWbpo/600x600",
      username: "S1mple",
      lastContent: "why u bully me?",
      isFocus: true,
    },
  ] as IChatListItemProps[]);

  return (
    <div className="flex flex-col border-r-2 overflow-y-auto">
      <ChatListSearch />
      {chatList.map((item, index) => (
        <ChatListItem key={index} {...item} />
      ))}
    </div>
  );
};

export default ChatList;
