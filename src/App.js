import './_App.scss';
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Header from './Components/Header/Header';
import Footer from './Components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Services' element={<Services/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
