import React from "react"
import { Link } from "gatsby"
import { useLatestBlogPost } from "../../hooks/useLatestBlogPost"
import { Wrapper } from "./LatesBlogPost.styles"

const LatestBlogPost = () => {
  const {
    allWpPost: { nodes: data },
  } = useLatestBlogPost()
  return (
    <Wrapper>
      <h1>Latest Blog Post</h1>
      <h4>{data[0].title}</h4>
      <div
        dangerouslySetInnerHTML={{
          __html: data[0].excerpt,
        }}
      />
      <Link to={`/blog${data[0].uri}`}>
        <h5>Read More</h5>
      </Link>
    </Wrapper>
  )
}

export default LatestBlogPost
