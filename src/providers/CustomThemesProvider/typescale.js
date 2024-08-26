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
