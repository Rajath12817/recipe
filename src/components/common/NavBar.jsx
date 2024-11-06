
// import { Menu } from 'semantic-ui-react';
// import { logo } from '../../constants/constant';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate()
  const handleLogout = ()=>{
    localStorage.removeItem('token');
    navigate('/login') 
  }

    return (
        // <Menu borderless fixed="top">
        //     <Menu.Item>
        //         <img src={logo} alt="logo" style={{ width: 50 }} />
        //     </Menu.Item>
        //    <Menu.Item name="Home" as={Link} to="/" /> 
        //    <Menu.Item name="Recipes" as={Link} to="/recipes" /> 
        //    <Menu.Item  name="Regional cuisine" as={Link} to="/regional" />

        // </Menu>
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Indian Bites
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/recipes">
                    Recipes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/regional">
                    Regional cuisine
                  </Link>
                </li>
              </ul>
              {!localStorage.getItem('token')?<form className="d-flex">
              <Link className="btn btn-primary mx-1" role="button" to="/login">
                Login
              </Link>
              <Link className="btn btn-primary mx-1" role="button" to="/signup">
                SignUp
              </Link>
            </form>:<button onClick={handleLogout} className="btn btn-primary">Logout</button>}
            </div>
          </div>
        </nav>
      </div>
    )
}

export default NavBar;