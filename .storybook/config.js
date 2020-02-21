import { configure, addDecorator, addParameters } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import React from "react"
import { ThemeProvider } from "theme-ui"
import theme from "../src/gatsby-plugin-theme-ui"
import typography from "../src/utils/typography"
import { TypographyStyle, GoogleFont } from 'react-typography'

// automatically import all files ending in *.stories.js
// configure(require.context("../src", true, /\.stories\.js$/), module)

addDecorator((story) => (
    <ThemeProvider theme={theme}>
        <TypographyStyle typography={typography} />
        <GoogleFont typography={typography} />
        {story()}
    </ThemeProvider>
))


// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
    enqueue: () => { },
    hovering: () => { },
}
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ""
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
    action("NavigateTo:")(pathname)
}