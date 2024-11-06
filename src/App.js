
// import Loginmodal from './components/Loginmodal';
// import Home from './components/Home';
// import logo from './logo.svg';
// import { useState } from 'react';
// import { Navigate } from 'react-router-dom';
// // import './App.css';  // We will use this later

// import {BrowserRouter , Route , Routes , Link} from 'react-router-dom'

// import Dashboard from './BusinessLogic/Dashboard';
// import RegisterForm from './components/Register';
// import Forgot from './components/Forget';
// import ResetPassword from './components/ResetPassword';
// import ParticularProject from './BusinessLogic/ParticularProject';
// import EditingDashboard from '../src/Editing/EditingDashboard'

// function App() {



//   const [isModalOpen, setIsModalOpen] = useState(false); // State for managing modal visibility

//   const handleLoginClick = () => {
//     setIsModalOpen(true); // Set isModalOpen to true to show the modal
//   };


//   const handleCloseModal = () => {
//     setIsModalOpen(false); // Close the modal
//   };

//   return (
//    <BrowserRouter>
   
   
   
//    <div className="App">
     
// <Routes>


// <Route  path='/' element={<Home onLoginClick={handleLoginClick} />} ></Route>
// <Route 
//             path="/login" 
//             element={isModalOpen ? <Loginmodal  state = {setIsModalOpen}  isOpen={isModalOpen} onClose={handleCloseModal} /> : <Navigate to="/" />} 
//           />


// <Route path='/dashboard' element={<Dashboard/>} ></Route>

// <Route path='/register' element = {<RegisterForm/>} ></Route>

// <Route path='/forgot' element = {<Forgot/>} ></Route>

// <Route path='/reset-password' element = {<ResetPassword/>} ></Route>


// <Route path='/project/:OID' element = {<ParticularProject/>}  ></Route>

// <Route path='/editing/:OID/:ScreenPlayID' element = {<EditingDashboard/>}  ></Route>

// <Route path='/editingg/:OID/:BreakdownID' element = {<EditingDashboard/>}  ></Route>


// <Route path='/editinggg/:OID/:TreatmentID' element = {<EditingDashboard/>}  ></Route>

// </Routes>




//      </div>
   
   
//    </BrowserRouter>
//   );
// }

// export default App;









import Loginmodal from './components/Loginmodal';
import Home from './components/Home';
import logo from './logo.svg';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
// import './App.css';  // We will use this later

import {BrowserRouter , Route , Routes , Link} from 'react-router-dom'

import Dashboard from './BusinessLogic/Dashboard';
import RegisterForm from './components/Register';
import Forgot from './components/Forget';
import ResetPassword from './components/ResetPassword';
import ParticularProject from './BusinessLogic/ParticularProject';
import EditingDashboard from '../src/Editing/EditingDashboard'
import { AuthProvider } from './Authcontext';
import RedirectWrapper from './RedirectWrapper';
import ProtectedRoute from './ProtectedRoute';
import RouteChangeTracker from './Routetracker';
import AboutUs from './components/About';
import NolanAI from './components/Features';

function App() {



  const [isModalOpen, setIsModalOpen] = useState(false); // State for managing modal visibility

  let SESSIONTOKEN_FROM_LOCAL = localStorage.getItem("Session_token");



  const handleLoginClick = () => {
    setIsModalOpen(true); // Set isModalOpen to true to show the modal
  };


  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
   <BrowserRouter>
   
   
   
   <div className="App">
     
<AuthProvider>

  <RouteChangeTracker data={SESSIONTOKEN_FROM_LOCAL}  />

<Routes>


<Route  path='/' element={<Home onLoginClick={handleLoginClick} />} ></Route>
<Route 
            path="/login" 
            element={isModalOpen ? <RedirectWrapper>
              <Loginmodal  state = {setIsModalOpen}  isOpen={isModalOpen} onClose={handleCloseModal} />
            </RedirectWrapper> : <Navigate to="/" />} 
          />


<Route path='/dashboard' element={<ProtectedRoute>
  <Dashboard/>
</ProtectedRoute>} ></Route>

<Route path='/register' element = {<RegisterForm/>} ></Route>

<Route path='/forgot' element = {<ProtectedRoute>
  <Forgot/>

</ProtectedRoute>} ></Route>

<Route path='/reset-password' element = {<ProtectedRoute>

  <ResetPassword/>
</ProtectedRoute>} ></Route>


<Route path='/project/:OID' element = {<ProtectedRoute>
  <ParticularProject/>

</ProtectedRoute>}  ></Route>

<Route path='/editing/:OID/:ScreenPlayID' element = {<ProtectedRoute>

  <EditingDashboard/>

</ProtectedRoute>}  ></Route>

<Route path='/editingg/:OID/:BreakdownID' element = {<ProtectedRoute>

  <EditingDashboard/>

</ProtectedRoute>}  ></Route>


<Route path='/editinggg/:OID/:TreatmentID' element = {<ProtectedRoute>
  <EditingDashboard/>
</ProtectedRoute>}  ></Route>



<Route path='/about' element = {<AboutUs/>}  ></Route>

<Route path='/features' element = {<NolanAI/>} ></Route>

</Routes>




</AuthProvider>




     </div>
   
   
   </BrowserRouter>
  );
}

export default App;


