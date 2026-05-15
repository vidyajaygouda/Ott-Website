
import { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm , setInSignInForm] = useState(true)


  const toggleSignInForm = () => {
    setInSignInForm(!isSignInForm)
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

     <form className='absolute p-12 bg-black my-36 w-3/12 mx-auto right-0 left-0 text-white rounded-lg opacity-80  outline-gray-300'>
     <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type='text' placeholder='Full Name'  className='p-2 my-4 bg-gray-700 w-full'/> }
        <input type='text' placeholder='Email address'  className='p-2 my-4 bg-gray-700 w-full'/> 
        <input type='password' placeholder='Password'  className='p-2 my-4 bg-gray-700 w-full'/> 
        <button className=' p-3 my-4 bg-red-700 w-full rounded-md'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}> {isSignInForm ? ' New to Netflix? Sign Up Now.' : " Already an user? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login
