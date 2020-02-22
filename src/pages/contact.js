import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="bg-green-500 container mx-auto">
      <form className="flex-initial">
        <div className="flex justify-start">
          <label className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4">
            Name:
            <input
              className="shadow appearance-none border rounded py-2 px-3 text-grey-darker"
              type="text"
              name="name"
            />
          </label>
        </div>
        <div className="flex justify-center">
          <label className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4">
            Email:
            <input
              className="shadow appearance-none border rounded py-2 px-3 text-grey-darker"
              type="text"
              name="email"
            />
          </label>
        </div>
        <div className="flex justify-end">
          <label className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4">
            Message:
            <input
              className="shadow appearance-none border rounded py-2 px-3 text-grey-darker"
              type="text"
              name="message"
            />
          </label>
        </div>
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          Submit
        </button>
      </form>
    </div>
  </Layout>
)

export default Contact
