import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="flex bg-black justify-center mx-auto">
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="flex-initial border-solid border-8 border-black shadow-lg"
      >
        <div className="flex-wrap rounded-full">
          <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4">
            Name:
            <input
              className="shadow appearance-none border rounded py-2 px-3 text-grey-darker"
              type="text"
              name="name"
            />
          </label>
        </div>
        <div className="flex-wrap rounded-full">
          <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4">
            Email:
            <input
              className="shadow appearance-none border rounded py-2 px-3 text-grey-darker"
              type="text"
              name="email"
            />
          </label>
        </div>
        <div className="flex-wrap rounded-full">
          <label className="text-white font-bold md:text-right mb-1 md:mb-0">
            Message:
            <input
              className="w-full shadow appearance-none border rounded py-5 px-5 text-grey-darker row-span-3"
              type="text"
              name="message"
            />
          </label>
        </div>
        <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-green-500 rounded">
          Submit
        </button>
      </form>
    </div>
  </Layout>
)

export default Contact
