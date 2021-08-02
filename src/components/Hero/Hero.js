import React from "react"
import { getImage } from "gatsby-plugin-image"
import { useHeroQuery } from "../../hooks/useHeroQuery"
import { HeaderWrapper, Wrapper, StyledImg } from "./Hero.styles"

const Hero = () => {
  const {
    wpPage: { ACF_HomePage: data },
  } = useHeroQuery()

  const imageData = getImage(data.heroImage.localFile)

  return (
    <Wrapper>
      <StyledImg image={imageData} alt="Hero background" />
      <HeaderWrapper>{<h1>{data.heroText}</h1>}</HeaderWrapper>
    </Wrapper>
  )
}

export default Hero
