import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export default function AboutPage({ data }) {
  let { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <div className="flex h-screen w-full items-center justify-center px-2">
        <div className="mx-auto rounded-lg bg-black">
          <h1 className="px-4 py-4 text-center text-base font-bold capitalize text-white sm:text-3xl lg:text-8xl">
            {frontmatter.title}
            <h2>lol</h2>
          </h1>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        title
      }
    }
  }
`
