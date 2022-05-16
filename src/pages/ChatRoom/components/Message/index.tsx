import type { FC } from "react";
import MessageItem from "./MessageItem";
import MessageInput from "./MessageInput";
import { IMessageItemProps } from "./types";

const Message: FC = () => {
  const messages = [
    {
      isSelf: false,
      avatar: "https://source.unsplash.com/vpOeXr5wmR4/600x600",
      message: "ah",
      username: "Xav1er",
      date: "Sun May 15 2022 22:17:29 GMT+0800 (中国标准时间)",
    },
    {
      isSelf: true,
      avatar: "https://source.unsplash.com/vpOeXr5wmR4/600x600",
      message: "wft?",
      username: "someone",
      date: "Sun May 15 2022 22:22:29 GMT+0800 (中国标准时间)",
    },
  ] as IMessageItemProps[];
  return (
    <div className="w-full m-5 flex flex-col justify-between">
      <div className="flex flex-col ">
        {messages.map((item, index) => (
          <MessageItem key={index} {...item} />
        ))}
        <MessageInput />
      </div>
    </div>
  );
};

export default Message;
