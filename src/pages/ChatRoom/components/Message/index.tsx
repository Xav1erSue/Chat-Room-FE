import type { FC } from "react";
import { useMemo } from "react";
import MessageItem from "./MessageItem";
import MessageInput from "./MessageInput";
import { useContext, useEffect, useState } from "react";
import { ChatRoomContext } from "../../store";
import Socket from "@/request/websocket";
import type { IMessageInfo } from "./types";

const Message: FC = () => {
  const { state, dispatch } = useContext(ChatRoomContext);
  const ws = useMemo(() => {
    return new Socket("ws://localhost:8080/", e => {
      const data: IMessageInfo = JSON.parse(e.data);
      dispatch({ type: "setMessages", payload: data });
    });
  }, []);

  return (
    <section className="flex-1 flex flex-col justify-between">
      <div className="flex-[1_1_0] flex flex-col overflow-y-auto">
        {state.messages?.map((item, index) =>
          item.isSystem ? (
            <section key={index} className="w-full px-4 py-2">
              <div className="text-center text-black antialiased">
                系统提示：{item.message}
              </div>
            </section>
          ) : (
            <MessageItem
              key={index}
              {...item}
              isSelf={item.username === state.username}
              isContinue={
                index > 0 &&
                state.messages[index].username ===
                  state.messages[index - 1].username
              }
            />
          )
        )}
      </div>
      <MessageInput ws={ws} />
    </section>
  );
};

export default Message;
