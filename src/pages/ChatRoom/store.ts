import { set, get } from "@/utils/storage";
import { createContext } from "react";
import type { IMessageInfo } from "./components/Message/types";

export const chatRoomInfo: IChatRoomInfo = {
  chatRoom: "Default ChatRoom",
  userInfo: get("userInfo") || {
    username: "defaultUser",
    avatar: "",
  },
  messages: get("messages") || ([] as IMessageInfo[]),
};

export const chatRoomReducer = (
  state: IChatRoomInfo,
  action: IChatRoomInfoAction
): IChatRoomInfo => {
  switch (action.type) {
    case "setUserInfo":
      return { ...state, userInfo: action.payload };
    case "setMessages":
      const newMessages = [...state.messages, action.payload];
      set(
        "messages",
        newMessages.filter(el => !el.isSystem)
      );
      return { ...state, messages: newMessages };
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
  userInfo: {
    username: string;
    avatar: string;
  };
  messages: IMessageInfo[];
}

type ActionType = "setChatRoom" | "setUserInfo" | "setMessages";

interface IChatRoomInfoAction {
  type: ActionType;
  payload?: any;
}

type IScheduleDispatch = (arg: { type: ActionType; payload?: any }) => void;
