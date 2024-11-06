import React from 'react'

import './Body3.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShield } from '@fortawesome/free-solid-svg-icons';

function Body3() {
  return (
    <div className='body3container' >

   <div id='body3box1' >
       {/* start of body3box1 */}

   <div >
   <img  id='body3image1'  src='/images/kiranrao.jpeg' height='300px' width='300px' />
   </div>


     <div  >
     <h2 id='body3header2' >Enhance your</h2>

<h2 id='body3header2'  ><b>Screen writing experience</b></h2><br/>

<h5 id='body3header5' >Providing tailored solutions to overcome writer's block and stramlining your creative processes.</h5><br/>

<button type="button" class="btn btn-primary">Nolan AI for screen writers</button>


     </div>


   </div>   

   {/* end of body3box1 */}






   <div id='body3box2' >
       {/* start of body3box2 */}

     <div>
     <h2 id='body3header22' >Save time</h2>

<h2 id='body3header22'  >cutting down on trivial tasks</h2><br/>

<h5 id='body3header52' >revolutionizing the filmmaking process for producers: cutting costs and resources by automating script analysis. Helping create outstanding pitch decks resonating with your project</h5><br/>

<button type="button" id='producers'  class="btn btn-primary">Nolan AI for Producers</button>

     </div>

     

     <div  >
   <img id='body3image2'  src='/images/shobu.jpg' height='300px' width='300px' />
   </div>


   </div>   

   {/* end of body3box2 */}






   <div id='body3box3' >
       {/* start of body3box3 */}


       <div  >
   <img  id='body3image3' src='/images/rajamouli.jpg' height='300px' width='300px' />
   </div>


     <div >
     <h2 id='body3header2' >Have full control over the</h2>

<h2 id='body3header2'  ><b id='bold1' >creative process</b></h2><br/>

<h5 id='body3header5' >saving you valuable time by automating repetitive tasks and facilitating seamless collaboration with the rest of your team. assisting in crafting the perfect schedule for a smooth production workflows of your creative vision.</h5><br/>

<button type="button"   class="btn btn-primary">Nolan AI for Directors</button>

     </div>

     

    


   </div>   

   {/* end of body3box3 */}






<div id='body3box4'>


<div>

<h1 id='body3header1' >NolanAI <b id='bold1' >in Action</b></h1>


<h6  id='body3header6' >An independent filmmaker who is utilizing the full power of NolanAI to break down, </h6>


<h6 id='body3header6'>scripts, create pitch decks and storyboards, and reach his ultimate goal.</h6> ,<br/>

<h6 id='body3header6' >With its AI-powered features and user-friendly interface, it can help you bring your </h6>


<h6 id='body3header6' > stories to life in the most efficient and effective way possible, while respecting your unique creative voice.</h6><br/><br/>


<button type="button" class="btn btn-primary">View premium plans</button>

</div>
    

    <div id='body3video' >

<video id='video'  src='/images/meet_bryce.mp4'  controls autoPlay   ></video>

    </div>

</div>






<div id='lastheader' >

<h1 id='body3header1' ><b id='bold1'>Up your game</b> with nolanAI</h1>


<h5 id='body3header5'  >NolanAI is the ultimate tool for any screenwriter looking to improve their craft. With its AI-powered features and user-</h5>

<h5 id='body3header5'  >friendly interface, it can help you bring your stories to life in the most efficient and effective way possible, while respecting</h5>

<h5 id='body3header5'  >your unique creative voice.</h5>

</div>






    </div>
    // End of body3container
  )
}

export default Body3