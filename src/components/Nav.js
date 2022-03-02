import React from 'react';


function Nav(props) {
    const tabs = ["About", 'Albums', "Samples", "Dashboard", "Socials"];
    return (
        <div className="tabs-centered">
        <ul className="nav nav-tabs">
          {tabs.map((tab) => (
            <li
              className={
                props.currentPage === tab ? "nav-item is-active" : "nav-item"
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
      </div>
    );
}

export default Nav;