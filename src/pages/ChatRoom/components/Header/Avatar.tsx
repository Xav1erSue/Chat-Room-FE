import { FC } from "react";
import { useContext } from "react";
import { ChatRoomContext } from "../../store";

const Avatar: FC = props => {
  const { state } = useContext(ChatRoomContext);
  return (
    <div className="h-12 w-12 p-2 bg-yellow-500 rounded-full text-white font-semibold flex items-center justify-center">
      {state.username}
    </div>
  );
};
export default Avatar;
