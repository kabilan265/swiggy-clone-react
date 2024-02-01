import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import swiggyLogo from "../../assets/swiggyLogo.jpeg";
import Cart from "./Cart";
export default Header = () => {
  const [showCart, setShowCart] = useState(false);
  const items = useSelector((store) => store.cart.items);
  return (
    <header className="flex justify-between items-center px-6 shadow-lg mb-6">
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
          {/* <li>Online: {isOnline ? 'yes' : 'no'}</li> */}
          {
            <li className="nav-link text-primary py-3">
              <Link to="/">Home</Link>
            </li>
          }
          {/*  <li className="nav-link py-3">
            <Link to="/about">About</Link>
          </li> */}
          {/* <li><button onClick={() => {
                        loginText === 'LogIn' ? setLoginText("Logout") : setLoginText("LogIn")
                    }}>{loginText}</button></li> */}
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
          {/* <li>
                        user: {loggedInUser}
                    </li> */}
        </ul>
      </div>
    </header>
  );
};
