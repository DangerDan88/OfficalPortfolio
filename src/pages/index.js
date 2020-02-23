import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import profilepic from "../images/profilepic.jpeg"
const HomePage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="bg-black px-4">
      <h1 className="text-green-500 flex justify-center text-6xl">
        {" "}
        Daniel Osornio
      </h1>
      <img className="w-1/5" src={profilepic} alt="Daniel" />
      <div className="text-green-500 font-bold text-xl mb-2">
        Welcome to my portfolio
        <br></br>
      </div>
      <p className="text-base">
        <a
          href="https://www.linkedin.com/in/daniel-osornio-837547188/"
          target="_blank"
          className="text-red-500 text-xl"
        >
          Linked In
        </a>
        <br></br>
        <a
          href="https://github.com/DangerDan88"
          target="_blank"
          className="text-blue-500 text-xl"
        >
          Github
        </a>
      </p>

      <div className="max-w-3xl bg-black text-green-500 text-xl rounded-lg mx-auto my-16 p-16">
        <p>
          My name is Daniel Osornio I am 23 years old and currently studying to
          become a front end web developer. I have always been interested in
          computers whether it be with computer games, video games and movies
          such as The Matrix and Hackers also helped me make a decision to make
          a jump and try to become a programmer. I figured the best way to be
          able to accomplish this was with some schooling to be able to get my
          foot in the door at my first tech job. I really wanted to do this
          because I always have wanted to build a computer program that can be
          useful for a variety of people. One other thing that really intrigued
          me was the fact you have to always be learning to succeed in this
          field as things are always changing which I liked the idea of keeping
          stuff fresh. I believe technology should be accessible to everyone
          regardless of background as myself I am coming from a non tech job
          trying to make the transition. I enjoy working out and doing just
          about anything active or outdoors life is about balance.
        </p>
      </div>
    </div>
  </Layout>
)

export default HomePage