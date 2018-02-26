import React from "react"
import { Link } from "react-router-dom"
import logo from '../../../assets/logo.svg'

const Header = () => (
  <header className="container logo">
    <Link to="/"><img alt="Ask A Dev" src={logo} /></Link>
    <div className="content"><h2>Free Mentoring from Local Programmers</h2></div>
  </header>
)

export default Header
