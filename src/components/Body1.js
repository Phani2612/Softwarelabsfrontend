import React from 'react'

import './Body1.css'

function Body1() {
  return (
  /*Start of Body1container  */  <div className='Body1container' >  


<div id='body1details' >

<h1  > Bring your film project to life</h1>

<h1 style={{display:'flex' ,flexDirection:'row' , alignItems:'center' , gap:'10px'}} >from<h1  id='body1h1' >idea</h1> to <h1 id='body1h1'>production</h1></h1>

<button    type="button" class="btn btn-primary">Start creating</button>

</div>



<div className='imagecontainer' >
<img id='Body1image'  src='/images/shooting.jpg' width ='50px'  />
</div>



    </div>  //end of Body1container
  )
}

export default Body1