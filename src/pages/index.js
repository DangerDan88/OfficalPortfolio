import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { FaLinkedin, FaGithub } from "react-icons/fa"

const HomePage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <div className="bg-black px-4">
      <p className="text-base">
        <a
          href="https://www.linkedin.com/in/daniel-osornio-837547188/"
          target="_blank"
          className="text-red-500 text-xl"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={28} />
        </a>
        <br></br>
        <a
          href="https://github.com/DangerDan88"
          target="_blank"
          className="text-blue-500 text-xl"
          rel="noopener noreferrer"
        >
          <FaGithub size={28} />
        </a>
      </p>
      <div className="max-w-3xl bg-black text-gray-600 text-xl rounded-lg mx-auto my-16 p-16">
        <div className="flex justify-center h-48 max-h-full mx-auto pb-2">
          {" "}
          <Img
            className="w-1/5"
            fluid={data.profilepic.childImageSharp.fluid}
            alt="Daniel"
          />
        </div>
        <p>
          My name is Daniel Osornio I am a bootcamp graduate from the University
          of Utah looking for job opportunities please take a look at my work
          and contact to reach out I believe technology should be accessible to
          everyone regardless of background as myself I am coming from a non
          tech job trying to make the transition.
        </p>
      </div>
    </div>
  </Layout>
)

export default HomePage

export const query = graphql`
  query MyQuery {
    profilepic: file(relativePath: { eq: "profilepic.jpeg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
