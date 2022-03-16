import React from 'react';
import '../../src/index.css'
import 'tachyons';

function Videos () {
return (
    <div class="videos">
<h1 id="video">Videos</h1>
<div class="mw9 center ph3-ns">
  <div class="cf ph2-ns">
    <div class="fl w-25 pa2">
    <div class="outline bg-black">
    <iframe width="100%" height="500px" src="https://www.youtube.com/embed/PAFAfhod9TU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      </div>
    </div>
    <div class="fl w-25 pa2">
    <div class="outline bg-black">
    <iframe width="100%" height="500px" src="https://www.youtube.com/embed/50GjhhyfN_Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      
    </div>
    </div>

    <div class="fl w-25 pa2">
    <div class="outline bg-black">
    <iframe width="100%" height="500px" src="https://www.youtube.com/embed/Nu8TS2Vr6lo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    </div>
    </div>
  </div>
</div>

<h1 id="live-video">Live performances</h1>
<div class="mw9 center ph3-ns">
<div class="cf ph2-ns">
<div class="fl w-25 pa2">
      <div class="outline bg-black">
      <iframe width="100%" height="500px" src="https://www.youtube.com/embed/ZapsCvLokU8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
</div>
</div>

    </div>
    );
}

export default Videos;