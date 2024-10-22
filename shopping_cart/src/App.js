import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
