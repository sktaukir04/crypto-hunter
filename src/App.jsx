import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import HomePage from './Pages/HomePage';
import CoinPage from './Pages/CoinPage';
import Footer from './components/Footer';
function App() {


  return (
    <BrowserRouter>
      <div style={{backgroundColor:'#14161a',color:'white',minHeight:'100vh'}}>
        <Header/>
        <Routes>
          <Route path='/' exact element={<HomePage/>}/>
          <Route path='/coins/:id' element={<CoinPage/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
