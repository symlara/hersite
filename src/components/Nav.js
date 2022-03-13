import React from 'react';
import '../../src/index.css'
import 'tachyons';

function Nav(props) {
  
  
    const tabs = ["About", 'Albums', "Samples", "Dashboard"];
    return (
      <div>
        <nav className="pa1 pa3-ns flex-row" id="nav-items">
          {tabs.map((tab) => (
            <a href={"#" + tab.toLowerCase()}
            
                
            onClick={() => props.handlePageChange(tab)}
            className= {
              props.currentPage === tab ? "nav-link active" : "nav-link"
                    }
                    
                    
            >
                {tab}
               
            </a>
          ))}
        </nav>
      </div>
    )


}

export default Nav;