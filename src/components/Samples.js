import React from 'react';
import data from '../data';
import '../../src/index.css'
import 'tachyons';


function Samples () {
    return (
        <div>
       {
         data && data.map ( data => {
           return (

            <div key={ data.id }>

              { data.readable ? (

            <div className="main"> 
              <div className="fl f3 tc lh-copy pv3" id="samples">

                 <a href={data.preview}>{data.title}</a>
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