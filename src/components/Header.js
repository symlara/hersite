import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import '../../src/index.css'
import image from '../assets/images/her-returns-to-form-on-her-debut-album-back-of-my-mind.jpg';
import 'tachyons';


function Header(props) {
    const { currentPage, handlePageChange} = props;

    return (
        <header>
            <div>
            <div>
            <h1 id="header">
                <i><Link to="/" exact>H.E.R</Link></i>
                </h1>        
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