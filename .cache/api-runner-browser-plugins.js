module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-web-font-loader/gatsby-browser.js'),
      options: {"plugins":[],"custom":{"families":["Stencil","Helvetica Neue LT Pro"],"urls":["/fonts/fonts.css"]}},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Website Name","short_name":"Website Name","start_url":"/","background_color":"#ffffff","theme_color":"#ffffff","display":"standalone","icon":"src/img/favicon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"0bab8ad8360e7882a92f8c6ee46f2cb0"},
    },{
      plugin: require('../node_modules/gatsby-source-prismic/gatsby-browser.js'),
      options: {"plugins":[],"repositoryName":"Martinez-Gallery","accessToken":"MC5ZSGdVUkJNQUFDTUFzcVB3.URLvv73vv73vv71FYe-_vWhUTu-_vV8a77-9Xu-_vUxbZe-_vQTvv73vv71wNwnvv71F77-9EO-_vQ","schemas":{"artist":{"Main":{"uid":{"type":"UID","config":{"label":"Artist Slug"}},"artist_title":{"type":"StructuredText","config":{"single":"heading1","label":"Artist Title"}},"index_image":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Index Image"}},"artist_year":{"type":"StructuredText","config":{"multi":"paragraph, preformatted, heading1, heading2, heading3, heading4, heading5, heading6, strong, em, hyperlink, image, embed, list-item, o-list-item, rtl","label":"Artist Year"}},"artist_location":{"type":"StructuredText","config":{"multi":"paragraph, preformatted, heading1, heading2, heading3, heading4, heading5, heading6, strong, em, hyperlink, image, embed, list-item, o-list-item, rtl","label":"Artist Location"}},"gallery":{"type":"Group","config":{"fields":{"artist_image":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Artist Image"}},"artist_image_year":{"type":"StructuredText","config":{"multi":"paragraph, preformatted, heading1, heading2, heading3, heading4, heading5, heading6, strong, em, hyperlink, image, embed, list-item, o-list-item, rtl","label":"Artist Image Year"}},"artist_image_location":{"type":"StructuredText","config":{"multi":"paragraph, preformatted, heading1, heading2, heading3, heading4, heading5, heading6, strong, em, hyperlink, image, embed, list-item, o-list-item, rtl","label":"Artist Image Location"}}},"label":"Gallery"}}}},"about_page":{"Main":{"uid":{"type":"UID","config":{"label":"slug"}},"about_title":{"type":"StructuredText","config":{"single":"heading1","label":"About Title"}},"about_content":{"type":"StructuredText","config":{"multi":"paragraph, em, hyperlink","label":"About Content"}}}}}},
    },{
      plugin: require('../node_modules/gatsby-plugin-layout/gatsby-browser.js'),
      options: {"plugins":[],"component":"/Users/janinezielman/Documents/Martinez/src/components/global/layout.js"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
