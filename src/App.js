

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Landingpage from './pages/Landingpage';
import Home from './pages/Home';
import History from './pages/History';







function App() {
  return (
   <>
   <Header/>
      <div className="container m-5">
      <Routes>
        <Route path='/' element={<Landingpage/>} />
        <Route path='/home' element={<Home/>}/>
       <Route path='/watch-history' element={<History/>}/>
      </Routes>
      </div>
      <Footer/>
   </>
  );
}

export default App;
