import React, {useState} from 'react';
import {BiMessageSquareError} from 'react-icons/bi'

import {Link, useNavigate} from "react-router-dom";
import {signInWithEmailAndPassword} from 'firebase/auth';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {LoginPageStyles, FormControl} from './styles';
import {auth} from 'libs/firebase';
import {Label, Input} from "ui/forms"
import {SubmitButton} from 'ui/buttons';
import { icons } from 'react-icons';



//STATE
function LoginPage (props) {
    // console.log(auth)
    //Start with state declarations
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [toggle, setToggle] = useState(false)

    let navigation = useNavigate()

    //JS
    function onHandleSubmit(e){
        e.preventDefault();

        navigation('/dashboard')

    }
    function handleClick(e){
        setToggle(!toggle)
    }

    const notify = (error) => toast.error(error.code,{
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        icon: <BiMessageSquareError/>
  
    });
    
    function onLoginRequest(e)
    {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredential=>{
            //move to dashboard page
            //useNavigate() react router
            // console.log(userCredential)
            navigation('/dashboard')
        })
        .catch(error=>{

            notify(error)
        })
        // console.log(password)
    }
    return (
        <>
        <div>
            {toggle? "toggle is true": "toggle is false"}
        </div>
        <button onClick={(e)=> handleClick()}>Clicky clicky</button>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Login Page</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard Page</Link>
                    </li>
                </ul>
            </nav>
            <header>
                <h1>Login Page</h1>
            </header>

            {/* <form onSubmit={onHandleSubmit}>
                <input type="text" required/>
                <button type="submit">sign in</button>
            </form> */}


            <LoginPageStyles>
                <ToastContainer/>
                <header><h2>Welcome Please Login</h2></header>

                <form onSubmit={onLoginRequest}>
                    <FormControl className='form-control'>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="text" placeholder='janedoe@email.gov' onChange={(e)=> setEmail(e.target.value)}/>
                    </FormControl>

                    <FormControl className='form-control'>
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="text" placeholder='i am a password' onChange={(e)=> setPassword(e.target.value)}/>
                    </FormControl>
                    <FormControl className='form-control'>
                        <SubmitButton type="submit" padding="0.88rem" bgcolor="tomato" margin="1rem 0 0" fs="1rem">log in to dashboard</SubmitButton>
                    </FormControl>
                </form>
            </LoginPageStyles>
        </>
      );
}

export default LoginPage;