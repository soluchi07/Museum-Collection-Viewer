import { Outlet, Link } from "react-router-dom"

function Layout(){
  return (
    <div id="layout">
        <nav>
            <Link style={{ color: "white" }} to="/">
            <div className="home-link" key="home-button">
                Home
            </div>   
            </Link>
        </nav>
        <Outlet />
    </div>
  )
}

export default Layout