import { useEffect, useState } from "react";
import employeeService from "../services/employee-service";
import { Link, useNavigate, useParams } from "react-router-dom";
// import axios from "axios";

const AddEmployee = () => {


    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[emailId, setEmailId] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();
    

    const saveEmployee =(e) => {
        e.preventDefault();

        const employee = {firstName, lastName, emailId, id};
        if(id){
            //update
            employeeService.update(employee)
                .then(response => {
                    console.log('Employee data updated successfully', response.data);
                    navigate('/');
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })

        }else{
            //create
            employeeService.create(employee)
            .then(response => {
                console.log("employee added successfully", response.data);
                navigate("/");
            })
            .catch(error => {
                console.log('something went wroing', error);
            })
        }

    }

    useEffect(() => {
        // if (id.isNaN()) 
        if(id){
        // {let id1 = parseInt(id, 10)
            employeeService.get(id)
                .then(employee => {
                    setFirstName(employee.data.firstName);
                    setLastName(employee.data.lastName);
                    setEmailId(employee.data.emailId);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])

    // useEffect(() => {
    //     if (id) {
    //         employeeService.get(id)
    //             .then(employee => {
    //                 setFirstName(employee.data.firstName);
    //                 setLastName(employee.data.lastName);
    //                 setEmailId(employee.data.emailId);
    //             })
    //             .catch(error => {
    //                 console.log('Something went wrong', error);
    //             })
    //     }
    // }, [])

    return ( 
        <div className="container">
            <h3> Add New Employee </h3>
            <hr/>
            <form>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter firstName"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Enter lastName"
                    />
                </div>
                <div className="form-group">    
                    <input
                        type="text"
                        className="form-control col-4"
                        id="emaiId"
                        value={emailId}
                        onChange={(e) => setEmailId(e.target.value)}
                        placeholder="Enter emailId"
                    />
                </div>
                <div>
                    <button className="btn btn-primary" onClick={(e) => saveEmployee(e)}>Save</button>
                </div>
            </form>
            <hr/>
            <Link to="/"> Back to List </Link>
        </div>
     )
}
 
export default AddEmployee;