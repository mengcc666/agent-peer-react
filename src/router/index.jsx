// import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../pages/Layout";
import Login from "../pages/Login";
// import AuthComponent from "../components/authComponent";
// const Home = lazy(()=>import('../pages/Home'))
// const Article = lazy(()=>import('../pages/Article'))
// const Publish = lazy(()=>import('../pages/Publish'))

const routes = [
//   { path:'/login',element:<Login/> },
//   { path:'/layout',element:
//     <AuthComponent>
//       <Layout/> 
//     </AuthComponent>,
//     children:[
      { path:'/layout',element:<Layout/> },
      { path:'/login',element:<Login/> },
      { path:'',element:<Navigate to='/layout'/> }
    ]
//   },
//   { path:'/',element:<Navigate to='layout/home'/> },
// ]
 
export default routes