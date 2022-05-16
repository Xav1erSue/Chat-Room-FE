import type { FC } from "react";
import type { IChatListItemProps } from "./types";

const ChatListItem: FC<IChatListItemProps> = props => {
  return (
    <div
      className={`flex flex-row py-4 px-2 justify-center items-center border-b-2 ${
        props.isFocus ? "border-l-4 border-blue-400" : ""
      }`}
    >
      <div className="w-1/4">
        <img
          src={props.avatar}
          className="object-cover h-12 w-12 rounded-full"
          alt=""
        />
      </div>
      <div className="w-full">
        <div className="text-lg font-semibold">{props.username}</div>
        <span className="text-gray-500">{props.lastContent}</span>
      </div>
    </div>
  );
};

export default ChatListItem;
