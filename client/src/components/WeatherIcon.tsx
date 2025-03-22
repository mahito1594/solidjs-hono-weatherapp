import { css } from "@styled-system/css";
import { mergeProps } from "solid-js";

export type WeatherIconProps = Partial<{
  iconCode: string;
  alt: string;
  size: "small" | "medium" | "large";
}>;

const WeatherIcon = (props: WeatherIconProps) => {
  const defaultValues = { iconCode: "01d", alt: "The icon for current weather", size: "medium" } as const;
  const mergedProps = mergeProps(defaultValues, props);

  const sizes = {
    small: "50px",
    medium: "100px",
    large: "150px",
  };

  return (
    <img
      src={`https://openweathermap.org/img/wn/${mergedProps.iconCode}@2x.png`}
      alt={mergedProps.alt}
      class={css({ width: sizes[mergedProps.size], height: sizes[mergedProps.size] })}
    />
  );
};

export default WeatherIcon;
