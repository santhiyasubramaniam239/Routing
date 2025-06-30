
import './App.css'
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Products from './pages/products';
import About from './pages/About';
import {Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Form} from "react-router-dom";
import Login from './pages/Login';
import RootLayout from './layout/RootLayout';
import ContactLayout from './layout/ContactLayout';
import Info from './components/info';
import Users from './pages/Users';
import Form1 from './components/Form1';
import NotFound from './pages/NotFound';
import UserLayout from './layout/UserLayout';
import { userLoader, userSingleLoader } from './utils/userloader';
import User from './components/User';
import ErrorPage from './components/ErrorPage';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>} />
        <Route path="products" element={<Products/>} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<ContactLayout/>} >
         <Route path="info" element={<Info/>}/>
         <Route path ="form" element={<Form1/>}/>
        </Route>
         <Route path="login" element={<Login/>} />
         <Route path="*" element={<NotFound/>}/>
         <Route path="users" element={<UserLayout/>} errorElement={<ErrorPage/>}>
          <Route index element={<Users/>} loader={userLoader}/>
          <Route path=":id" element={<User/>}loader={userSingleLoader}/>
         </Route>
      </Route>
      
    )
  );
   
  return (
   <RouterProvider router = {router}></RouterProvider>
  );
}

export default App;
