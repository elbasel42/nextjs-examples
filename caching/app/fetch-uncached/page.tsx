const url = `https://jsonplaceholder.typicode.com/posts/1`;

const BetaPage = async () => {
  const response = await fetch(url);
  const json = await response.json();
  const title = json.title;
  return (
    <main>
      <h1>Fetch Uncached</h1>
      This page is dynamiclly rendered because it has an uncached fetch request,
      to opt it back in into static regenration we must set the{" "}
      {'{cache: "force-cache"}'} on the fetch call optioiins
      <p className="border border-white rounded-xl py-2 px-4 ">
        Post Title: {title}
      </p>
    </main>
  );
};

export default BetaPage;
