
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Qustion from './components/Qustion';
import Result from './components/Result';

function App() {
  return (
    <div className="App">
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='qus' element={<Qustion/>}></Route>
    <Route path='result' element={<Result/>}></Route>
  </Routes>
    </div>
  );
}

export default App;
