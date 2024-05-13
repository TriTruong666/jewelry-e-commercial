import * as React from "react";
import { Link, Outlet } from "react-router-dom";
import "../../styles/header/header.css";
import navigation from "./nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  return (
    <header className="header-container">
      <div className="header">
        <Link to={"/"}>
          <h2>hynthi jewelry®</h2>
        </Link>
        <nav className="main-nav">
          {navigation.map((nav, index) => (
            <Link key={index + 1} to={nav.path}>
              {nav.name}
            </Link>
          ))}
        </nav>
        <nav className="second-nav">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
          <Link to={"/auth"}>
            <FontAwesomeIcon icon={faUser} size="lg" />
          </Link>
          <Link to={"/cart"}>
            <FontAwesomeIcon icon={faCartShopping} size="lg" />
          </Link>
        </nav>
      </div>
      <Outlet />
    </header>
  );
}
