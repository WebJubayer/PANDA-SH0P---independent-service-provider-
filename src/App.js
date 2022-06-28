import './App.css';
import { Route, Routes } from 'react-router-dom'
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import About from './Pages/Home/About/About';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import Blogs from './Pages/Home/Blogs/Blogs';
import Contacts from './Pages/Home/About/Contacts/Contacts';
import Experts from './Pages/Experts/Experts';
import NotFound from './Pages/NotFound/NotFound';
import Slider from './Pages/Slider/Slider';
;

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/contacts' element={<Contacts></Contacts>}></Route>
        <Route path='/experts' element={<Experts></Experts>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      <Footer></Footer>

    </div>
  );
}

export default App;
