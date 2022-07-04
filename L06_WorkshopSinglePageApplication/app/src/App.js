import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Create from './components/Create';
import Dashboard from './components/Dashboard';
import Details from './components/Details';
import Edit from './components/Edit';
import MyPets from './components/MyPets';
import Footer from './components/Footer';

function App() {
   return (
      <div id="container">
         <Header />

         <main id="site-content">
            <Login />
            <Register />
            <Dashboard />
            <Details />
            <Create />
            <Edit />
            <MyPets />
         </main>

         <Footer />
      </div>
   );
}

export default App;