import type { FC } from "react";
import Comments from "./components/Comments/index";

const App: FC = () => {
  return (
    <Comments
      username="Xav1er"
      message="Hello World!"
      date="Sun May 16 2022 00:20:29 GMT+0800 (中国标准时间)"
    />
  );
};

export default App;
