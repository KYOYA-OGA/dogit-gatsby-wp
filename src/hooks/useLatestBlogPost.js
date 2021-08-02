import { useStaticQuery, graphql } from "gatsby"

export const useLatestBlogPost = () => {
  const data = useStaticQuery(graphql`
    query LatestBlogPostQuery {
      allWpPost(sort: { fields: date, order: DESC }) {
        nodes {
          excerpt
          title
          uri
        }
      }
    }
  `)

  return data
}
