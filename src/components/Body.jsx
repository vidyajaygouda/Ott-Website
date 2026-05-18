import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Login';
import Browse from './Browse';
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import {addUser, removeUser} from '../store/userSlice.js'
import { useDispatch } from "react-redux";

const Body = () => {

   const dispatch = useDispatch();
  // update the state when user login and logout 
useEffect(() => {
  onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    // const {uid, email, displayName} = user;
    console.log(user)
    dispatch(addUser({uid: user.uid, email: user.email, firstName: user.displayName}));
    // ...
  } else {
    // User is signed out
    dispatch(removeUser())
    // ...
  }
});
},  []);

  const appRouter = createBrowserRouter([
  {
  path: '',
  element: <Login/>
  },
  {
   path: '/browse',
   element: <Browse/>
  }
]);





  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
