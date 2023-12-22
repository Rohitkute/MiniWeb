// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const RegForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [gender, setGender] = useState('');
//   const [city, setCity] = useState('');
//   const [isChecked, setIsChecked] = useState(false);

//   const [errors, setErrors] = useState({});
//   const [msg, setMsg] = useState('');

//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validate email, password, gender, and city...
//     const emailError = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? 'Invalid email address' : '';
//     const passwordError = !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password) ?
//       'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character' : '';
//     const genderError = !gender ? 'Gender is required' : '';
//     const cityError = !city.trim() ? 'City is required' : '';

//     // Set errors
//     setErrors({
//       email: emailError,
//       password: passwordError,
//       gender: genderError,
//       city: cityError,
//     });

//     // Check if there are validation errors
//     if (emailError || passwordError || genderError || cityError) {
//       // If there are errors, do not proceed with the submission
//       return;
//     }

//     // If validation is successful, proceed with the fetch request
//     const reqData = {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json',
//       },
//       body: JSON.stringify({
//         email,
//         password,
//         gender,
//         city,
//         isChecked,
//       }),
//     };

//     fetch('http://localhost:9000/register', reqData)
//       .then((res) => res.text())
//       .then((str) => setMsg(str));
//   };

//   return (
//     <div className="card container mt-5 d-flex justify-content-center" style={{ width: '35rem' }}>
//       <h1 className="text-primary mb-4">Registration form</h1>
//       <form onSubmit={handleSubmit}>
//         {/* ... (other form elements) */}
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Email:
//           </label>
//           <input
//             type="email"
//             className={`form-control ${errors.email ? 'is-invalid' : ''}`}
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <span style={{ color: 'red' }}>{errors.email}</span>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">
//             Password:
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="gender" className="form-label">
//             Gender:
//           </label>
//           <select
//             className="form-control"
//             id="gender"
//             value={gender}
//             onChange={(e) => setGender(e.target.value)}
//             required
//           >
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="other">Other</option>
//           </select>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="city" className="form-label">
//             City:
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="city"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-3 form-check">
//           <input
//             type="checkbox"
//             className="form-check-input"
//             id="termsCheckbox"
//             checked={isChecked}
//             onChange={handleCheckboxChange}
//           />
//           <label className="form-check-label" htmlFor="termsCheckbox">
//             I accept the terms and conditions
//           </label>
//         </div>
//         {/* ... (other form elements with validation) */}
//         <button type="submit" className="btn btn-primary mb-4">
//           Submit
//         </button>
//       </form>

//       {/* Display success or error message */}
//       {msg && <div>{msg}</div>}
//     </div>
//   );
// };

// export default RegForm;

// // ========================
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



const RegForm = () => {

  let navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    //console.log('Form submitted:', { email, password, gender, city, isChecked });
    console.log('information not show');
};

const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Form submitted:', { email, password, gender, city, isChecked });
  };

  return (
    // <div className='container '>
    <div className="card container mt-5 d-flex justify-content-center" style={{"width":'35rem'}}>
      <h1 className='text-primary mb-4'>Registration form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">
            Gender:
          </label>
          <select
            className="form-control"
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            City:
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="termsCheckbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            
          />
          <label className="form-check-label" htmlFor="termsCheckbox">
            I accept the terms and conditions
          </label>
        </div>
        <button type="submit" className="btn btn-primary mb-4">
          Submit
          
        </button>
      </form>
      
    </div>
    // </div>
  );
};

export default RegForm;

// =================================================

// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const RegForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [gender, setGender] = useState('');
//   const [city, setCity] = useState('');
//   const [isChecked, setIsChecked] = useState(false);

//   const [errors, setErrors] = useState({});
//   const [msg, setMsg] = useState('');

//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validate email, password, gender, and city...
//     const emailError = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? 'Invalid email address' : '';
//     const passwordError = !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password) ?
//       'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character' : '';
//     const genderError = !gender ? 'Gender is required' : '';
//     const cityError = !city.trim() ? 'City is required' : '';

//     // Set errors
//     setErrors({
//       email: emailError,
//       password: passwordError,
//       gender: genderError,
//       city: cityError,
//     });

//     // Check if there are validation errors
//     if (emailError || passwordError || genderError || cityError) {
//       // If there are errors, do not proceed with the submission
//       return;
//     }

//     // If validation is successful, proceed with the fetch request
//     const reqData = {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json',
//       },
//       body: JSON.stringify({
//         email,
//         password,
//         gender,
//         city,
//         isChecked,
//       }),
//     };

