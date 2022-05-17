import { get } from "@/utils/storage";
import { createContext } from "react";
import type { IMessageInfo } from "./components/Message/types";

export const chatRoomInfo: IChatRoomInfo = {
  chatRoom: "Default ChatRoom",
  username: get("username") || "Default User",
  messages: get("messages") || ([] as IMessageInfo[]),
};

export const chatRoomReducer = (
  state: IChatRoomInfo,
  action: IChatRoomInfoAction
): IChatRoomInfo => {
  switch (action.type) {
    case "setUserName":
      return { ...state, username: action.payload };
    case "setMessages":
      const newArr = [...state.messages, action.payload];
      return { ...state, messages: newArr };
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
  messages: IMessageInfo[];
}

type ActionType = "setChatRoom" | "setUserName" | "setMessages";

interface IChatRoomInfoAction {
  type: ActionType;
  payload?: any;
}

type IScheduleDispatch = (arg: { type: ActionType; payload?: any }) => void;
