import {
  breakpointsArray as breakpoints,
  colors as colorsTokens,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  mediaQueries,
  space,
} from "./index"

// gatsby-theme-ui-theme-default
// provides a theme-ui theme using gatsby-design-tokens

// colors
// extend colors with theme-ui required keys
// https://theme-ui.com/theme-spec#color
const c = {
  ...colorsTokens,
  // Body foreground color
  // overwrite what's currently in _colors_ from _gatsby-design-tokens_
  // also see _heading_ key below
  text: colorsTokens.grey[80], // colors.text.primary
  // Body background color
  background: colorsTokens.white,
  // Primary brand color for links, buttons, etc.
  primary: colorsTokens.blue[90],
  // A secondary brand color for alternative styling
  secondary: colorsTokens.purple[40],
  // A contrast color for emphasizing UI
  accent: colorsTokens.orange[60],
  // A faint color for backgrounds, borders, and accents that do not require high contrast with the background color
  muted: colorsTokens.grey[5],
  // end Theme-UI required keys

  // gatsby-design-tokens has the following in colors.text,
  // which conflicts with theme-ui's default color _text_
  // making text.header and text.secondary available as
  // _heading_ and _textMuted_ resolves that
  heading: colorsTokens.text.header, // text.header
  textMuted: colorsTokens.text.secondary, // text.secondary
  navigation: {
    linkDefault: colorsTokens.black,
    linkHover: colorsTokens.grey[20],
    metaLinkHover: colorsTokens.blue[70],
    linkActive: colorsTokens.blue[90],
    background: colorsTokens.grey[20],
  }
}

export const theme = {
  breakpoints: breakpoints,
  colors: c,
  fonts: fonts,
  fontSizes: fontSizes,
  fontWeights: fontWeights,
  letterSpacings: letterSpacings,
  lineHeights: lineHeights,
  mediaQueries: mediaQueries,
  space: space,
  sizes: {
    containerSizes: [null, null, 514, 702, 968, 1140],
    container: `100%`
  }
}

export {
  c as colors,
  breakpoints,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  mediaQueries,
  space,
}