import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/index.css'
import 'tachyons';

function Nav(props) {


    // const tabs = ["About", 'Albums', "Samples", "Dashboard"];
    return (
      <div>
        <nav id="nav-items">

          <ul class="nav-link">
            {/* <li>
              <Link to="/about">About</Link>
            </li> */}
            <li>
              <Link to="/albums">Albums</Link>
            </li>
            <li>
              <Link to="/samples">Samples</Link>
            </li>
            {/* <li>
              <Link to="/dashboard">Dashboard</Link>
            </li> */}
            <li>
              <Link to="/videos">Videos</Link>
            </li>
          </ul>


          {/* {tabs.map((tab) => (
            <a href={"/" + tab.toLowerCase()}


            onClick={() => props.handlePageChange(tab)}
            className= {
              props.currentPage === tab ? "nav-link active" : "nav-link"
                    }


            >
                {tab}

            </a>
          ))} */}
        </nav>
      </div>
    )


}

export default Nav;