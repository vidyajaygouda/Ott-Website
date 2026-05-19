import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../store/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGptSearchView } from "../store/gptSearchSlice";
import { changeLanguage } from "../store/configSlice";


const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)

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

  const handleGPTSearch = () => {
    dispatch(toggleGptSearchView());
  }

    const handleLanguageChange = (e) => {
      dispatch(changeLanguage(e.target.value));
    };

  return (
    <div className='w-full sticky px-8 py-2 bg-black z-10 flex justify-between top-0 opacity-0.2'>
      <img 
      className="w-44"
      src={LOGO}
      alt='logo'/>
      {
        user && 
        <div className="flex py-2 px-2">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button className="mx-4 my-2 px-4 py-2 bg-purple-500 text-white rounded-lg cursor-pointer" onClick={handleGPTSearch}>GPT Search</button>
      <img className="w-12 h-12" alt="user-icon" src= {user?.photoURL}/>
      <button className="font-bold text-white cursor-pointer" onClick={handleSignOut}> (Sign out)</button>
      </div>
      }
      
    </div>
  )
}

export default Header
