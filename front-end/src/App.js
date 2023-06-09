import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Provider from './Context/Provider';

import Header from './Components/Header/Header';

import Login from './Pages/Login/Login';
import Homepage from './Pages/Homepage/Homepage';
import MeuCarrinho from './Pages/MeuCarrinho/MeuCarrinho';
import MinhaConta from './Pages/MinhaConta/MinhaConta';
import Sobre from './Pages/Sobre/Sobre';

function App() {
  return (
    <Provider>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Homepage />} />
            <Route path='/checkout' element={<MeuCarrinho />} />
            <Route path='/myaccount' element={<MinhaConta />} />
            <Route path='/about' element={<Sobre />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
