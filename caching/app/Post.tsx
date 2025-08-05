import { getPost } from "./getPost";

export const Post = async ({ postNum = 1 }) => {
  const { body, id, title, userId } = await getPost(postNum);

  return (
    <main className="space-y-4">
      <p>Id: {id}</p>
      <p>title: {title}</p>
      <p>body: {body}</p>
      <p>userId: {userId}</p>
    </main>
  );
};
