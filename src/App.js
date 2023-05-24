
import './App.css';
import EmployeePayRole from './Component/EmployeePayrole';
import Home from './Component/Home';
import { Route,Routes,Link } from 'react-router-dom';
function App() {
  return (
    <div>
      <nav>
        
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='employeelist/' element={<EmployeePayRole/>}></Route>
      </Routes>
    </div>
  );
}
export default App;
