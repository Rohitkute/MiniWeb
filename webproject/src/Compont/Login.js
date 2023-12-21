import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Login = ()=>{

  return(
  <div>
    <div id="main-wrapper" class="container">
    <div class="row justify-content-center">
        <div class="col-xl-10">
            <div class="card border-0">
                <div class="card-body p-0">
                    <div class="row no-gutters">
                        <div class="col-lg-6">
                            <div class="p-5">
                                <div class="mb-5">
                                    <h3 class="h4 font-weight-bold text-theme">Login</h3>
                                </div>

                                <h6 class="h5 mb-0">Welcome!</h6>
                                <p class="text-muted mt-2 mb-5">Enter your email address and password to access admin panel.</p>

                                <form>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1"/>
                                    </div>
                                    <div class="form-group mb-5">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                                    </div>
                                    <button type="submit" class="btn btn-theme" >Login</button>
                                    <a href="#l" class="forgot-link float-right text-primary">Forgot password?</a>
                                </form>
                            </div>
                        </div>

                        <div class="col-lg-6 d-none d-lg-inline-block">
                            <div class="account-block rounded-right">
                                <div class="overlay rounded-right"></div>
                                <div class="account-testimonial">
                                    <h4 class="text-white mb-4">An exceptional experience every time.!</h4>
                                    <p class="lead text-white">"We have compiled a list of some of the catchiest event planning slogans and tag lines ever thought up. After the slogans, you will then see the Greatest Event Planning Company Names of All-Time and our special edition post that reveals the Perfect Slogan Formula."</p>
                                    <p>- Rohit Kute</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
            

            <p class="text-muted text-center mt-3 mb-0">Don't have an account? <a href="" class="text-primary ml-1">register</a></p>

            

        </div>
        
    </div>
    
</div>
  </div>
  )
}
export default Login;

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