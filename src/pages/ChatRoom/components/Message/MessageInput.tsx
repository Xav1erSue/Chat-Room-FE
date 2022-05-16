import type { FC } from "react";

const MessageInput: FC = props => {
  return (
    <section
      className="py-2 px-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus-within:(border-blue-500 ring-blue-500) flex"
      tabIndex={-1}
    >
      <input
        type="text"
        className="block outline-none bg-gray-50 w-full mr-4"
        placeholder="Type a message..."
        required
      />
      <button className="text-white bg-blue-700 rounded-lg text-sm px-4 py-2 btn-style-common">
        Send
      </button>
    </section>
  );
};

export default MessageInput;
