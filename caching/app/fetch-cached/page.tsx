const url = `https://jsonplaceholder.typicode.com/posts/1`;

const FetchCachedPage = async () => {
  const response = await fetch(url, {
    cache: "force-cache",
    // Cache invalidates every hour.
    next: { revalidate: 3600 },
  });
  const json = await response.json();
  const title = json.title;
  return (
    <main>
      <h1>Fetch ached</h1>
      <p>
        {" "}
        This page has a cached fetch call so it is opted in to static generatio
        at build time, if the fetch call was not cached, this page will have
        been opted in to dynamic server rendering at request time
      </p>
      <p className="border border-white rounded-xl py-2 px-4 ">
        Post Title: {title}
      </p>
    </main>
  );
};

export default FetchCachedPage;
