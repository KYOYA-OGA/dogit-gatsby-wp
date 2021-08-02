import React from "react"
import { Wrapper } from "./Footer.styles"

const Footer = () => {
  return (
    <Wrapper>
      <p>
        copyright &copy; {new Date().getFullYear()} <span>DogIt</span> all right
        reserved
      </p>
    </Wrapper>
  )
}

export default Footer
