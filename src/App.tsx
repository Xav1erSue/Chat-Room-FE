import type { FC } from "react";
import Comments from "./components/Comments/index";

const App: FC = () => {
  return (
    <Comments
      username="Xav1er"
      message="Hello World!"
      date="Sun May 15 2022 23:55:29 GMT+0800 (中国标准时间)"
    />
  );
};

export default App;
