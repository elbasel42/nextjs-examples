import { cookies } from "next/headers";

const DynamicCookiePage = async () => {
  const cookieStore = await cookies();
  const testCookie = cookieStore.get("test")?.value;

  return (
    <main>
      <h1>Dynamic Cookie Page</h1>
      <p>
        This page is opted out of static generation at build time because it
        reads a cookies from the request header
      </p>
      <p>CookieValue: {testCookie}</p>
    </main>
  );
};

export default DynamicCookiePage;
