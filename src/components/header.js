import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import "../styles/site.css"

const Header = ({ siteTitle }) => (
  <div className="flex justify-center items-center bg-black">
    <div className="hover:shadow-sm flex flex-col border m-5 rounded">
      <h1 className="font-mono font-bold text-white text-lg leading-tight border-b p-3 px-5 my-0">
        Daniel's Portfolio
      </h1>
      <div className="card-body p-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb flex">
            <li className="breadcrumb-item text-purple-500">
              <Link
                to="/"
                className="text-purple-500 hover:text-purple-700 mx-2"
              >
                Home
              </Link>
            </li>
            <li className="breadcrumb-item text-purple-500">
              <Link
                to="/portfolio"
                className="text-purple-500 hover:text-purple-700 mx-2"
              >
                Projects
              </Link>
            </li>
            <li className="breadcrumb-item text-purple-500 hover:text-purple-700 mx-2">
              <Link
                to="/contact"
                className="text-purple-500 hover:text-purple-700 mx-2"
              >
                Contact
              </Link>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
)
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
