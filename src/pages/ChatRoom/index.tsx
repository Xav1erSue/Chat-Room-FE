import type { FC } from "react";
import ChatList from "./components/ChatList";
import Header from "./components/Header";
import Message from "./components/Message";

const ChatRoom: FC = () => {
  return (
    <div className="absolute w-full h-full">
      <Header />
      {/* main */}
      <div className="flex flex-row  justify-between bg-white">
        <ChatList />
        <Message />
      </div>
    </div>
  );
};
export default ChatRoom;
