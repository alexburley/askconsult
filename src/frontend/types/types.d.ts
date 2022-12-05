// import original module declarations
import "styled-components";

import React from "react";

export interface BaseProps {
  className?: string;
  id?: string;
}

export interface BasePropsWithChildren extends BaseProps {
  children?: React.ReactNode;
}

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: {
        dark: string;
        regular: string;
        light: string;
        extralight: string;
        extradark: string;
        lightest: string;
      };
      contrast: {
        regular: string;
        inverse: {
          regular: string;
        };
      };
      neutral: {
        light: string;
        regular: string;
        dark: string;
        darker: string;
      };
    };
    fonts: {
      body: string;
      mono: string;
    };
    space: {
      small: string;
      medium: string;
      large: string;
      xlarge: string;
    };
    fontSizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
      "3xl": string;
      "4xl": string;
      "5xl": string;
      "6xl": string;
    };
    fontWeights: {
      light: string;
      regular: string;
      bold: string;
    };
  }
}
