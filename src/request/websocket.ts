import { IMessageInfo } from "../pages/ChatRoom/components/Message/types";

export default class Socket {
  public socket: WebSocket;
  constructor(
    url: string,
    onMessage: ((this: WebSocket, ev: MessageEvent) => any) | null
  ) {
    this.socket = new WebSocket(url);
    this.socket.onmessage = onMessage;
    this.socket.onopen = event => {
      console.log("连接已开启");
    };
    this.socket.onclose = event => {
      console.log("连接被关闭");
    };
  }
  send(message: IMessageInfo): void {
    if (this.socket.readyState == WebSocket.OPEN) {
      this.socket.send(JSON.stringify(message));
    } else alert("连接没有开启.");
  }
}
