const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/janinezielman/Documents/Martinez/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/janinezielman/Documents/Martinez/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/janinezielman/Documents/Martinez/src/pages/index.js"))),
  "component---src-pages-preview-js": hot(preferDefault(require("/Users/janinezielman/Documents/Martinez/src/pages/preview.js"))),
  "component---src-templates-artist-js": hot(preferDefault(require("/Users/janinezielman/Documents/Martinez/src/templates/artist.js")))
}

