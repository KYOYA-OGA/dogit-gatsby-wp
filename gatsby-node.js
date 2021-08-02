const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const archiveTemplate = path.resolve("./src/templates/archive.js")

  const result = await graphql(`
    {
      wp {
        readingSettings {
          postsPerPage
        }
      }
      allWpCategory {
        nodes {
          id
          name
          count
          uri
          slug
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Something went horrible wrong!`, result.errors)
    return
  }

  const { wp, allWpCategory } = result.data

  // Create pages for each category
  allWpCategory.nodes.forEach(category => {
    const postPerPage = wp.readingSettings.postsPerPage
    const numberOfPosts = category.count
    const numPages = Math.ceil(numberOfPosts / postPerPage)

    // Some category may be empty and don't need to create pages fot them
    if (numberOfPosts > 0 || category.name !== "uncategorized") {
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? category.uri : `${category.uri}${i + 1}`,
          component: archiveTemplate,
          context: {
            limit: postPerPage,
            skip: i * postPerPage,
            numPages: numPages,
            currentPage: i + 1,
            catId: category.id,
            catName: category.name,
            catUri: category.uri,
            categories: allWpCategory,
          },
        })
      })
    }
  })
}
