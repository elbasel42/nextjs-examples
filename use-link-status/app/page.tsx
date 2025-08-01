import Link from "next/link";
import Loader from "./components/Loader";

const Home = () => {
  return (
    <main>
      <h1>HomePage</h1>
      <Link href="/slow">
        Slow Page
        <Loader />
      </Link>
    </main>
  );
};

export default Home;
