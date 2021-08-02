import React from "react"
import { useCTAAreaQuery } from "../../hooks/useCTAAreaQuery"
import { Wrapper } from "./CTAArea.styles"
import CTA from "../CTA/CTA"
import { getImage } from "gatsby-plugin-image"

const CTAArea = () => {
  const { cta } = useCTAAreaQuery()
  return (
    <Wrapper>
      {new Array(3).fill("").map((_, i) => (
        <CTA
          key={i}
          image={getImage(cta.ACF_HomePage[`cta${i + 1}Image`].localFile)}
          cta={cta}
          link={cta.ACF_HomePage[`cta${i + 1}Link`]}
          text={cta.ACF_HomePage[`cta${i + 1}Text`]}
        />
      ))}
    </Wrapper>
  )
}

export default CTAArea
