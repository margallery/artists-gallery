const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/theodoreford/Documents/01_projects/martinez/02_dev/03_react_v2/Martinez/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/theodoreford/Documents/01_projects/martinez/02_dev/03_react_v2/Martinez/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/theodoreford/Documents/01_projects/martinez/02_dev/03_react_v2/Martinez/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/theodoreford/Documents/01_projects/martinez/02_dev/03_react_v2/Martinez/src/pages/index.js"))),
  "component---src-pages-preview-js": hot(preferDefault(require("/Users/theodoreford/Documents/01_projects/martinez/02_dev/03_react_v2/Martinez/src/pages/preview.js"))),
  "component---src-templates-artist-js": hot(preferDefault(require("/Users/theodoreford/Documents/01_projects/martinez/02_dev/03_react_v2/Martinez/src/templates/artist.js")))
}

