import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Create from './components/Create';
import Dashboard from './components/Dashboard';
import MyPets from './components/MyPets';
import Footer from './components/Footer';

import { Route, Routes } from 'react-router-dom';

function App() {
   return (
      <div id="container">
         <Header />

         <main id="site-content">
            <Routes>
               <Route path='/' element={<Dashboard />} />
               <Route path='/login' element={<Login />} />
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