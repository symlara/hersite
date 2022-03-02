import React, { useState } from 'react';
import Nav from '../Nav';
import About from '../About';
import '../../../src/index.css'
import 'tachyons';


function Header() {
    const [ currentTab, setCurrentTab] = useState("About");

    const renderPage = () => {
        switch (currentPage) {
            case "About":
            return <About />;

            default:
                return <About />;
        }
    };

    return (
        <div>
            <nav class="pa1 pa3-ns" id="nav-items">
                <a class="link dim white dib mr3" href="#about" title="Home">About</a>
                <a class="link dim white dib mr3" href="https://www.her-official.com/#tour" target="_blank" title="Home">Tour</a>
                <a class="link dim white dib mr3" href="#discography" title="Discography">Albums</a>
                <a class="link dim white dib mr3 her" href="#" title="About">H.E.R</a>
                <a class="link dim white dib mr3" href="#socials" title="Socials">Socials</a>
                <a class="link dim white dib mr3" href="#deezer" title="Samples">Samples</a>
                <a class="link dim white dib mr3" href="https://www.her-official.com/" target="_blank" title="officialSite">Official Site</a>
              </nav>

              <Nav currentPage={currentPage}
              handlePageChange={handlePageChange} />
              <main>
                  <div>{renderPage(currentPage)}</div>
              </main>
        </div>
    );
}

export default Header;