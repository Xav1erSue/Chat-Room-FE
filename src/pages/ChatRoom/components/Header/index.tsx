import type { FC } from "react";
import { useContext } from "react";
import { ChatRoomContext } from "../../store";
import Avatar from "./Avatar";

const Header: FC = () => {
  const { state } = useContext(ChatRoomContext);
  return (
    <header className="px-5 py-5 flex justify-between items-center bg-white border-b-2 flex-none">
      <div className="font-semibold text-2xl">Chat Room</div>
      <div className="w-1/2 text-center font-semibold text-l">
        {state.chatRoom}
      </div>
      <Avatar />
    </header>
  );
};
export default Header;
