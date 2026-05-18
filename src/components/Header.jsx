import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../store/userSlice";
import { LOGO } from "../utils/constant";


const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser({uid: user.uid, email: user.email, firstName: user.displayName}));
        navigate('/browse');
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');
      }
    });
    return () => unsubscribe();
  },  []);

  const handleSignOut = () => {
    signOut(auth).then(() => {}).catch(() => {
      // An error happened.
      navigate("/error")
    });
  }
  return (
    <div className='w-full sticky px-8 py-2 bg-black z-10 flex justify-between top-0 opacity-0.2'>
      <img 
      className="w-44"
      src={LOGO}
      alt='logo'/>
      {
        user && 
        <div className="flex py-2 px-2">
      <img className="w-12 h-12" alt="user-icon" src= {user?.photoURL}/>
      <button className="font-bold text-white cursor-pointer" onClick={handleSignOut}> (Sign out)</button>
      </div>
      }
      
    </div>
  )
}

export default Header
