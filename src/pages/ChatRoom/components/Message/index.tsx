import type { FC } from "react";
import { useMemo, useEffect } from "react";
import MessageItem from "./MessageItem";
import MessageInput from "./MessageInput";
import { useContext } from "react";
import { ChatRoomContext } from "../../store";
import Socket from "@/request/websocket";
import type { IMessageInfo } from "./types";

const Message: FC = () => {
  const { state, dispatch } = useContext(ChatRoomContext);

  const ws = useMemo(() => {
    return new Socket("wss://chatroomws.xav1er.com/", e => {
      const data: IMessageInfo = JSON.parse(e.data);
      dispatch({ type: "setMessages", payload: data });
    });
  }, []);
  const messageWindow = document.querySelector("#messageWindow");
  useEffect(() => {
    if (messageWindow) {
      messageWindow.scrollTop = messageWindow.scrollHeight;
    }
  }, [state.messages]);

  return (
    <section className="flex-1 flex flex-col justify-between">
      <div
        id="messageWindow"
        className="flex-[1_1_0] flex flex-col overflow-y-auto"
      >
        {state.messages.map((item, index) =>
          item.isSystem ? (
            <section
              key={index}
              className="w-full px-4 py-2 flex justify-center"
            >
              <span className="py-1 px-4 rounded-lg text-center text-black text-xs bg-gray-200">
                系统提示：{item.message}
              </span>
            </section>
          ) : (
            <MessageItem
              key={index}
              {...item}
              isSelf={item.username === state.userInfo.username}
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
