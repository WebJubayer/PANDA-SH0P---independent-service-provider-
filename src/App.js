import './App.css';
import { Route, Routes } from 'react-router-dom'
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import About from './Pages/Home/About/About';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import Blogs from './Pages/Home/Blogs/Blogs';
import Experts from './Pages/Experts/Experts';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Checkout from './Pages/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      
      {/* <Register></Register> */}
      
      
      {/* <Login></Login> */}


      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/experts' element={<Experts></Experts>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={<Checkout></Checkout>}></Route>

        
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
 
    </div>
  );
}

export default App;
