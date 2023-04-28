// import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../pages/Layout";
import Login from "../pages/Login";
import AuthComponent from "../component/authComponent";
import Overview from "../pages/Overview";
import UserManage from "../pages/UserManage";
import Chaincode from "../pages/Chaincode";
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
  {
    path: '/layout', element:
      <AuthComponent>
        <Layout />
      </AuthComponent>,
    children:[
      { path:'/layout/home',element:<Overview/> },
      { path:'/layout/article',element:<UserManage/> },
      { path:'/layout/publish',element:<Chaincode/> }
    ]
  },
  { path: '/login', element: <Login /> },
  { path: '', element: <Navigate to='/layout' /> }
]
//   },
//   { path:'/',element:<Navigate to='layout/home'/> },
// ]

export default routes