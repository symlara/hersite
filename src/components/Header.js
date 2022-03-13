import React from 'react';
import Nav from './Nav';
import '../../src/index.css'
import image from '../assets/images/her-returns-to-form-on-her-debut-album-back-of-my-mind.jpg';
import 'tachyons';


function Header(props) {
    const { currentPage, handlePageChange} = props;

    return (
        <header>
            <div>
            <div id="header">
            <h1><button class="link dim white dib mr3 her tc" href="/" title="About"><i>H.E.R</i></button></h1>            
            </div>
                <Nav currentPage={currentPage}
                handlePageChange={handlePageChange} />
                <img src={image} alt="back-of-my-mind" id="hero" />
                <p>&nbsp;</p>
                <p>&nbsp;</p>
            </div>
        </header>
    );
}

export default Header;