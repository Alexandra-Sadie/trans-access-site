const fontFamily = "Poppins";
const fontWeightLight = 300;
const fontWeightRegular = 400;
const fontWeightMedium = 500;
// note: this is commented because not used but we keep it for future use
// const fontWeightBold = 700;

// TODO better name for this function
const calculateFontValues = (letterSpacingPixelValue, fontSizePixelValue) => {
  // ? could be better to pass base font size explicitly (curry maybe?)
  const BASE_FONT_SIZE = 16;
  // TODO revisit this comment to make it make sense
  // https://mui.com/material-ui/customization/default-theme/
  // MUI theme docs has the letterSpacing as ems, not rems -- this means that the em is techically relative to the fontSize, aka the spacing will change slightly as the font size changes. we could do this -- it would apply if we ever decide to change the fontSize value of a typography element and want the letter spacing to adapt to it.
  return {
    fontSize: `${fontSizePixelValue / BASE_FONT_SIZE}rem`,
    letterSpacing: `${(letterSpacingPixelValue / fontSizePixelValue).toFixed(
      5
    )}em`,
  };
};

// TODO comment this -- take from customthemesprovider
const typescale = {
  fontFamily,
  h1: {
    fontWeight: fontWeightLight,
    lineHeight: 1.2,
    ...calculateFontValues(-0.5, 58),
  },
  h2: {
    fontWeight: fontWeightRegular,
    lineHeight: 1.235,
    ...calculateFontValues(0.25, 33),
  },
  h3: {
    fontWeight: fontWeightMedium,
    lineHeight: 1.6,
    ...calculateFontValues(0.15, 19),
  },
  // we're disables h4-h6 because we don't plan to use headers that deep, and feels against general semantics best practices to do so. we're disabling them to ensure that this remains the case
  // https://mui.com/material-ui/customization/typography/#adding-amp-disabling-variants
  h4: undefined,
  h5: undefined,
  h6: undefined,
  subtitle1: {
    fontWeight: fontWeightRegular,
    // lineHeight: 1.75
    ...calculateFontValues(0.15, 16),
  },
  subtitle2: {
    fontWeight: fontWeightMedium,
    // lineHeight: 1.57
    ...calculateFontValues(0.1, 14),
  },
  body1: {
    fontWeight: fontWeightRegular,
    // lineHeight: 1.5
    ...calculateFontValues(0.5, 16),
  },
  body2: {
    fontWeight: fontWeightRegular,
    // lineHeight: 1.43
    ...calculateFontValues(0.25, 14),
  },
  button: {
    fontWeight: fontWeightMedium,
    // lineHeight: 1.75
    ...calculateFontValues(1.25, 14),
    // textTransform: "uppercase"
  },
  caption: {
    fontWeight: fontWeightRegular,
    // lineHeight: 1.66
    ...calculateFontValues(0.4, 12),
  },
  overline: {
    fontWeight: fontWeightRegular,
    // lineHeight: 2.66
    ...calculateFontValues(1.5, 10),
    // textTransform: "uppercase"
  },
};

export default typescale;