//     fetch('http://localhost:9000/register', reqData)
//       .then((res) => res.text())
//       .then((str) => setMsg(str));
//   };

//   return (
//     <div className="card container mt-5 d-flex justify-content-center" style={{ width: '35rem' }}>
//       <h1 className="text-primary mb-4">Registration form</h1>
//       <form onSubmit={handleSubmit}>
//         {/* ... (other form elements) */}
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Email:
//           </label>
//           <input
//             type="email"
//             className={`form-control ${errors.email ? 'is-invalid' : ''}`}
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <span style={{ color: 'red' }}>{errors.email}</span>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">
//             Password:
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="gender" className="form-label">
//             Gender:
//           </label>
//           <select
//             className="form-control"
//             id="gender"
//             value={gender}
//             onChange={(e) => setGender(e.target.value)}
//             required
//           >
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="other">Other</option>
//           </select>
//         </div><div>
//         < className="mb-3">
//           <label htmlFor="city" className="form-label">
//             City:
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="city"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             required
//           />
//           </div>
//         <div className="mb-3 form-check">
//           <input
//             type="checkbox"
//             className="form-check-input"
//             id="termsCheckbox"
//             checked={isChecked}
//             onChange={handleCheckboxChange}
            
//           />
//           <label className="form-check-label" htmlFor="termsCheckbox">
//             I accept the terms and conditions
//           </label>
//         {/* ... (other form elements with validation) */}
//         <button type="submit" className="btn btn-primary mb-4">
//           Submit
//         </button>
//       </form>

//       {/* Display success or error message */}
//       {msg && <div>{msg}</div>}
//     </div>
//   );
// };

// export default RegForm;

// ============================

// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Alert } from 'react-bootstrap';

// const RegForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [gender, setGender] = useState('');
//   const [city, setCity] = useState('');
//   const [isChecked, setIsChecked] = useState(false);

//   const [errors, setErrors] = useState({});
//   const [msg, setMsg] = useState('');
//   const [popup, setPopup] = useState({
//     email: false,
//     password: false,
//     gender: false,
//     city: false,
//     terms: false,
//   });

//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
//     setPopup({ ...popup, terms: false });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validate email, password, gender, and city...
//     const emailError = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? 'Invalid email address' : '';
//     const passwordError = !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password) ?
//       'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character' : '';
//     const genderError = !gender ? 'Gender is required' : '';
//     const cityError = !city.trim() ? 'City is required' : '';

//     // Set errors
//     setErrors({
//       email: emailError,
//       password: passwordError,
//       gender: genderError,
//       city: cityError,
//     });

//     // Check if there are validation errors
//     if (emailError || passwordError || genderError || cityError) {
//       // If there are errors, do not proceed with the submission
//       return;
//     }

//     // If validation is successful, proceed with the fetch request
//     const reqData = {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json',
//       },
//       body: JSON.stringify({
//         email,
//         password,
//         gender,
//         city,
//         isChecked,
//       }),
//     };

//     fetch('http://localhost:9000/register', reqData)
//       .then((res) => res.text())
//       .then((str) => {
//         setMsg(str);
//         if (str === 'Form submitted successfully') {
//           setPopup({
//             email: true,
//             password: true,
//             gender: true,
//             city: true,
//             terms: true,
//           });
//           // Clear form fields after submission
//           setEmail('');
//           setPassword('');
//           setGender('');
//           setCity('');
//           setIsChecked(false);
//         }
//       });
//   };

//   return (
//     <div className="card container mt-5 d-flex justify-content-center" style={{ width: '35rem' }}>
//       <h1 className="text-primary mb-4">Registration form</h1>
//       <form onSubmit={handleSubmit}>
//         {/* ... (other form elements) */}
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Email:
//           </label>
//           <input
//             type="email"
//             className={`form-control ${errors.email ? 'is-invalid' : ''}`}
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <span style={{ color: 'red' }}>{errors.email}</span>
//           {popup.email && <div className="popup">Email field is completed!</div>}
//         </div>
//         {/* ... (other form elements) */}
//         {/* ... (other form elements) */}
//         <button type="submit" className="btn btn-primary mb-4">
//           Submit
//         </button>
//       </form>

//       {/* Display success or error message */}
//       {msg && (
//         <Alert variant={msg.includes('successfully') ? 'success' : 'danger'} onClose={() => setMsg('')} dismissible>
//           {msg}
//         </Alert>
//       )}
//     </div>
//   );
// };

// export default RegForm;
