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
                <i><Link to="/" exact>She Gang Fansite</Link></i>
                </h1>
                <p class="description">"A PLACE FOR ALL H.E.R FANS TO FIND ALL THINGS H.E.R., SHE GANG ACTIVITIES, <br />SCHOOL AND CAREER RESOURCES AND A SENSE OF COMMUNITY."</p>        
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