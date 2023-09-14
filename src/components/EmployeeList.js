import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import employeeService from "../services/employee-service";
import { Link } from "react-router-dom";


const EmployeeList = () => {

  const [employees, setEmployees] = useState([]);
  const[firstName, setFirstName] = useState("");
  const[lastName, setLastName] = useState("");
  const[emailId, setEmailId] = useState("");
  const[employee, setEmployee]= useState([]);

  useEffect(() => {
    init();

  },  [])


  const init =() =>{
    employeeService.getAll()
    .then(response => {
      console.log('print the employees data', response.data);
      setEmployees(response.data);
    })
    .catch(error => {
      console.log('something wrong', error);
    })
  }

  const handleUpdate = id =>{
    employeeService.get(id)
    .then(response => {
        setFirstName(employee.data.firstName);
        setLastName(employee.data.lastName);
        setEmailId(employee.data.emailId);
        console.log('Employee updated', response.data);
        init();
    })
    .catch(error => {
        console.log('something wrong', error);
    })
  }

  const handleDelete = id =>{
    employeeService.remove(id)
    .then(response => {
        console.log('Employee deleted', response.data);
        init();
    })
    .catch(error => {
        console.log('something wrong', error);
    })
  }

//   const empLink = id =>{
//     "/employees/edit/:employee.id".replace( ':employee.id', id); return


    
    
//   }


  return (
    <div className="container">
      <h3>List of Employees</h3>
      <hr/>
      <div>
        <Link to="/add" className="btn btn-primary mb-2"> AddEmployee</Link>
        <table className="table table-bordered table-striped">
          <thead className ="thead-dark">
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email Id</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              employees.map(employee => (

                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.emailId}</td>
                  <td>
                    <Link className="btn btn-info" to={ "/employees/edit/:employee.id".replace( ':employee.id', employee.id)}> Update </Link>
                    {/* <button className="btn btn-danger ml-2" onClick={(e) => {handleUpdate(employee.id)}}>Update</button> */}
                    <button className="btn btn-danger ml-2" onClick={(e) => {handleDelete(employee.id)}}>Delete</button>
                  </td>
                </tr>
              
              ))
            }
          </tbody>

        </table>
      </div>
    </div>
  );
}
 
export default EmployeeList;