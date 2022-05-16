import { createContext } from "react";

export const chatRoomInfo: IChatRoomInfo = {
  chatRoom: "Default ChatRoom",
  username: "Default User",
};

export const chatRoomReducer = (
  state: IChatRoomInfo,
  action: IChatRoomInfoAction
): IChatRoomInfo => {
  switch (action.type) {
    case "switchChatRoom":
      return { ...state, chatRoom: action.payload };
    default:
      throw new Error();
  }
};

export const ChatRoomContext = createContext({
  state: {} as IChatRoomInfo,
  dispatch: {} as IScheduleDispatch,
});

interface IChatRoomInfo {
  chatRoom: string;
  username: string;
}

type ActionType = "switchChatRoom";

interface IChatRoomInfoAction {
  type: ActionType;
  payload?: any;
}

type IScheduleDispatch = (arg: { type: ActionType; payload?: any }) => void;
