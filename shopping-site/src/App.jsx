import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Index from './pages/Index';
import Pseudo from './pages/Pseudo';
import Navbar from './components/NavBar';

const App = () =>{
  return (
    <BrowserRouter>
      <Navbar/>
      <div className='mt-24'>
        <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/pseudo" element={<Pseudo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;