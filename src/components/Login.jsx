
import { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/userSlice';
import { USER_AVATAR } from '../utils/constant';

const Login = () => {
  const dispatch = useDispatch();

  const [isSignInForm , setInSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null)

  const firstName = useRef(null)
  const email = useRef(null);
  const password = useRef(null)


  const toggleSignInForm = () => {
    setInSignInForm(!isSignInForm);
    setErrorMessage(null);
    
  }

  const handleButtonClick  = () => {
   const message =  checkValidData(email?.current?.value , password?.current?.value)
    setErrorMessage(message);
    if (message) return;
    if(!isSignInForm){
        createUserWithEmailAndPassword(auth, email?.current?.value , password?.current?.value)
          .then(() => {
                // Profile updated!
            updateProfile(auth.currentUser, {
              displayName: firstName.current.value, photoURL:  USER_AVATAR
            }).then(() => {
              const {uid, email, displayName, photoURL} = auth.currentUser;              
                  dispatch(addUser({uid:uid, email:email, firstName:displayName , photoURL: photoURL}));
            }).catch((error) => {
              setErrorMessage(error.message)
            });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
          });
    }
    else{
    signInWithEmailAndPassword(auth, email?.current?.value , password?.current?.value)
      .then(() => {})
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage)
      });
    }
    
    
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img 
        src='https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg' 
        alt='main-image'
        />
      </div>

     <form onSubmit={(e) => e.preventDefault()} className='absolute p-12 bg-black my-36 w-3/12 mx-auto right-0 left-0 text-white rounded-lg opacity-90  outline-gray-300'>
     <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type='text' ref={firstName} placeholder='Full Name'  className='p-2 my-4 bg-gray-700 w-full'/> }
        <input  type='text'  ref = {email} placeholder='Email address'  className='p-2 my-4 bg-gray-700 w-full'/> 
        <input ref = {password} type='password' placeholder='Password'  className='p-2 my-4 bg-gray-700 w-full'/> 
        <p className='font-bold py-2 text-red-500'>{errorMessage}</p>
        <button className=' p-3 my-4 bg-red-700 w-full rounded-md cursor-pointer' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}> {isSignInForm ? ' New to Netflix? Sign Up Now.' : " Already an user? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login
