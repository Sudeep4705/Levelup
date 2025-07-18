import "./Navbar.css"; // <-- Import the CSS file here
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img className="img" src="/Images/logo.svg" alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/players">Players</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/support">Support</Link>
        </li>
     
      </ul>
    </div>
  </div>
</nav>

  );
}

export default Navbar;
