import Typography from "typography"
import { colors, lineHeights, fonts } from "../design-tokens/theme"

const _options = {
  // typography.js expects an array, theme-ui a CSS prop value
  bodyFontFamily: fonts.system.split(`, `),
  headerFontFamily: fonts.heading.split(`, `),
  baseLineHeight: lineHeights.body,
  headerLineHeight: lineHeights.heading,
  headerColor: colors.heading,
  bodyColor: colors.text,
  googleFonts: [
    {
      name: 'Open Sans',
      styles: [],
    },
    {
      name: 'Open Sans Condensed',
      styles: [
        '700',
      ],
    },
  ],
}

const typography = new Typography(_options)

export const { scale, rhythm, options } = typography
export default typography

