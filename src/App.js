import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import RootLayout from './components/React JS Assignment 11/RootLayout';
import Home from './components/React JS Assignment 11/Home'
import Register from './components/React JS Assignment 11/Register';
import Login from './components/React JS Assignment 11/Login'
import UserDashboard from './components/React JS Assignment 11/UserDashboard';
import Resources from './components/React JS Assignment 11/Resources';
import Units from './components/React JS Assignment 11/Units';
import Contribute from './components/React JS Assignment 11/Contribute';
import Profile from './components/React JS Assignment 11/Profile';
import { UserProvider } from './components/React JS Assignment 11/UserContext';
function App() {

  let router=createBrowserRouter([
    {
      path:'',
      element:<RootLayout/>,
      children:[
        {
          path:'',
          element:<Home/>
        },
        {
          path:'register',
          element:<Register/>
        },
        {
          path:'login',
          element:<Login/>
        },
        {
          path:'user-dashboard/:username',
          element:<UserDashboard/>
        },
        {
          path:'profile',
          element:<Profile/>
        },
        {
          path:'resources',
          element:<Resources/>,
        },
        {
          path:'units',
          element:<Units/>
        },
        {
          path:'contribute',
          element:<Contribute/>
        }
    ]
    }
  ])
    return(
      <UserProvider>
      <div style={{backgroundColor:"#333", color:"aliceblue"}}>
        <RouterProvider router={router} />
      </div>
      </UserProvider>
    )
}

export default App;
