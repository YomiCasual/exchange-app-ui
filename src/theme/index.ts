// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import {
  createTheme,
  responsiveFontSizes,
  adaptV4Theme,
} from "@mui/material/styles";
import { Theme } from "@mui/system";

import palette from "./palette";
import breakpoints from "./breakpoints";
import typography from "./typography";
import overrides from "./overrides";

declare module "@mui/styles" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
  interface Palette {
    danger: Palette["primary"];
    quiz: keyof typeof palette["quiz"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    danger?: PaletteOptions["primary"];
    quiz: keyof typeof palette["quiz"];
  }
}

// Update the Button's color prop options
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    danger: true;
  }
}

const theme = createTheme(
  adaptV4Theme({
    breakpoints,
    palette,
    typography,
    overrides,
    spacing: 6,
  })
);

const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;
