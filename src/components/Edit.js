import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Employees from "./Employees";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

function Edit() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [id, setId] = useState('');
  let history = useNavigate();

  useEffect(() => {
    setName(localStorage.getItem('Name'));
    setAge(localStorage.getItem('Age'));
    setId(localStorage.getItem('Id'));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEmployees = Employees.map((employee) => {
      if (employee.id === id) {
        return { ...employee, Name: name, Age: age };
      }
      return employee;
    });
    history("/");
  }

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control type="text" placeholder="Enter Name" value={name} required onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <Form.Control type="text" placeholder="Enter Age" value={age} required onChange={(e) => setAge(e.target.value)} />
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default Edit;
