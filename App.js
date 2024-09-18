import logo from './logo.svg';
import './App.css';
import Form from './form';
import Formget from './Formget';
import Update from './Update';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/'element ={<Form/>}/>
      <Route path='/get'element ={<Formget/>}/>
      <Route path='/update/:id'element={<Update/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
