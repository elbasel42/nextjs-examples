import { Suspense } from "react";
import { Post } from "../Post";
import { Refresh } from "../Refresh";

const HomePage = async () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Post postNum={1} />
      </Suspense>
      <Refresh />
    </>
  );
};
export default HomePage;
