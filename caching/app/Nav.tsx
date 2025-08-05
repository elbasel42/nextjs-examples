import Link from "next/link";

const links = [
  "/home",
  "/alpha",
  "/proxy",
  "proxied-page",
  "client-server",
  "fetch-uncached",
  "fetch-cached",
  "dynamic-cookie",
];

export const Nav = () => {
  return (
    <div className="p-4">
      <p>
        some of the below links are `prefetched` and cached to the client-side
        nextjs router cache nextjs router cache, once a link comes into the
        viewport, nextjs prefetches all static route segments which makes
        navigating to them instant. if the route segment is dynamic, next only
        partially prefetched as long as there is a loading.tsx in the route
        segment tree.
      </p>
      <p>
        Dynamic route segments with no loading.tsx must wait for server side
        rendering to finish to render on the client. By using loading.tsx or
        &lt;Suspese /&gt; you enable partial prefetching, instant navigation and
        streaming
      </p>
      <nav className="border border-white rounded-lg py-2 px-4 flex justify-center">
        <ul className="flex gap-2 flex-wrap">
          {links.map((l) => {
            return (
              <li
                key={l}
                className="min-w-max border border-white rounded-lg px-2 py-1 cursor-pointer text-sm"
              >
                <Link href={l}>{l}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
