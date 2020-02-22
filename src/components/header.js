import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import hamburger from "../images/hamburgerMenu.png"
import "../styles/site.css"
const Header = ({ siteTitle }) => (
  <header>
    <div className="bg-black lg:px-16 px-6 flex flex-wrap items-center lg:py-0 py-2">
      <div className="flex-1 flex justify-between items-center">
        <svg
          id="f4673761-b724-4a95-a095-d2125482816e"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          width="150"
          height="150"
          viewBox="0 0 970 796"
        >
          <title>hologram</title>
          <circle cx="917" cy="200" r="53" fill="#ccc" opacity="0.3" />
          <circle cx="917" cy="200" r="30" fill="#5eaf81" />
          <circle cx="882" cy="53" r="53" fill="#ccc" opacity="0.3" />
          <circle cx="882" cy="53" r="30" fill="#5eaf81" />
          <circle cx="53" cy="253" r="53" fill="#ccc" opacity="0.3" />
          <circle cx="53" cy="253" r="30" fill="#5eaf81" />
          <circle cx="100" cy="665" r="53" fill="#ccc" opacity="0.3" />
          <circle cx="100" cy="665" r="30" fill="#5eaf81" />
          <circle cx="172" cy="100" r="53" fill="#ccc" opacity="0.3" />
          <circle cx="172" cy="100" r="30" fill="#5eaf81" />
          <path
            d="M983,483c0,178.34-127.90991,326.81-297,358.67-.65991.13-1.33008.25-2,.37q-15.765,2.895-32,4.39c-.66992.07-1.33008.13-2,.18q-15.81006,1.38-32,1.39c-.66992,0-1.33008,0-2-.01q-16.17-.075-32-1.56c-.66992-.05-1.33008-.12-2-.19q-16.21509-1.575-32-4.57c-.66992-.12-1.34009-.25-2-.38C379.8999,808.64,253,660.64,253,483c0-201.58,163.41992-365,365-365S983,281.42,983,483Z"
            transform="translate(-115 -52)"
            fill="#3f3d56"
          />
          <rect x="570" y="274.5" width="2" height="296.5" fill="#5eaf81" />
          <rect
            x="570"
            y="147.40234"
            width="2"
            height="87.47168"
            fill="#5eaf81"
          />
          <rect
            x="433"
            y="138.2749"
            width="2"
            height="432.7251"
            fill="#5eaf81"
          />
          <rect x="467" y="100" width="2" height="97.45654" fill="#5eaf81" />
          <rect x="467" y="244" width="2" height="296.6377" fill="#5eaf81" />
          <path
            d="M584,638.75V846.43c-.66992-.05-1.33008-.12-2-.19V638.75Z"
            transform="translate(-115 -52)"
            fill="#5eaf81"
          />
          <rect x="501" y="68" width="2" height="275.34668" fill="#5eaf81" />
          <path
            d="M618,433.52V848c-.66992,0-1.33008,0-2-.01V433.52Z"
            transform="translate(-115 -52)"
            fill="#5eaf81"
          />
          <rect x="535" y="100" width="2" height="382" fill="#5eaf81" />
          <rect x="535" y="523" width="2" height="214.17285" fill="#5eaf81" />
          <path
            d="M652,834.53v11.9c-.66992.07-1.33008.13-2,.18V834.53Z"
            transform="translate(-115 -52)"
            fill="#5eaf81"
          />
          <path
            d="M686,675V841.67c-.65991.13-1.33008.25-2,.37V675Z"
            transform="translate(-115 -52)"
            fill="#5eaf81"
          />
          <path
            d="M550,675V841.67c-.66992-.12-1.34009-.25-2-.38V675Z"
            transform="translate(-115 -52)"
            fill="#5eaf81"
          />
          <rect x="399" y="177" width="2" height="62.40967" fill="#5eaf81" />
          <rect
            x="399"
            y="286.27539"
            width="2"
            height="284.72461"
            fill="#5eaf81"
          />
          <rect x="365" y="200" width="2" height="371" fill="#5eaf81" />
          <rect x="331" y="230" width="2" height="120.90527" fill="#5eaf81" />
          <rect
            x="331"
            y="390.96826"
            width="2"
            height="180.03174"
            fill="#5eaf81"
          />
          <rect x="297" y="262" width="2" height="201.53564" fill="#5eaf81" />
          <rect x="297" y="501" width="2" height="70" fill="#5eaf81" />
          <rect x="263" y="292" width="2" height="67.59863" fill="#5eaf81" />
          <rect
            x="263"
            y="403.81885"
            width="2"
            height="167.18115"
            fill="#5eaf81"
          />
          <rect x="229" y="308" width="2" height="263" fill="#5eaf81" />
          <rect x="195" y="380" width="2" height="86.93701" fill="#5eaf81" />
          <rect
            x="195"
            y="506.62207"
            width="2"
            height="64.37793"
            fill="#5eaf81"
          />
          <rect
            x="590.37533"
            y="177"
            width="1.03675"
            height="377"
            fill="#5eaf81"
          />
          <rect x="637" y="200" width="2" height="59.44092" fill="#5eaf81" />
          <rect
            x="637"
            y="299.12598"
            width="2"
            height="271.87402"
            fill="#5eaf81"
          />
          <rect x="671" y="257" width="2" height="35" fill="#5eaf81" />
          <rect
            x="671"
            y="331.25195"
            width="2"
            height="173.8584"
            fill="#5eaf81"
          />
          <rect
            x="671"
            y="540.6377"
            width="2"
            height="30.3623"
            fill="#5eaf81"
          />
          <rect x="705" y="262" width="2" height="309" fill="#5eaf81" />
          <rect x="739" y="292" width="2" height="98.96826" fill="#5eaf81" />
          <rect
            x="739"
            y="428.38574"
            width="2"
            height="142.61426"
            fill="#5eaf81"
          />
          <rect x="773" y="308" width="2" height="263" fill="#5eaf81" />
          <path
            d="M549,676a10,10,0,1,1,10-10A10.01177,10.01177,0,0,1,549,676Zm0-18a8,8,0,1,0,8,8A8.00917,8.00917,0,0,0,549,658Z"
            transform="translate(-115 -52)"
            fill="#5eaf81"
          />
          <path
            d="M583,624a10,10,0,1,1,10-10A10.01177,10.01177,0,0,1,583,624Zm0-18a8,8,0,1,0,8,8A8.00917,8.00917,0,0,0,583,606Z"
            transform="translate(-115 -52)"
            fill="#5eaf81"
          />
          <path
            d="M686,676a10,10,0,1,1,10-10A10.01177,10.01177,0,0,1,686,676Zm0-18a8,8,0,1,0,8,8A8.00917,8.00917,0,0,0,686,658Z"
            transform="translate(-115 -52)"
            fill="#5eaf81"
          />
          <path
            d="M651,801a10,10,0,1,0,10,10A10.01648,10.01648,0,0,0,651,801Zm0,18a8,8,0,1,1,8-8A8.0107,8.0107,0,0,1,651,819Z"
            transform="translate(-115 -52)"
            fill="#5eaf81"
          />
          <path
            d="M651,563a10,10,0,1,1,10-10A10.01177,10.01177,0,0,1,651,563Zm0-18a8,8,0,1,0,8,8A8.00917,8.00917,0,0,0,651,545Z"
            transform="translate(-115 -52)"
            fill="#5eaf81"
          />
          <path
            d="M617,424a10,10,0,1,1,10-10A10.01146,10.01146,0,0,1,617,424Z"
            transform="translate(-115 -52)"
            fill="#5eaf81"
          />
          <path
            d="M685,315a10,10,0,1,1,10-10A10.01146,10.01146,0,0,1,685,315Zm0-18a8,8,0,1,0,8,8A8.00917,8.00917,0,0,0,685,297Z"
            transform="translate(-115 -52)"
            fill="#5eaf81"
          />
          <path
            d="M447,433a10,10,0,1,1,10-10A10.01146,10.01146,0,0,1,447,433Zm0-18a8,8,0,1,0,8,8A8.00917,8.00917,0,0,0,447,415Z"
            transform="translate(-115 -52)"
            fill="#5eaf81"
          />
          <path
            d="M379,442a10,10,0,1,1,10-10A10.01146,10.01146,0,0,1,379,442Zm0-18a8,8,0,1,0,8,8A8.00917,8.00917,0,0,0,379,424Z"
            transform="translate(-115 -52)"
            fill="#5eaf81"
          />
          <path
            d="M413,544a10,10,0,1,1,10-10A10.01146,10.01146,0,0,1,413,544Z"
            transform="translate(-115 -52)"
            fill="#5eaf81"
          />
          <path
            d="M686,200a10,10,0,1,1,10-10A10.01146,10.01146,0,0,1,686,200Zm0-18a8,8,0,1,0,8,8A8.00917,8.00917,0,0,0,686,182Z"
            transform="translate(-115 -52)"
            fill="#5eaf81"
          />
          <path
            d="M515,324a10,10,0,1,1,10-10A10.01146,10.01146,0,0,1,515,324Zm0-18a8,8,0,1,0,8,8A8.00917,8.00917,0,0,0,515,306Z"
            transform="translate(-115 -52)"
            fill="#5eaf81"
          />
          <path
            d="M481,253a10,10,0,1,1,10-10A10.01146,10.01146,0,0,1,481,253Zm0-18a8,8,0,1,0,8,8A8.00917,8.00917,0,0,0,481,235Z"
            transform="translate(-115 -52)"
            fill="#5eaf81"
          />
          <path
            d="M311,549a10,10,0,1,1,10-10A10.01177,10.01177,0,0,1,311,549Zm0-18a8,8,0,1,0,8,8A8.00917,8.00917,0,0,0,311,531Z"
            transform="translate(-115 -52)"
            fill="#5eaf81"
          />
          <rect x="804" y="380" width="2" height="86.93701" fill="#5eaf81" />
          <rect
            x="804"
            y="506.62207"
            width="2"
            height="64.37793"
            fill="#5eaf81"
          />
          <path
            d="M920,549a10,10,0,1,1,10-10A10.01177,10.01177,0,0,1,920,549Zm0-18a8,8,0,1,0,8,8A8.00917,8.00917,0,0,0,920,531Z"
            transform="translate(-115 -52)"
            fill="#5eaf81"
          />
          <path
            d="M855,470a10,10,0,1,1,10-10A10.01146,10.01146,0,0,1,855,470Zm0-18a8,8,0,1,0,8,8A8.00917,8.00917,0,0,0,855,452Z"
            transform="translate(-115 -52)"
            fill="#5eaf81"
          />
          <path
            d="M787,585a10,10,0,1,1,10-10A10.01177,10.01177,0,0,1,787,585Zm0-18a8,8,0,1,0,8,8A8.00917,8.00917,0,0,0,787,567Z"
            transform="translate(-115 -52)"
            fill="#5eaf81"
          />
          <path
            d="M583,283a10,10,0,1,1,10-10A10.01146,10.01146,0,0,1,583,283Z"
            transform="translate(-115 -52)"
            fill="#5eaf81"
          />
          <path
            d="M787,374a10,10,0,1,1,10-10A10.01146,10.01146,0,0,1,787,374Zm0-18a8,8,0,1,0,8,8A8.00917,8.00917,0,0,0,787,356Z"
            transform="translate(-115 -52)"
            fill="#5eaf81"
          />
          <path
            d="M855,345a10,10,0,1,1,10-10A10.01146,10.01146,0,0,1,855,345Z"
            transform="translate(-115 -52)"
            fill="#5eaf81"
          />
          <path
            d="M753,340a10,10,0,1,1,10-10A10.01146,10.01146,0,0,1,753,340Z"
            transform="translate(-115 -52)"
            fill="#5eaf81"
          />
          <polygon
            points="918 288.017 738.983 285 739.017 283 916 285.983 916 200 918 200 918 288.017"
            fill="#2f2e41"
          />
          <polygon
            points="638.923 278.386 637.077 277.614 731.334 52 882 52 882 54 732.666 54 638.923 278.386"
            fill="#2f2e41"
          />
          <polygon
            points="503 363 52 363 52 254 54 254 54 361 503 361 503 363"
            fill="#2f2e41"
          />
          <polygon
            points="468 222 169 222 169 100 171 100 171 220 468 220 468 222"
            fill="#2f2e41"
          />
          <polygon
            points="299 666 100 666 100 664 297 664 297 481 299 481 299 666"
            fill="#2f2e41"
          />
        </svg>
      </div>
      <label for="menu-toggle" className="cursor-pointer lg:hidden block">
        <img
          src={hamburger}
          alt="menu"
          className="bg-white cursor-pointer fill-current text-gray-900 w-6 h-6"
        />
      </label>
      <input type="checkbox" className="hidden" id="menu-toggle" />

      <div
        className="hidden lg:flex lg:items-center lg:w-auto w-full"
        id="menu"
      >
        <nav>
          <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
            <li>
              {" "}
              <Link
                className="text-green-500 lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-green-400"
                to="/"
              >
                Home
              </Link>
            </li>

            <li>
              {" "}
              <Link
                className="text-green-500 lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-green-400"
                to="/portfolio"
              >
                Portfolio
              </Link>
            </li>

            <li>
              {" "}
              <Link
                className="text-green-500 lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-green-400"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
)
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
