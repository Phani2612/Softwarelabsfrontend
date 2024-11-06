import React from 'react'
import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,  faTwitter, faInstagram, faLinkedin, faYoutube , faThreads , faDiscord } from '@fortawesome/free-brands-svg-icons';


import './Footer.css'

function Footer() {



    const links = [
        { label: "Testimonials", path: "/testimonials" },
        { label: "Privacy Policy", path: "/privacy-policy" },
        { label: "Terms of Service", path: "/terms-of-service" },
        { label: "Referral Program", path: "/referral-program" },
        { label: "Releases", path: "/releases" },
        { label: "FAQ", path: "/faq" },
      ];

      
      
  return (
    <div  className='footercontainer' >


<h4 id='footerh4' >AI script</h4>

<div id='copyright' >

<h6 id='footerheader6' >@NolanAI, INC.2024</h6>

{links.map((link, index) => (
        <Link key={index} to={link.path} style={{ textDecoration: "none", color: "white" }}>
          {link.label} |
        </Link>
      ))}

</div>



<div className='social-icons'>
       <a  href='https://discord.gg/Ezfk2RTgX5' > <FontAwesomeIcon  id='footericon'   icon={faDiscord} style={{ color: "white", fontSize: "24px" }} /></a>
       <a href='https://twitter.com/nolanaiapp' > <FontAwesomeIcon   id='footericon'   icon={faTwitter} style={{ color: "white", fontSize: "24px" }} /></a>
      <a href='https://instagram.com/nolanaiapp' >  <FontAwesomeIcon  id='footericon'    icon={faInstagram} style={{ color: "white", fontSize: "24px" }} /></a>
     <a href='https://www.threads.net/@nolanaiapp' >   <FontAwesomeIcon    id='footericon'  icon={faThreads} style={{ color: "white", fontSize: "24px" }} /></a>
   <a href='https://www.youtube.com/channel/UCSernMEBRoBJvRJfdc1n2CQ' >     <FontAwesomeIcon   id='footericon'  icon={faYoutube} style={{ color: "white", fontSize: "24px" }} /></a>
      </div>






    </div>
  )
}

export default Footer