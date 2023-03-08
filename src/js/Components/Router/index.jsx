//import packages/libraries...
import {BrowserRouter, Routes, Route } from "react-router-dom";


//import Local files...
import useMainStore from '../../Stores/0__MainStore.jsx'
import App from "../../Pages/0__App/index.jsx";


/*------------------------ App's main state ------------------------*/
let {user,setUser} = useMainStore.getState(state => state) //get all properties from center State 
useMainStore.subscribe(state =>  {return user = state.user }) //need subscribe to get store updates when using outside of the react component



function Router() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </BrowserRouter>
    );
  }

export default Router