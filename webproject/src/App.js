import React from 'react';
import './App.css';
//import Login from '../Login';
import {Link, Route,Routes} from 'react-router-dom'
import RegForm from './Compont/RegForm'
import Login from './Compont/Login';
import Ragis from './Compont/Ragis';
import RegistrationForm from './Compont/RegistrationForm';

function App() {
    return (
        <div>
            {/* <nav>
                <Link to='/register'>register</Link>
                <Link to='/'>register</Link>
            </nav> */}
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/register' element={<RegForm/>}/>
            </Routes>
        </div>
    );

}

export default App;
