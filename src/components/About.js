import React from "react";
import 'tachyons';
import '../../src/index.css'

function About() {
    return (

         <section class="fl w-100 bg-black-50 white items-center" id="about">
                <div class="fl pa3 br4" id="about-items">
                  <h4 class="f2 tc lh-title tracked b">About</h4>
                  <p class="fl f3 tc lh-copy">
                    Gabriella Sarmiento Wilson, known professionally as H.E.R., 
                    is an American singer and songwriter. 
                    After initial music appearances and singles under her real name, 
                    Wilson re-emerged in 2016 as H.E.R., 
                    releasing her debut EP H.E.R. Volume 1 under RCA, followed by four subsequent EPs.
                  </p>
                </div>
              </section>
          
    );
}

export default About;