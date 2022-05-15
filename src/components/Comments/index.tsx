import type { FC } from "react";
import type { ICommentProps } from "./types";
import { transformCommentDate } from "@/utils/transformers";

const Comments: FC<ICommentProps> = props => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-white dark:bg-gray-800">
      <div className="bg-white dark:bg-gray-800 text-black dark:text-gray-200 p-4 antialiased flex max-w-lg">
        <img
          className="rounded-full h-8 w-8 mr-2 mt-1 "
          src={props.avatar ?? "https://picsum.photos/id/1027/200/200"}
        />
        <div>
          <div className="bg-gray-100 dark:bg-gray-700 rounded-3xl px-4 pt-2 pb-2.5">
            <div className="font-semibold text-sm leading-relaxed">
              {props.username}
            </div>
            <div className="text-normal leading-snug md:leading-normal">
              {props.message}
            </div>
          </div>
          <div className="text-sm ml-4 mt-0.5 text-gray-500 dark:text-gray-400">
            {transformCommentDate(props.date)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
