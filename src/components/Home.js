import React from 'react'
import Navbar from './Navbar'
import Body1 from './Body1'
import Body2 from './Body2'
import Body3 from './Body3'
import Body4 from './Body4'
import Footer from './Footer'

function Home({ onLoginClick }) {
  return (
    <div style={{backgroundColor : '#282c34'}} >

<Navbar  onLoginClick={onLoginClick}  />
<Body1/>
<Body2/>
<Body3/>
<Body4/>
<Footer/>

    </div>
  )
}

export default Home