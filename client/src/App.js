import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Main from './pages/main/Main';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Login from './pages/login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Layout/>}>
            <Route index element={<Main/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='services' element={<Services/>}/>
          </Route>

          <Route path='/login' element={<Login/>}>
          </Route>

          <Route path='/main' element={<Main/>}>
          </Route>

        </Routes>
      </BrowserRouter>     
    </div>
  );
}

export default App;
