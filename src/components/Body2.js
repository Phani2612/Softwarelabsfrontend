import React from 'react'
import './Body2.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

function Body2() {
    return (
        <div className='body2container' >   {/* start of body2container */}



            <h1 id='body2header1' >Nolan AI is a collaborative film production suite</h1>

            <h4 id='body2header4' >"covering the full film production process from concept creation and screenwriting to planning and stage production"</h4>


            <div className='body2box1'  >     {/* start of body2box1 */}



                <Link className='body2link'>

                <div className="icon-circle">
        <FontAwesomeIcon icon={faEdit} />
      </div>

                    <h4 id='body2header4' >AI Co-Pilot Editor</h4>

                    <h6 id='body2header6'>Overcome writers block with AI-driven prompts and</h6>
                    <h6 id='body2header6'>suggestions , ensuring a seamless writing flow.</h6>

                </Link>



                <Link  className='body2link'>

                    <div  className="icon-circle">
                    <FontAwesomeIcon icon={faEdit} />

                    </div>

                    <h4 id='body2header4'>AI Co-Pilot Editor</h4>

                    <h6 id='body2header6'>Overcome writers block with AI-driven prompts and</h6>
                    <h6 id='body2header6'>suggestions , ensuring a seamless writing flow.</h6>

                </Link>




                <Link className='body2link'>

                 <div className="icon-circle">

                 <FontAwesomeIcon icon={faEdit} />
                 </div>

                    <h4 id='body2header4' >AI Co-Pilot Editor</h4>

                    <h6 id='body2header6'>Overcome writers block with AI-driven prompts and</h6>
                    <h6 id='body2header6' >suggestions , ensuring a seamless writing flow.</h6>

                </Link>



            </div>  {/* end of body2box1 */}





           <div className='body2box2'>

             
             
           <Link  className='body2link'>

<div  className="icon-circle">

<FontAwesomeIcon icon={faEdit} />
</div>

<h4 id='body2header4' >AI Co-Pilot Editor</h4>

<h6 id='body2header6'>Overcome writers block with AI-driven prompts and</h6>
<h6 id='body2header6'>suggestions , ensuring a seamless writing flow.</h6>

</Link>




<Link className='body2link'>

<div className="icon-circle">

<FontAwesomeIcon icon={faEdit}   />

</div>

<h4 id='body2header4'>AI Co-Pilot Editor</h4>

<h6 id='body2header6'>Overcome writers block with AI-driven prompts and</h6>
<h6 id='body2header6'>suggestions , ensuring a seamless writing flow.</h6>

</Link>




           </div>    {/* end of body2box2 */}

          



           <button type="button" class="btn btn-primary" id='signupbutton' >Sign up for free</button>



<h2 id='body2header2' style={{color : 'white' , marginTop : '50px'}} >Leading the charge in Ethical AI</h2>



<h5 id='body2header5' >At NolanAI, we prioritize the ethical implications of AI in the creative industry.</h5>

<h5  id='body2header5'>We believe in AI-powered tools that enhance human-driven storytelling.</h5>


<button type="button" class="btn btn-primary" id='learnmore' >Learn more</button>



<h2 id='body2header2' >From screen writing to pre-production,</h2>

<h2 id='body2header2'>we got you covered!</h2>




        </div>   // end of body2container

    )
}

export default Body2