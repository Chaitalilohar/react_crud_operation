import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Employees from "./Employees";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleEdit = (id, name, age) => {
    localStorage.setItem('Name', name);
    localStorage.setItem('Age', age);
    localStorage.setItem('Id', id);
    navigate('/edit');
  }

  const handleDelete = (id) => {
    const updatedEmployees = Employees.filter((employee) => employee.id !== id);
    navigate('/');
  }

  return (
    <Fragment>
      <div style={{ margin: "10rem" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Employees && Employees.length > 0 ? (
              Employees.map((item) => (
                <tr key={item.id}>
                  <td>{item.Name}</td>
                  <td>{item.Age}</td>
                  <td>
                    <Link to="/edit" onClick={() => handleEdit(item.id, item.Name, item.Age)}>
                      <Button>EDIT</Button>
                    </Link>
                    &nbsp;
                    <Button onClick={() => handleDelete(item.id)}>DELETE</Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No data available</td>
              </tr>
            )}
          </tbody>
        </Table>
        <br />
        <Link className="d-grid gap-2" to="/create">
          <Button size="lg">Create</Button>
        </Link>
      </div>
    </Fragment>
  );
}

export default Home;
