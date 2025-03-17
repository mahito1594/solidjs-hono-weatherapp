import { A } from "@solidjs/router";

const Home = () => {
  return (
    <>
      <h1>Hono and SolidJS</h1>
      <div>
        <ul>
          <li>
            <A href="/">Home</A>
          </li>
          <li>
            <A href="/counter">Counter</A>
          </li>
          <li>
            <A href="/clock">Clock</A>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
