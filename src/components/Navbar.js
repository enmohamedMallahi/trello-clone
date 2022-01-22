import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <h4 className="m-0">Trello</h4>
        </a>
        <ul className="navbar-nav me-auto mx-2 mb-2 mb-lg-0">
          <li></li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">
              Workspace
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">
              Recent
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">
              Starred
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">
              More
            </a>
          </li>
          <li>
            <button className="btn btn-warning">+</button>
          </li>
        </ul>
        <div>
          <input type="text" className="form-control" placeholder="Search" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
