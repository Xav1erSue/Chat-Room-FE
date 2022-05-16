import type { FC } from "react";
import type { IChatListItemProps } from "./types";

const ChatListItem: FC<IChatListItemProps> = props => {
  return (
    <div
      className={`flex flex-row py-4 px-2 justify-center items-center border-b-2 ${
        props.isFocus ? "border-l-blue-500 border-l-4" : ""
      }`}
    >
      <div className="w-1/4 mr-2">
        <img src={props.avatar} className="h-10 w-10 rounded-1/2" />
      </div>
      <div className="w-full">
        <div className="text-lg font-semibold">{props.username}</div>
        <span className="text-gray-500">{props.lastContent}</span>
      </div>
    </div>
  );
};

export default ChatListItem;
