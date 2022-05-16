import type { FC } from "react";

const MessageInput: FC = props => {
  return (
    <div className="py-5">
      <input
        className="w-full bg-gray-300 py-5 px-3 rounded-xl"
        type="text"
        placeholder="type your message here..."
      />
    </div>
  );
};

export default MessageInput;
