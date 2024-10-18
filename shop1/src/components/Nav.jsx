import { Outlet, Link } from 'react-router-dom'
function Nav() {
  const handleClick = () => {
    window.location.reload(Home)
  }
    return(
        <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="/images/Shopify.webp">Logo</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                <Link className="nav-link" to="/" onClick={handleClick} >Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/product">Product</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Outlet />
        </>
    )
}
export default Nav