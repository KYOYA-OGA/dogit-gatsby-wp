import React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout/Layout"

import {
  Wrapper,
  ContentWrapper,
  PageContent,
  StyledDate,
  StyledH2,
  StyledReadMore,
} from "./archive.styles"

const archiveTemplate = () => {
  return <Layout>archive</Layout>
}

export default archiveTemplate
