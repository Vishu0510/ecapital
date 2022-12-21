import React from 'react'
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Add = () => {
    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        salary: null,
    });
    
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        setEmployee((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/employee", employee);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Form className="form">
            <h1>Add New Employee</h1>

            <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label className='label'>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" name="firstName" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" name="lastName" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSalary">
                <Form.Label>Salary</Form.Label>
                <Form.Control type="number" placeholder="Enter Salary" name="salary" onChange={handleChange} />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleClick}>
                Submit
            </Button>
        </Form>
    )
}

export default Add