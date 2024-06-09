import logo from './logo.svg';
import './App.css';
import AddStudfisat from './components/AddStudfisat';
import SearchStudentfisat from './components/SearchStudentfisat';
import DeleteStudentfisat from './components/DeleteStudentfisat';
import ViewStudfisat from './components/ViewStudfisat';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<AddStudfisat/>}/>
    <Route path='/search' element={<SearchStudentfisat/>}/>
    <Route path='/delete' element={<DeleteStudentfisat/>}/>
    <Route path='/view' element={<ViewStudfisat/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
