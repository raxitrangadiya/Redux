import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Navbar from '../commancomponent/Navbar.jsx'
import Home from '../store/pages/Home';
import Category from '../component/category/Category.jsx';
import Accessstoredata from '../store/pages/AccessStoreData'
import Login from '../component/account/Login';
import Register from '../component/account/Register.jsx';
import LoaderCompo from '../commancomponent/LoaderCompo.jsx'
import AdminCompoRoute from '../component/Admin/pages/AdminLayout.jsx'
console.log("called router");
const MainRouter=createBrowserRouter([
{
    path:"/",
    element:<><Navbar/><Home/></> 
},
{
    path:"/accessapi",
    element:<><Navbar/><Accessstoredata/></> 
},
{
    path:"/login",
    element:<Login/>
},
{
    path:"/register",
    element:<Register/>
},
{
    path:"/category",
    element:<><Navbar/><Category/></>
},
{
    path:"admin/*",
    element:<Suspense fallback={LoaderCompo}><AdminCompoRoute/></Suspense>
}
]);
export default MainRouter