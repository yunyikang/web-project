import React from "react"

import { Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"

const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="md" bg="secondary" variant="dark">
        <Link className="navbar-brand" style={{ fontSize: "2rem" }} to="/">
          Eugene Koh Property
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/buyer">
              For Buyers
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header

/*

      <div className="nav-container">
        <h1 className="brand">
          <Link to="/">Test Nav</Link>
        </h1>
        <div className="burger" onClick={handleClick}>
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
        </div>
        <ul className={"nav-links" + (isClicked ? " show" : "")}>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/buyer">Buyer</Link>
          </li>
        </ul>
      </div>

      
      <div className="menu">
        <h1 className="menu-title">
          <Link to="/">Home</Link>
        </h1>
        <Button variant="primary">Primary</Button>
        <Media query="(min-width: 768px)">
          {matches =>
            matches ? (
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/buyer">For Buyers</Link>
                </li>
              </ul>
            ) : (
              <MenuBtn />
            )
          }
        </Media>
      </div>
      */
