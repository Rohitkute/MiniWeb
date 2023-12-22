// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// const Login = ()=>{

//   return(
//   <div>
//     <div id="main-wrapper" class="container">
//     <div class="row justify-content-center">
//         <div class="col-xl-10">
//             <div class="card border-0">
//                 <div class="card-body p-0">
//                     <div class="row no-gutters">
//                         <div class="col-lg-6">
//                             <div class="p-5">
//                                 <div class="mb-5">
//                                     <h3 class="h4 font-weight-bold text-theme">Login</h3>
//                                 </div>

//                                 <h6 class="h5 mb-0">Welcome!</h6>
//                                 <p class="text-muted mt-2 mb-5">Enter your email address and password to access admin panel.</p>

//                                 <form>
//                                     <div class="form-group">
//                                         <label for="exampleInputEmail1">Email address</label>
//                                         <input type="email" class="form-control" id="exampleInputEmail1"/>
//                                     </div>
//                                     <div class="form-group mb-5">
//                                         <label for="exampleInputPassword1">Password</label>
//                                         <input type="password" class="form-control" id="exampleInputPassword1"/>
//                                     </div>
//                                     <button type="submit" class="btn btn-theme" >Login</button>
//                                     <a href="#l" class="forgot-link float-right text-primary">Forgot password?</a>
//                                 </form>
//                             </div>
//                         </div>

//                         <div class="col-lg-6 d-none d-lg-inline-block">
//                             <div class="account-block rounded-right">
//                                 <div class="overlay rounded-right"></div>
//                                 <div class="account-testimonial">
//                                     <h4 class="text-white mb-4">An exceptional experience every time.!</h4>
//                                     <p class="lead text-white">"We have compiled a list of some of the catchiest event planning slogans and tag lines ever thought up. After the slogans, you will then see the Greatest Event Planning Company Names of All-Time and our special edition post that reveals the Perfect Slogan Formula."</p>
//                                     <p>- Rohit Kute</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
                
//             </div>
            

//             <p class="text-muted text-center mt-3 mb-0">Don't have an account? <a href="" class="text-primary ml-1">register</a></p>

            

//         </div>
        
//     </div>
    
// </div>
//   </div>
//   )
// }
// export default Login;
// -----------------------------------------------------

// import React from 'react';
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBInput
// }
// from 'mdb-react-ui-kit';

// function Login() {
//   return (
//     <MDBContainer className="my-5 gradient-form">

//       <MDBRow>

//         <MDBCol col='6' className="mb-5">
//           <div className="d-flex flex-column ms-5">

//             <div className="text-center">
//               <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
//                 style={{width: '185px'}} alt="logo" />
//               <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
//             </div>

//             <p>Please login to your account</p>


//             <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
//             <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>


//             <div className="text-center pt-1 mb-5 pb-1">
//               <MDBBtn className="mb-4 w-100 gradient-custom-2">Sign in</MDBBtn>
//               <a className="text-muted" href="#!">Forgot password?</a>
//             </div>

//             <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
//               <p className="mb-0">Don't have an account?</p>
//               <MDBBtn outline className='mx-2' color='danger'>
//                 Danger
//               </MDBBtn>
//             </div>

//           </div>

//         </MDBCol>

//         <MDBCol col='6' className="mb-5">
//           <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

//             <div className="text-white px-3 py-4 p-md-5 mx-md-4">
//               <h4 class="mb-4">We are more than just a company</h4>
//               <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
//                 tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
//                 exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//               </p>
//             </div>

//           </div>

//         </MDBCol>

//       </MDBRow>

//     </MDBContainer>
//   );
// }

