"use server";

// import { cookies } from "next/headers";
import { sleep } from "./utils/sleep";

type ReturnType = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export const getPost = async (postNum: number): Promise<ReturnType> => {
  await sleep(3);
  // const cookieStore = await cookies();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const testCookie = cookieStore.get("test")?.value;

  const url = `https://jsonplaceholder.typicode.com/posts/${postNum}`;
  const response = await fetch(url);
  const json = await response.json();
  // console.log({
  //   headers: response.headers,
  //   status: response.status,
  //   statusText: response.statusText,
  //   ok: response.ok,
  // });
  return json;
};
