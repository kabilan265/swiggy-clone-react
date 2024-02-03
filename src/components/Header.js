import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const items = useSelector((store) => store.cart.items);
  const location = useLocation();
  useEffect(() => {
    location.pathname.includes('search') ? setActiveLink("Search") : setActiveLink("Home");
  });
  console.log(location.pathname);
  return (
    <header className="flex justify-between items-center px-6 shadow-lg mb-6 fixed h-[74px] w-full z-20 top-0 bg-white">
      <div className="logo-container py-3">
        <Link to="/">
          <img
            src="https://logosandtypes.com/wp-content/uploads/2021/01/swiggy.svg"
            className="w-[50] h-[50] cursor-pointer hover:scale-110 transition-all"
          />
        </Link>
      </div>
      <div className="">
        <ul className="flex items-start gap-16 text-lg">
          <li
            className={`nav-link ${
              activeLink === "Search" ? "text-primary" : ""
            } py-3`}
          >
            <Link
              to="/search-restuarant"
              onClick={() => {
                setActiveLink("Search");
              }}
            >
              <span>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </span>
              <span className="ml-4">Search</span>
            </Link>
          </li>
          <li
            className={`nav-link py-3 ${
              activeLink === "Home" ? "text-primary" : ""
            }`}
          >
            <Link
              to="/"
              onClick={() => {
                setActiveLink("Home");
              }}
            >
              Home
            </Link>
          </li>
          <li
            className="relative py-3 cursor-pointer"
            onMouseEnter={() => {
              setShowCart(true);
            }}
            onMouseLeave={() => {
              setShowCart(false);
            }}
          >
            <span className={`nav-link ${showCart ? "text-primary " : ""}`}>
              <span className="p-1 border border-solid text-sm mr-1">
                {items.length}
              </span>{" "}
              cart
            </span>
            {showCart && <Cart />}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
