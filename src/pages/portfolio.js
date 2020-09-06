import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactFood from "../images/ReactFood.png"
import DB from "../images/DB.png"
import battlehero from "../images/battlehero.png"
import gify from "../images/Giphy.png"
import TS from "../images/TS.png"

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <div className="flex">
      <div className="flex-wrap lg:block lg:w-1/2 lg:relative max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={ReactFood} alt="Daniel" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl border-dashed border-green-500 border-2 text-center mb-2">
            <a
              href="https://boring-aryabhata-d6c19e.netlify.com"
              target="_blank"
              className="text-green-500"
              rel="noopener noreferrer"
            >
              Food Memory Game
            </a>
          </div>
          <h1>Technologies used</h1>
          <p className="text-blue-700 text-base">
            <ul className="list-disc text-green-500">
              <li>React</li>
              <li>Bootstrap</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="flex-wrap lg:block lg:w-1/2 lg:relative max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={DB} alt="Daniel" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl border-dashed border-green-500 border-2 text-center mb-2">
            <a
              href="https://github.com/DangerDan88/unit-4-game"
              target="_blank"
              className="text-green-500"
              rel="noopener noreferrer"
            >
              DBZ Crystal Collector
            </a>
          </div>
          <h1>Technologies used</h1>
          <p className="text-blue-700 text-base">
            <ul className="list-disc text-green-500">
              <li>JavaScript</li>
              <li>JQuery</li>
              <li>Vanilla CSS</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="flex-wrap lg:block lg:w-1/2 lg:relative max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={battlehero} alt="Daniel" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl border-dashed border-green-500 border-2 text-center mb-2">
            <a
              href="https://battleheroes.io"
              target="_blank"
              className="text-green-500"
              rel="noopener noreferrer"
            >
              BattleHeroes
            </a>
          </div>
          <h1>Technologies used</h1>
          <p className="text-blue-700 text-base">
            <ul className="list-disc text-green-500">
              <li>React</li>
              <li>Custom API's</li>
              <li>Socket.io</li>
              <li>Node-mailer</li>
              <li>SReact-spring</li>
              <li>Passport authentication</li>
              <li>Mongo DB</li>
            </ul>
          </p>
        </div>
      </div>

      <div className="flex-wrap lg:block lg:w-1/2 lg:relative max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={gify} alt="Daniel" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl border-dashed border-green-500 border-2 text-center mb-2">
            <a
              href="https://dangerdan88.github.io/jify/"
              target="_blank"
              className="text-green-500"
              rel="noopener noreferrer"
            >
              Giphy Food Generator
            </a>
          </div>
          <h1>Technologies used</h1>
          <p className="text-blue-700 text-base">
            <ul className="list-disc text-green-500">
              <li>Javascript</li>
              <li>Giphy API</li>
              <li>JQuery</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="flex-wrap lg:block lg:w-1/2 lg:relative max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={TS} alt="Daniel" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl border-dashed border-green-500 border-2 text-center mb-2">
            <a
              href="https://dangerdan88.github.io/Train-Scheduler/"
              target="_blank"
              className="text-green-500"
              rel="noopener noreferrer"
            >
              Train Scheduler
            </a>
          </div>
          <h1>Technologies used</h1>
          <p className="text-blue-700 text-base">
            <ul className="list-disc text-green-500">
              <li>Javascript</li>
              <li>FireBase</li>
              <li>JQuery</li>
              <li>Moment.js</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default Portfolio
