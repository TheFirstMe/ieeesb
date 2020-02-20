const system = [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "Noto Sans",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji",
]
const sans = system
const body = ["Open Sans", ...system]
const heading = ["Open Sans Condensed", ...system]

const monospace = [
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace",
]
const serif = ["Georgia", "Times New Roman", "Times", "serif"]

const breakpoints = [`400px`, `550px`, `750px`, `1000px`, `1200px`, `1600px`]
const colors = {
    text: '#000',
    background: 'fff',
    primary: '#006699',
    danger: '#ba0c2f',
    success: '#006341',
    purple: '#772583',
    black: '#000',
    header: '#000',
}
const fonts = {
    body: body.join(", "),
    heading: heading.join(", "),
    system: system.join(", "),
    monospace: monospace.join(", "),
    serif: serif.join(", "),
}
const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64]
const fontWeights = {
    body: 400,
    heading: 700,
    bold: 700,
}
const lineHeights = {
    body: 1.5,
    heading: 1.125,
}
const letterSpacings = {
    body: 'normal',
    caps: '0.2em',
}
const mediaQueries = {
    xs: `@media (min-width ${breakpoints[0]})`,
    sm: `@media (min-width ${breakpoints[1]})`,
    md: `@media (min-width ${breakpoints[2]})`,
    lg: `@media (min-width ${breakpoints[3]})`,
    xl: `@media (min-width ${breakpoints[4]})`,
    xxl: `@media (min-width ${breakpoints[5]})`,
}
const space = [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72]

export {
    breakpoints,
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    letterSpacings,
    mediaQueries,
    space
}
export default {
    breakpoints: breakpoints,
    colors: colors,
    fonts: fonts,
    fontSizes: fontSizes,
    fontWeights: fontWeights,
    lineHeights: lineHeights,
    letterSpacings: letterSpacings,
    mediaQueries: mediaQueries,
    space: space,
    styles: {
        root: {
            fontFamily: 'body',
            fontWeight: 'body',
            lineHeight: 'body',
        },
        h1: {
            fontFamily: 'heading'
        }
    }
}