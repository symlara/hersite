import React, { useState } from 'react';
import '../../src/index.css'
import 'tachyons';
import About from './About';
import Nav from './Nav';
import Albums from './Albums';
import Dashboard from './Dashboard';
import Samples from './Samples';
import Socials from './Socials';


function Header() {
    const [currentPage, handlePageChange] = useState("About");

    const renderPage = () => {
        switch (currentPage) {
            case "About":
                return <About />;
                case "Albums":
                    return <Albums />;
                    case "Samples":
                        return <Samples />;
                        case "Dashboard":
                            return <Dashboard />;
                            case "Socials":
                                return <Socials />;

                                default:
                                    return <About />;
        }
    };

    return (
        <div>
            <nav class="pa1 pa3-ns" id="nav-items">
                <a class="link dim white dib mr3" href="#about" title="about">About</a>
                <a class="link dim white dib mr3" href="#discography" title="Discography">Albums</a>
                <a class="link dim white dib mr3" href="#deezer" title="Samples">Samples</a>
                <a class="link dim white dib mr3" href="#dashboard" title="dashboard">Dashboard</a>
                <a class="link dim white dib mr3" href="#socials" title="Socials">Socials</a>
              </nav>
                    {/* Pass the state value and the setter as props to NavTabs */}
              <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
                    
                    {/* Call the renderPage function passing in the currentPage */}
              <main>
                  <div>{renderPage(currentPage)}</div>
              </main>
        </div>
    );
}

export default Header;