import React from 'react';
import 'tachyons';
import image2 from '../assets/images/H.E.R._(2017)_album_cover.jpg';
import image3 from '../assets/images/I_Used_To_Know_Her.jpg';
import image4 from '../assets/images/Back_Of_My_Mind_By_H.E.R.png';
import '../../src/index.css'

function Albums () {

    return (
        <section  class="w-100 pv4 flex items-start" id="discography">
             <article class="br2 ba mv4 w-100 w-50-m w-25-l mw5 center tc" id="volume-1">
                  <img src={image2} alt="HER self-titled album" />
                  <h1>H.E.R</h1>
                  <div class="ph1">
                    <ul class="list pl0 ml0 center mw6 ba white br2 h-100 tc">
                      <li class="ph3 pv3 bb b--light-silver">Losing </li>
                      <li class="ph3 pv3 bb b--light-silver">Avenue</li>
                      <li class="ph3 pv3 bb b--light-silver">Let Me In</li>
                      <li class="ph3 pv3 bb b--light-silver">Light On</li>
                      <li class="ph3 pv3 bb b--light-silver">Say It Again</li>
                      <li class="ph3 pv3 bb b--light-silver">Facts</li>
                      <li class="ph3 pv3 bb b--light-silver">Focus</li>
                      <li class="ph3 pv3 bb b--light-silver">U</li>
                      <li class="ph3 pv3 bb b--light-silver">Every Kind of Way</li>
                      <li class="ph3 pv3 bb b--light-silver">Best Part (Ft. Daniel Caesar)</li>
                      <li class="ph3 pv3 bb b--light-silver">Change</li>
                      <li class="ph3 pv3 bb b--light-silver">Jungle</li>
                      <li class="ph3 pv3 bb b--light-silver">Free</li>
                      <li class="ph3 pv3 bb b--light-silver">Rather Be</li>
                      <li class="ph3 pv3 bb b--light-silver">2</li>
                      <li class="ph3 pv3 bb b--light-silver">Hopes Up</li>
                      <li class="ph3 pv3 bb b--light-silver">Still Down</li>
                      <li class="ph3 pv3 bb b--light-silver">Wait for It</li>
                      <li class="ph3 pv3 bb b--light-silver">Pigment (Full Version)</li>
                      <li class="ph3 pv3 bb b--light-silver">Gone Away</li>
                      <li class="ph3 pv3 bb b--light-silver">I Won't</li>
                    </ul>
                  </div>
                </article>

                {/* <!-- I Used to Know Her album --> */}
                <article class="br2 ba mv4 w-100 w-50-m w-25-l mw5 tc" id="volume-2">
                  <img src={image3} alt="I Used To Know HER album center" />
                  <h1>I Used to Know Her</h1>
                  <div class="ph1">
                    <ul class="list pl0 ml0 center mw6 ba white br2 h-100 tc">
                      <li class="ph3 pv3 bb b--light-silver">Lost Souls (Ft. DJ Scratch)</li>
                      <li class="ph3 pv3 bb b--light-silver">Fate</li>
                      <li class="ph3 pv3 bb b--light-silver">Carried Away</li>
                      <li class="ph3 pv3 bb b--light-silver">Going (Full)</li>
                      <li class="ph3 pv3 bb b--light-silver">Be on My Way (Full)</li>
                      <li class="ph3 pv3 bb b--light-silver">Can't Help Me</li>
                      <li class="ph3 pv3 bb b--light-silver">Something Keeps Pulling Me Back</li>
                      <li class="ph3 pv3 bb b--light-silver">Feel a Way</li>
                      <li class="ph3 pv3 bb b--light-silver">21</li>
                      <li class="ph3 pv3 bb b--light-silver">Racks (Ft. Cordae)</li>
                      <li class="ph3 pv3 bb b--light-silver">I'm Not OK</li>
                      <li class="ph3 pv3 bb b--light-silver">Against Me</li>
                      <li class="ph3 pv3 bb b--light-silver">Could've Been (Ft. Bryson Tiller)</li>
                      <li class="ph3 pv3 bb b--light-silver">Good to Me</li>
                      <li class="ph3 pv3 bb b--light-silver">Take You There</li>
                      <li class="ph3 pv3 bb b--light-silver">As I Am</li>
                      <li class="ph3 pv3 bb b--light-silver">Hard Place (Single Version)</li>
                      <li class="ph3 pv3 bb b--light-silver">Wait for It</li>
                      <li class="ph3 pv3 bb b--light-silver">Uninvited (Live)</li>
                      <li class="ph3 pv3 bb b--light-silver">Lord Is Coming (Remix) (Ft. Cordae)</li>
                    </ul>
                  </div>
                </article>

                {/* <!-- Back Of My Mind album --> */}
              <article class="br2 ba mv4 w-100 w-50-m w-25-l mw5 center tc" id="volume-3">
                <img src={image4} alt="Back of My Mind album" />
                <h1>Back Of My Mind</h1>
                <div class="ph1">
                <ul class="list pl0 ml0 center mw6 ba white br2 h-100 tc">
                      <li class="ph3 pv3 bb b--light-silver">We Made It</li>
                      <li class="ph3 pv3 bb b--light-silver">Back of My Mind (Ft. Ty Dolla $ign)</li>
                      <li class="ph3 pv3 bb b--light-silver">Trauma (Ft. Cordae)</li>
                      <li class="ph3 pv3 bb b--light-silver">Damage</li>
                      <li class="ph3 pv3 bb b--light-silver">Find A Way (Ft. Lil Baby)</li>
                      <li class="ph3 pv3 bb b--light-silver">Bloody Waters</li>
                      <li class="ph3 pv3 bb b--light-silver">Closer To Me</li>
                      <li class="ph3 pv3 bb b--light-silver">Come Through (Ft. Chris Brown)</li>
                      <li class="ph3 pv3 bb b--light-silver">My Own</li>
                      <li class="ph3 pv3 bb b--light-silver">Lucky</li>
                      <li class="ph3 pv3 bb b--light-silver">Cheat Code</li>
                      <li class="ph3 pv3 bb b--light-silver">Process</li>
                      <li class="ph3 pv3 bb b--light-silver">Hard To Love</li>
                      <li class="ph3 pv3 bb b--light-silver">I Can Havce It All (Ft. DJ Khaled)</li>

                  </ul>
                </div>
              </article>
        </section>
    );

}

export default Albums;