// export default Login;
// -----------------------------------------------------------
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Login = () => {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [errors, setErrors] = useState({});
//   const [serverError, setServerError] = useState('');
//   const [loggedInUser, setLoggedInUser] = useState(null);
//   const [loginStatus, setLoginStatus] = useState(false);

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newErrors = {};
//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     }
//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     }

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       fetch('http://localhost:9000/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       })
//         .then((response) => {
//           if (response.ok) {
//             return response.json();
//           } else {
//             throw new Error(`Login failed: ${response.statusText}`);
//           }
//         })
//         .then((data) => {
//           console.log(data.message);
//           console.log(data.user.Name);

//           setLoginStatus(true);
//           if (loginStatus) {
//             setLoggedInUser(data.user.Name);
//           }

//           setServerError('');
//         })
//         .catch((error) => {
//           console.error('Login failed:', error.message);
//           setLoginStatus(false);
//           setServerError('Login failed. Please check your credentials.');
//           setLoggedInUser('');
//         });
//     }
//   };

//   return (
//     <div id="main-wrapper" className="container">
//       <div className="row justify-content-center">
//         <div className="col-xl-10">
//           <div className="card border-0">
//             <div className="card-body p-0">
//               <div className="row no-gutters">
//                 <div className="col-lg-6">
//                   <div className="p-5">
//                     <div className="mb-5">
//                       <h3 className="h4 font-weight-bold text-theme">Login</h3>
//                     </div>

//                     <h6 className="h5 mb-0">Welcome!</h6>
//                     <p className="text-muted mt-2 mb-5">
//                       Enter your email address and password to access admin panel.
//                     </p>

//                     <form onSubmit={handleSubmit}>
//                       <div className="form-group">
//                         <label htmlFor="exampleInputEmail1">Email address</label>
//                         <input
//                           type="email"
//                           className={errors.email ? 'is-invalid form-control' : 'form-control'}
//                           id="exampleInputEmail1"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleInputChange}
//                         />
//                         {errors.email && (
//                           <div className="invalid-feedback">{errors.email}</div>
//                         )}
//                       </div>
//                       <div className="form-group mb-5">
//                         <label htmlFor="exampleInputPassword1">Password</label>
//                         <input
//                           type="password"
//                           className={errors.password ? 'is-invalid form-control' : 'form-control'}
//                           id="exampleInputPassword1"
//                           name="password"
//                           value={formData.password}
//                           onChange={handleInputChange}
//                         />
//                         {errors.password && (
//                           <div className="invalid-feedback">{errors.password}</div>
//                         )}
//                       </div>
//                       <button type="submit" className="btn btn-theme">
//                         Login
//                       </button>
//                       <a href="#l" className="forgot-link float-right text-primary">
//                         Forgot password?
//                       </a>
//                     </form>
//                   </div>
//                 </div>

//                 <div className="col-lg-6 d-none d-lg-inline-block">
//                   <div className="account-block rounded-right">
//                     <div className="overlay rounded-right"></div>
//                     <div className="account-testimonial">
//                       <h4 className="text-white mb-4">An exceptional experience every time.!</h4>
//                       <p className="lead text-white">
//                         "We have compiled a list of some of the catchiest event planning slogans and
//                         tag lines ever thought up. After the slogans, you will then see the Greatest
//                         Event Planning Company Names of All-Time and our special edition post that
//                         reveals the Perfect Slogan Formula."
//                       </p>
//                       <p>- Rohit Kute</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <p className="text-muted text-center mt-3 mb-0">
//             Don't have an account? <a href="" className="text-primary ml-1">
//               register
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>

//   );
// };

// export default Login;

// ==================================

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegForm from './RegForm'; 
import { useNavigate } from 'react-router-dom';

const Login = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loginStatus, setLoginStatus] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch('http://localhost:9000/RegForm', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data.message);
          console.log(data.user.Name);

          setLoginStatus(true);
          setLoggedInUser(data.user.Name);
          setServerError('');
          setPopupOpen(true);

          window.alert(`Login successful! Welcome, ${data.user.email}.`);
        } else {
            window.alert('Login failed. Please check your credentials.');
          throw new Error(`Login failed: ${response.statusText}`);
        }
      } catch (error) {
        console.error('Login failed:', error.message);
        setLoginStatus(false);
        setServerError('Login failed. Please check your credentials.');
        setLoggedInUser('');
      }
    }
  };
  const closePopup = () => {
    setPopupOpen(false);
  };
  const openRegistrationForm = () => {
    setShowRegistration(true);
  };


  return (
    <div id="main-wrapper" className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10">
          <div className="card border-0">
            <div className="card-body p-0">
              <div className="row no-gutters">
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="mb-5">
                      <h3 className="h4 font-weight-bold text-theme">Login</h3>
                    </div>

                    <h6 className="h5 mb-0">Welcome!</h6>
                    <p className="text-muted mt-2 mb-5">
                      Enter your email address and password to access admin panel.
                    </p>

                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input
                          type="email"
                          className={errors.email ? 'is-invalid form-control' : 'form-control'}
                          id="exampleInputEmail1"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                        {errors.email && (
                          <div className="invalid-feedback">{errors.email}</div>
                        )}
                      </div>
                      <div className="form-group mb-5">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                          type="password"
                          className={errors.password ? 'is-invalid form-control' : 'form-control'}
                          id="exampleInputPassword1"
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                        />
                        {errors.password && (
                          <div className="invalid-feedback">{errors.password}</div>
                        )}
                      </div>
                      <button type="submit" className="btn btn-theme">
                        Login
                      </button>
                      <a href="RegForm.js" className="forgot-link float-right text-primary">
                        Forgot password?
                      </a>
                    </form>
                  </div>
                </div>

                <div className="col-lg-6 d-none d-lg-inline-block">
                  <div className="account-block rounded-right">
                    <div className="overlay rounded-right"></div>
                    <div className="account-testimonial">
                      <h4 className="text-white mb-4">An exceptional experience every time.!</h4>
                      <p className="lead text-white">
                        "We have compiled a list of some of the catchiest event planning slogans and
                        tag lines ever thought up. After the slogans, you will then see the Greatest
                        Event Planning Company Names of All-Time and our special edition post that
                        reveals the Perfect Slogan Formula."
                      </p>
                      <p>- Rohit Kute</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {showRegistration ? (
        <RegForm />
      ) : (
        <div className="row justify-content-center">
          {/* ... (rest of the login component code) */}
          <p className="text-muted text-center mt-3 mb-0">
            Don't have an account?{' '}
            <button type='button' className="text-primary ml-1" onClick={()=>{navigate('/register')}}>
              Register
            </button>
          </p>
        </div>
      )}
        </div>
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <p>Login successful! Welcome, {loggedInUser}.</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Login;

// ===============================

// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import RegForm from './RegForm'; // Make sure to provide the correct path to RegForm

// const Login = () => {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [errors, setErrors] = useState({});
//   const [serverError, setServerError] = useState('');
//   const [loggedInUser, setLoggedInUser] = useState(null);
//   const [loginStatus, setLoginStatus] = useState(false);
//   const [isPopupOpen, setPopupOpen] = useState(false);
//   const [showRegistration, setShowRegistration] = useState(false);

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const newErrors = {};
//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     }
//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     }

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       try {
//         const response = await fetch('http://localhost:9000/login', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(formData),
//         });

//         if (response.ok) {
//           const data = await response.json();
//           console.log(data.message);
//           console.log(data.user.Name);

//           setLoginStatus(true);
//           setLoggedInUser(data.user.Name);
//           setServerError('');
//           setPopupOpen(true);
//         } else {
//           throw new Error(`Login failed: ${response.statusText}`);
//         }
//       } catch (error) {
//         console.error('Login failed:', error.message);
//         setLoginStatus(false);
//         setServerError('Login failed. Please check your credentials.');
//         setLoggedInUser('');
//       }
//     }
//   };

//   const closePopup = () => {
//     setPopupOpen(false);
//   };

//   const openRegistrationForm = () => {
//     setShowRegistration(true);
//   };

//   return (
//     <div id="main-wrapper" className="container">
//       {showRegistration ? (
//         <RegForm />
//       ) : (
//         <div className="row justify-content-center">
//           {/* ... (rest of the login component code) */}
//           <p className="text-muted text-center mt-3 mb-0">
//             Don't have an account?{' '}
//             <button className="text-primary ml-1" onClick={openRegistrationForm}>
//               Register
//             </button>
//           </p>
//         </div>
//       )}
//       {/* ... (rest of the login component code) */}
//     </div>
//   );
// };

// export default Login;
