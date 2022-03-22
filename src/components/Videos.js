import React from 'react';
import '../../src/index.css'
import 'tachyons';

function Videos () {
return (

// {/* <div class="mw9 center ph3-ns">
//   <div class="cf ph2-ns">
//     <div class="fl w-100 w-third-ns pa2">
//       <div class="outline bg-white pv4"></div>
//     </div>
//     <div class="fl w-50 w-third-ns pa2">
//       <div class="outline bg-white pv4"></div>
//     </div>
//     <div class="fl w-50 w-third-ns pa2">
//       <div class="outline bg-white pv4"></div>
//     </div>
//   </div>
// </div> */}
<div class="videos">
        <h1 id="video">Videos</h1>
<div class="mw9 center ph3-ns">
           
<div class="cf ph2-ns">
    <div class="video-container">
        <div class="fl w-25 pa2">
    <div class="outline bg-black">
        <iframe loading="lazy" width="100%" src="https://www.youtube.com/embed/PAFAfhod9TU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      
    </div>
        </div>
        </div>
   
    <div class="video-container">
        <div class="fl w-25 pa2">
        <div class="outline bg-black">
        <iframe loading="lazy" width="100%" src="https://www.youtube.com/embed/50GjhhyfN_Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      
        </div>
        </div>
    </div>

    <div class="video-container">
        <div class="fl w-25 pa2">
        <div class="outline bg-black">
        <iframe loading="lazy" width="100%" src="https://www.youtube.com/embed/Nu8TS2Vr6lo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    </div>
        </div>
    </div>
</div>
   
</div>
   

         <h1 id="live-video">Live performances</h1>
        <div class="mw9 center ph3-ns video-container">
        <div class="cf ph2-ns">
        <div class="fl w-25 pa2">
            <div class="outline bg-black">
            <iframe loading="lazy" width="100%" src="https://www.youtube.com/embed/ZapsCvLokU8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        </div>
        </div>

</div>
    );
}

export default Videos;