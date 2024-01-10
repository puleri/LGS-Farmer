import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TestPage from './components/Test/Test'


function App() {
  

  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<TestPage/>}/>
    </Routes>
    </Router>
  );
}

export default App;