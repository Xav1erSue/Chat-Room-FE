import Socket from "@/request/websocket";
export interface IMessageInfo {
  username: string;
  message: string;
  date: string;
  avatar: string;
  isSystem?: boolean;
}

export interface IMessageItemProps extends IMessageInfo {
  isSelf: boolean;
  isContinue: boolean;
}

export interface IMessageInputProps {
  ws: Socket;
}
