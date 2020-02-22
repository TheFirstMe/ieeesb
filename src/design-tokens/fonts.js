import preval from "preval.macro"

const f = preval`
  const system = body = [
    "Open Sans",
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

  const sans = inter = ["Inter", ...system]

  const heading = brand = ["Open Sans Condensed", ...system]
  
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

  const fonts = { body, system, sans, heading, brand, monospace, serif }

  let fontsStrings = {}
  for (const fontFamily in fonts) {
    fontsStrings[fontFamily] = fonts[fontFamily].join(", ")
  }
  
  module.exports = { fonts, fontsStrings }
`

export const fonts = f.fontsStrings
export const fontsLists = f.fonts