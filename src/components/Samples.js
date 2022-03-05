import React from 'react';
import data from '../data';
import '../../src/index.css'
import 'tachyons';


function Samples () {
    return (
        <div className='samples'>
       {
         data && data.map ( data => {
           return (

            <div key={ data.id }>

              { data.readable ? (

            <div className="main">    

                {/* left side */}

              <div className="left">

                 <a id="samples" href={data.preview}>{data.title}</a>
              </div>
            </div>
              ) : null }
              
              
            </div>

           )
         })
       }

       
     </div>
    )
}

export default Samples;