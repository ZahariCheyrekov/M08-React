import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Create from './components/Create';
import Dashboard from './components/Dashboard';
import MyPets from './components/MyPets';
import Footer from './components/Footer';

import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

import * as userService from './services/userService';

function App() {
   const [user, setUser] = useState({ isAuthenticated: false, user: null });

   useEffect(() => {
      const localUser = userService.getUser();

      setUser({
         isAuthenticated: Boolean(localUser),
         user
      });
   }, []);

   const onLogin = (username) => {
      setUser({
         isAuthenticated: true,
         user: username
      });
   }

   return (
      <div id="container">
         <Header {...user} />

         <main id="site-content">
            <Routes>
               <Route path='/' element={<Dashboard />} />
               <Route path='/login' element={<Login onLogin={onLogin} />} />
               <Route path='/register' element={<Register />} />
               <Route path='/create' element={<Create />} />
               <Route path='/my-pets' element={<MyPets />} />
            </Routes>
         </main>

         <Footer />
      </div>
   );
}

export default App;