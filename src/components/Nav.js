import React from 'react';
import '../../src/index.css'
import 'tachyons';


function Nav(props) {
    const tabs = ["About", 'Albums', "Samples", "Dashboard", "Socials"];
    return (
<div class="fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
  <nav>
        <ul className="flex-row" id="nav">
          {tabs.map((tab) => (
            <li
              className={
                props.currentPage === tab ? "nav-item navActive" : "nav-item"
              }
              key={tab}
            >
              <a
                href={"#" + tab.toLowerCase()}

                onClick={() => props.handlePageChange(tab)}
                className={
                  props.currentPage === tab ? "nav-link active" : "nav-link"
                }
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
        </nav>
  </div>
    );
}

export default Nav;