import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider'

const NavBar = () => {
  const auth = useContext(AuthContext)

  // const renderRightNav = () => {
  //   if (auth.user) {
  //     return <button onClick={auth.handleLogout}>Logout</button>
  //   }
  //   return (
  //     <>
  //     <Link to='/login'>Login</Link>
  //     <Link to='/register'>Register</Link>
  //     </>
  //   )
  // }

  // const renderLeft = () => {
  //   if (auth.user) {
  //     return (
  //       <>
  //         <Link to='/dashboard'>Dashboard</Link>
  //       </>
  //     )
  //   }
  // }

  return (
    <div>
      <nav>
        <Link className="navlink" to="/">
          Home
        </Link>
        <Link className="navlink" to="/invoices">
          Invoices
        </Link>
        <Link className="navlink" to="/customers">
          Customers
        </Link>
        {/* {renderLeft()} */}
      </nav>
      {/* <div>{renderRightNav()}</div> */}
    </div>
  )
}

export default NavBar
