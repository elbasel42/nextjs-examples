export const sleep = async (seconds: number) => {
  return new Promise((resolve) => {
    setInterval(resolve, seconds * 1000);
  });
};
