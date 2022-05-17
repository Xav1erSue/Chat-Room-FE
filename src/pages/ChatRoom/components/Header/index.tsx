import { set } from "@/utils/storage";
import type { FC } from "react";
import { useContext } from "react";
import { ChatRoomContext } from "../../store";

const Header: FC = () => {
  const { state, dispatch } = useContext(ChatRoomContext);

  const handleSetUsername = () => {
    const username = prompt("Enter your username");
    set("username", username);
    dispatch({ type: "setUserName", payload: username });
  };

  return (
    <header className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
      <div className="basis-1/3 font-semibold text-2xl">Chat Room</div>
      <div className="basis-1/3 text-center text-l">{state.chatRoom}</div>
      <div className="basis-1/3 flex justify-end">
        <div
          className="w-auto pb-2px font-semibold hover:(cursor-pointer pb-0 border-b-2 border-black) active:(transform scale-97)"
          onClick={handleSetUsername}
        >
          {state.username}
        </div>
      </div>
    </header>
  );
};
export default Header;
