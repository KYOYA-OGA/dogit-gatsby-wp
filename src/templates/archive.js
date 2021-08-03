import React from 'react'
import { Link, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Breadcrumb from '../components/BreadCrumb/BreadCrumb'

import Layout from '../components/Layout/Layout'

import {
  Wrapper,
  ContentWrapper,
  PageContent,
  StyledDate,
  StyledH2,
  StyledReadMore,
} from './archive.styles'
import ArchiveSidebar from '../components/ArchiveSidebar/ArchiveSidebar'
import Pagination from '../components/Pagination/Pagination'

const archiveTemplate = ({
  data: { allWpPost },
  pageContext: { catId, catName, catUri, categories, numPages, currentPage },
}) => {
  return (
    <Layout>
      <StaticImage
        src="../images/archive-header.jpg"
        alt="archive hero"
        placeholder="blurred"
        layout="constrained"
        width={1920}
        height={300}
      />
      <Wrapper>
        <Breadcrumb parent={{ uri: '/blog/all-posts', title: 'blog' }} />
        <ContentWrapper>
          <ArchiveSidebar catId={catId} categories={categories.nodes} />
          <PageContent>
            <h1 dangerouslySetInnerHTML={{ __html: catName }} />
            {allWpPost.edges.map((post) => (
              <article key={post.node.id} className="entry-content">
                <Link to={`/blog${post.node.uri}`}>
                  <StyledH2
                    dangerouslySetInnerHTML={{ __html: post.node.title }}
                  />
                </Link>
                <StyledDate
                  dangerouslySetInnerHTML={{ __html: post.node.date }}
                />
                <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
                <StyledReadMore to={`/blog${post.node.uri}`}>
                  Read More
                </StyledReadMore>
                <div className="dot-divider"></div>
              </article>
            ))}
            <Pagination
              catUri={catUri}
              page={currentPage}
              totalPages={numPages}
            />
          </PageContent>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  )
}

export default archiveTemplate

export const pageQuery = graphql`
  query ($catId: String!, $skip: Int!, $limit: Int!) {
    allWpPost(
      filter: { categories: { nodes: { elemMatch: { id: { eq: $catId } } } } }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          title
          excerpt
          uri
          slug
          date(formatString: "DD MM YYYY")
        }
      }
    }
  }
`
