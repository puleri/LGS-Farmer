import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TestPage from './components/Test/Test'
import TestPage2 from './components/Test2/Test2'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<TestPage/>}/>
        <Route exact path="/test2" element={<TestPage2/>}/>
      </Routes>
    </Router>
  );
}

export default App;