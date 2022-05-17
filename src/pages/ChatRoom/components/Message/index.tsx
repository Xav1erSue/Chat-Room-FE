import type { FC } from "react";
import MessageItem from "./MessageItem";
import MessageInput from "./MessageInput";
import { IMessageItemProps } from "./types";

const Message: FC = () => {
  const messages = [
    {
      isSelf: true,
      message: "你好",
      username: "Xav1er",
      date: "Sun May 15 2022 22:17:29 GMT+0800 (中国标准时间)",
    },
    {
      isSelf: true,
      message: "请问您是哪位？",
      username: "Xav1er",
      date: "Sun May 15 2022 22:22:29 GMT+0800 (中国标准时间)",
    },
    {
      isSelf: false,
      message: "wft?",
      username: "someone",
      date: "Sun May 15 2022 22:22:29 GMT+0800 (中国标准时间)",
    },
    {
      isSelf: false,
      message: "你不知道我是谁吗？",
      username: "someone",
      date: "Sun May 15 2022 22:22:29 GMT+0800 (中国标准时间)",
    },
    {
      isSelf: true,
      message: "我真不知道……",
      username: "Xav1er",
      date: "Sun May 15 2022 22:17:29 GMT+0800 (中国标准时间)",
    },
  ] as IMessageItemProps[];

  return (
    <section className="flex-1 flex flex-col justify-between">
      <div className="flex-[1_1_0] flex flex-col overflow-y-auto">
        {messages.map((item, index) => (
          <MessageItem
            key={index}
            {...item}
            isContinue={
              index > 0 &&
              messages[index].username === messages[index - 1].username
            }
          />
        ))}
      </div>
      <MessageInput />
    </section>
  );
};

export default Message;
