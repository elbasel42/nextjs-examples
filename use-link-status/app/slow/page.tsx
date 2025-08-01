import { sleep } from "../sleep";

const SlowPage = async () => {
  await sleep(5);
  return (
    <>
      <h1>Slow Page</h1>
    </>
  );
};

export default SlowPage;
