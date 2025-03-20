import { cva } from "@styled-system/css";

export const buttonStyle = cva({
  base: {
    textAlign: "center",
    fontSize: "md",
    rounded: "md",
  },
  variants: {
    size: {
      lg: {
        paddingX: "6",
        paddingY: "2",
      },
    },
    visual: {
      solid: {
        bg: "gray.800",
        color: "white",
        "&:hover": {
          bg: "gray.600",
        },
      },
      outline: {
        border: "1px solid",
        borderColor: "gray.800",
        color: "gray.800",
        "&:hover": {
          bg: "gray.200",
        },
      },
    },
  },
  defaultVariants: {
    size: "lg",
    visual: "outline",
  },
});
