/**
 * https://system-ui.com/theme/
 */
const GlobalTheme = {
  colors: {
    primary: {
      lightest: "	hsl(182, 45%, 90%)",
      light: "hsl(182, 45%, 60%)",
      regular: "hsl(182, 45%, 50%)",
      dark: "hsl(182, 45%, 40%)",
      extradark: "hsl(182, 45%, 30%)",
      extralight: "hsl(182, 45%, 70)",
      // dark: "hsla(210, 80%, 40%, 1)",
      // regular: "hsla(210, 80%, 50%, 1)",
      // light: "hsla(210, 80%, 60%, 1)",
      // extralight: "hsla(210, 80%, 70%, 1)",
      // lightest: "hsla(210, 80%, 90%, 1)",
    },
    contrast: {
      regular: "white",
      inverse: {
        regular: "hsla(210, 80%, 20%, 1)",
      },
    },
    neutral: {
      light: "hsl(210, 25%, 95%)",
      regular: "hsl(210, 25%, 85%)",
      dark: "hsl(210, 25%, 55%)",
      darker: "hsl(210, 25%, 35%)",
    },
  },
  /* Default: Desktop monitors, 1501px and up */
  breakpoints: {
    laptops: "1500px",
    tablets: "1100px",
    phones: "550px",
  },
  fonts: {
    heading: '"Avenir Next", sans-serif',
    body: "system-ui, sans-serif",
    mono: "Menlo, monospace",
  },
  fontWeights: {
    light: "300",
    regular: "400",
    bold: "700",
  },
  space: {
    small: "4px",
    medium: "8px",
    large: "16px",
    xlarge: "32px",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem",
  },
} as const;

export const BP_PHONE_INT = 550;
export const BP_TABLET_INT = 1100;
export const BP_LAPTOP_INT = 1500;

export const BP_PHONE = "550px";
export const BP_TABLET = "1100px";
export const BP_LAPTOP = "1500px";

export const windowIsSmallerThanTablet = (windowX: number) =>
  windowX <= BP_PHONE_INT;
export const windowIsGreaterThanPhone = (windowX: number) =>
  windowX > BP_PHONE_INT;

export { GlobalTheme };
