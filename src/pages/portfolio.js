import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"

const Portfolio = ({ data }) => (
  <Layout>
    <SEO title="Portfolio" />
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        <div className="flex-wrap lg:block lg:w-1/2 lg:relative max-w-sm rounded overflow-hidden shadow-lg p-2 p-2">
          <Img fluid={data.reactfood.childImageSharp.fluid} alt="food game" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl border-purple-900 border-2 text-center mb-2 rounded-lg hover:bg-white">
              <a
                href="https://boring-aryabhata-d6c19e.netlify.com"
                target="_blank"
                className="text-gray-600"
                rel="noopener noreferrer"
              >
                Food Memory Game
              </a>
            </div>
            <h1>Technologies used</h1>
            <p className="text-blue-700 text-base">
              <ul className="list-disc text-gray-600">
                <li>React</li>
                <li>Bootstrap</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="flex-wrap lg:block lg:w-1/2 lg:relative max-w-sm rounded overflow-hidden shadow-lg p-2">
          <Img fluid={data.dbpic.childImageSharp.fluid} alt="dragonball" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl border-purple-900 border-2 text-center mb-2 rounded-lg hover:bg-white">
              <a
                href="https://github.com/DangerDan88/unit-4-game"
                target="_blank"
                className="text-gray-600"
                rel="noopener noreferrer"
              >
                DBZ Crystal Collector
              </a>
            </div>
            <h1>Technologies used</h1>
            <p className="text-blue-700 text-base">
              <ul className="list-disc text-gray-600">
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>Vanilla CSS</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="flex-wrap lg:block lg:w-1/2 lg:relative max-w-sm rounded overflow-hidden shadow-lg p-2">
          <Img fluid={data.LBT.childImageSharp.fluid} alt="learnbuildtype" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl border-purple-900 border-2 text-center mb-2 rounded-lg hover:bg-white">
              <a
                href="https://elated-torvalds-247cb0.netlify.app/"
                target="_blank"
                className="text-gray-600"
                rel="noopener noreferrer"
              >
                LearnBuildType
              </a>
            </div>
            <h1>Technologies used</h1>
            <p className="text-blue-700 text-base">
              <ul className="list-disc text-gray-600">
                <li>React</li>
                <li>Custom API's</li>
                <li>serverless functions</li>
                <li>Auth0 authentication</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="flex-wrap lg:block lg:w-1/2 lg:relative max-w-sm rounded overflow-hidden shadow-lg p-2">
          <Img fluid={data.giphypic.childImageSharp.fluid} alt="food game" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl border-purple-900 border-2 text-center mb-2 rounded-lg hover:bg-white">
              <a
                href="https://dangerdan88.github.io/jify/"
                target="_blank"
                className="text-gray-600"
                rel="noopener noreferrer"
              >
                Giphy Food Generator
              </a>
            </div>
            <h1>Technologies used</h1>
            <p className="text-blue-700 text-base">
              <ul className="list-disc text-gray-600">
                <li>Javascript</li>
                <li>Giphy API</li>
                <li>JQuery</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="flex-wrap lg:block lg:w-1/2 lg:relative max-w-sm rounded overflow-hidden shadow-lg p-2">
          <Img
            fluid={data.trainpic.childImageSharp.fluid}
            alt="train scheduler"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl border-purple-900 border-2 text-center mb-2 rounded-lg hover:bg-white">
              <a
                href="https://dangerdan88.github.io/Train-Scheduler/"
                target="_blank"
                className="text-gray-600"
                rel="noopener noreferrer"
              >
                Train Scheduler
              </a>
            </div>
            <h1>Technologies used</h1>
            <p className="text-blue-700 text-base">
              <ul className="list-disc text-gray-600">
                <li>Javascript</li>
                <li>FireBase</li>
                <li>JQuery</li>
                <li>Moment.js</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="flex-wrap lg:block lg:w-1/2 lg:relative max-w-sm rounded overflow-hidden shadow-lg p-2">
          <Img fluid={data.gphpic.childImageSharp.fluid} alt="gph" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl border-purple-900 border-2 text-center mb-2 rounded-lg hover:bg-white">
              <a
                href="https://gpheq.com/"
                target="_blank"
                className="text-gray-600"
                rel="noopener noreferrer"
              >
                GPH Equestrian
              </a>
            </div>
            <h1>Technologies used</h1>
            <p className="text-blue-700 text-base">
              <ul className="list-disc text-gray-600">
                <li>Gatsby Js</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Portfolio

export const query = graphql`
  query {
    LBT: file(relativePath: { eq: "learnbuild.png" }) {
      childImageSharp {
        fluid(fit: CONTAIN) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    reactfood: file(relativePath: { eq: "ReactFood.png" }) {
      childImageSharp {
        fluid(fit: CONTAIN) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    trainpic: file(relativePath: { eq: "TS.png" }) {
      childImageSharp {
        fluid(fit: CONTAIN) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dbpic: file(relativePath: { eq: "DB.png" }) {
      childImageSharp {
        fluid(fit: CONTAIN) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    giphypic: file(relativePath: { eq: "Giphy.png" }) {
      childImageSharp {
        fluid(fit: CONTAIN) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    gphpic: file(relativePath: { eq: "main.jpg" }) {
      childImageSharp {
        fluid(fit: CONTAIN) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
