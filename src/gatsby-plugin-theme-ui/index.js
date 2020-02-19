const breakpoints = [`400px`, `550px`, `750px`,`1000px`,`1200px`, `1600px`]

export default {
    breakpoints: breakpoints,
    colors: {
        text: '#000',
        background: 'fff',
        primary: '#006699',
        danger: '#ba0c2f',
        success: '#006341',
        purple: '#772583',
        black: '#000'
    },
    fonts: {
        body: '"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        heading: '"Open Sans Condensed", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
    },
    fontSizes: [
        12, 14, 16, 20, 24, 32, 48, 64
    ],
    fontWeights: {
        body: 400,
        heading: 700,
        bold: 700,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.125,
    },
    letterSpacings: {
        body: 'normal',
        caps: '0.2em',
    },
    mediaQueries: {
        xs: `@media (min-width ${breakpoints[0]})`,
        sm: `@media (min-width ${breakpoints[1]})`,
        md: `@media (min-width ${breakpoints[2]})`,
        lg: `@media (min-width ${breakpoints[3]})`,
        xl: `@media (min-width ${breakpoints[4]})`,
        xxl: `@media (min-width ${breakpoints[5]})`,
    },
    space: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72],
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