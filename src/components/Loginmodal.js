import React, { useState } from 'react';
import LoginOptions from './LoginOptions';
import EmailLoginForm from './EmailLoginForm';
import './Loginmodal.css';
import Navbar from './Navbar';
import Footer from './Footer';

const LoginModal = ({ isOpen, onClose , state }) => {
  const [showEmailForm, setShowEmailForm] = useState(false);

  if (!isOpen) return null;

  return (
   

    <div  className='loginmodalcontainer'  >

<Navbar/>

<div className='loginanddetails'>

<div  >

<h3 id='loginmodalh3' >LOG IN</h3>

<h1 id='loginmodalh1' >Unlock the full NOLAN</h1>

<h3 id='loginmodalh3'  >Experience</h3>



</div>


     
        {showEmailForm ? (
          <EmailLoginForm state = {state} onBack={() => setShowEmailForm(false)} />
        ) : (
          <LoginOptions    onEmailClick={() => setShowEmailForm(true)} />
        )}

    
  


</div>






<Footer/>



    </div>
  );
};

export default LoginModal;
