import React from 'react'
import { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Edit = () => {

    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        salary: null,
    });

    const navigate = useNavigate();
    const location = useLocation();

    const employeeId = location.pathname.split("/")[2];
    
    const handleChange = (e) => {
        setEmployee((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8000/employee/${employeeId}`, employee);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Form>
            <h1>Add New Employee</h1>

            <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter New First Name" name="firstName" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter New Last Name" name="lastName" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSalary">
                <Form.Label>Salary</Form.Label>
                <Form.Control type="number" placeholder="Enter New Salary" name="salary" onChange={handleChange} />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleClick}>
                Update
            </Button>
        </Form>
    )
}

export default Edit