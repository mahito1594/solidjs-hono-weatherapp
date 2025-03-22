import { A, createAsync } from "@solidjs/router";
import { css } from "@styled-system/css";
import { For, Suspense } from "solid-js";
import { getCities } from "../queries/city";

const CityCard = (props: { cityName: string }) => {
  return (
    <A href={`/weather/${props.cityName.toLowerCase()}`}>
      <button
        type="button"
        class={css({
          width: "full",
          marginLeft: "4",
          marginY: "2",
          border: "1px solid",
          borderRadius: "lg",
          borderColor: "gray.800",
          padding: "4",
          "&:hover": {
            backgroundColor: "gray.200",
          },
        })}
      >
        {props.cityName}
      </button>
    </A>
  );
};

const Home = () => {
  const cities = createAsync(() => getCities());
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ul>
        <For each={cities()?.cities}>
          {(city) => (
            <li>
              <CityCard cityName={city.name} />
            </li>
          )}
        </For>
      </ul>
    </Suspense>
  );
};

export default Home;
