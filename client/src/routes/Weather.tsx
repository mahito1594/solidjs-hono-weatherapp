import { A, createAsync, useParams } from "@solidjs/router";
import { css } from "@styled-system/css";
import { ErrorBoundary, Suspense } from "solid-js";
import WeatherIcon from "../components/WeatherIcon";
import { getWeather } from "../queries/weather";

type WeatherCardProps = Partial<{
  weather: { main: string; icon: string; description: string };
  temperture: number;
}>;
const WeatherCard = (props: WeatherCardProps) => {
  return (
    <div class={css({ display: "grid", justifyItems: "center", alignItems: "center" })}>
      <WeatherIcon iconCode={props.weather?.icon} alt={props.weather?.description} />
      <p>{props.weather?.main}</p>
      <p>Temp: {props.temperture?.toFixed(1)} ℃</p>
    </div>
  );
};

const Weather = () => {
  const params = useParams();
  const weather = createAsync(() => getWeather(params.city));

  return (
    <div>
      <h2 class={css({ fontSize: "2xl", textAlign: "center" })}>{params.city.toUpperCase()}</h2>
      <ErrorBoundary
        fallback={() => (
          <div class={css({ textAlign: "center", marginY: "4" })}>
            <p>Something went wrong.</p>
            <A href="/">BACK TO HOME</A>
          </div>
        )}
      >
        <Suspense fallback={<p>Loading...</p>}>
          <WeatherCard {...weather()} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Weather;
