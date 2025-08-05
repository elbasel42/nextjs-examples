import { getPost } from "@/app/getPost";

// Revalidate every hour
export const revalidate = 3600;

export const generateStaticParams = async () => {
  return [{ num: "1" }, { num: "2" }, { num: "3" }];
};

interface PostPageProps {
  params: Promise<{ num: string }>;
}
const PostPage = async ({ params }: PostPageProps) => {
  const { num } = await params;
  const post = await getPost(parseInt(num));
  return (
    <>
      <h1>Post ${num}</h1>
      {JSON.stringify(post)}
    </>
  );
};
export default PostPage;
