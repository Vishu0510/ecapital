import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Employees = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        const fetchEmployees = async() => {
            try{
                const res = await axios.get("http://localhost:8000/employees")
                setEmployees(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchEmployees()
    }, [])

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/employee/${id}`);
            window.location.reload()
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <h1>EMPLOYEES</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => 
                        <tr key = {employee.id}> 
                            <td>
                                {employee.firstName} 
                            </td>
                            <td>
                                {employee.lastName} 
                            </td>
                            <td>
                                {employee.salary} 
                            </td>
                            <td>
                                <Button variant="danger"><Link to={`/edit/${employee.id}`}>Edit</Link></Button>
                                <Button variant="danger" onClick={() => handleDelete(employee.id)}>Delete</Button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>

            <Button  variant="success">
                <Link to="/add">Add Employee</Link>
            </Button>
        </div>
    );
}

export default Employees