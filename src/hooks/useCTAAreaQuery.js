import { useStaticQuery, graphql } from "gatsby"

export const useCTAAreaQuery = () => {
  const data = useStaticQuery(graphql`
    fragment ctaImage on WpMediaItem {
      localFile {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, width: 720)
        }
      }
    }
    query CTAQuery {
      cta: wpPage(databaseId: { eq: 47 }) {
        ACF_HomePage {
          cta1Link
          cta1Text
          cta2Link
          cta2Text
          cta3Link
          cta3Text
          cta1Image {
            ...ctaImage
          }
          cta2Image {
            ...ctaImage
          }
          cta3Image {
            ...ctaImage
          }
        }
      }
    }
  `)

  return data
}
