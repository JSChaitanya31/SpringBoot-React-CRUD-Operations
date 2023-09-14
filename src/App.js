import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';

function App() {

  return (
    <BrowserRouter>
      <div>
        <div>
          <Routes>
            <Route exact path="/" element={<EmployeeList />} />
            <Route path="*" element ={<NotFound />} />
            <Route exact path="/add" element={<AddEmployee />} />
            <Route path="/employees/edit/:id" element={<AddEmployee />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

  export default App;
