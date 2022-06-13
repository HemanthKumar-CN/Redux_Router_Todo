import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to="/">CounterApp</Link>
        <Link to="/todos">TodoApp</Link>
    </div>
  )
}

export default Navbar