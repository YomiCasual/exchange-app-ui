import palette from "./palette";

const textColor = palette.quizzy["primary-text"];

const typography = {
  body1: {
    color: textColor,
    fontWeight: 400,
  },
  body2: {
    color: textColor,
    fontWeight: 400,
  },
  caption: {
    color: textColor,
    fontWeight: 400,
  },
  fontFamily: ["Inter", "sans-serif"].join(","),
  fontSize: 14,
  h1: {
    color: textColor,
    fontWeight: 700,
  },
  h2: {
    color: textColor,
    fontWeight: 700,
  },
  h3: {
    color: textColor,
    fontWeight: 600,
  },
  h4: {
    color: textColor,
    fontWeight: 500,
  },
  h5: {
    color: textColor,
    fontWeight: 500,
  },
  h6: {
    color: textColor,
    fontWeight: 400,
  },
  overline: {
    color: textColor,
  },
  subtitle1: {
    color: textColor,
  },
  subtitle2: {
    color: textColor,
  },
};

export default typography;
