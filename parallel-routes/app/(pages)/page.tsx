import Link from "next/link";

const HomePage = () => {
  return (
    <main>
      <h1>Homepage</h1>
      <div className="flex gap-2">
        <Link href="/basic">basic</Link>
        <Link href="/nested">nested</Link>
        <Link href="/conditional">condiational</Link>
        <Link href="/tabs">tabs</Link>
        <Link href="/modal">modal</Link>
      </div>
    </main>
  );
};

export default HomePage;
