import * as React from "react"
import About from "../components/About/About"
import CTAArea from "../components/CTAArea/CTAArea"
import Hero from "../components/Hero/Hero"
import LatestBlogPost from "../components/LatestBlogPost/LatestBlogPost"
import Layout from "../components/Layout/Layout"
import Quote from "../components/Quote/Quote"

import SEO from "../components/SEO/SEO"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <CTAArea />
    <LatestBlogPost />
    <Quote />
    <About />
  </Layout>
)

export default IndexPage
