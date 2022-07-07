import { useNavigate, useParams } from 'react-router-dom';
import { addEmployee, getListEmployees, getEmployeeById } from '../service/localstorage';
import { useForm } from './../hooks/useForm';
import uuid from 'react-uuid';
import React, { useState, useEffect } from 'react';
import { editEmployee } from './../service/localstorage';
import { Button, Container } from 'reactstrap';

export const UserForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [showAlert, setshowAlert] = useState(false);
    const { inputValues, handleInputChange, resetForm, setForm } = useForm({
        nama: '',
        password: '',
        email: '',
        experience: '',
        level: ''
    });
    console.log(getListEmployees());
    useEffect(() => {
        if (id) {
            const employee = getEmployeeById(id);
            setForm(employee);
        }
    }, [id]);

    const handleSubmit = (e) => {
        console.log(inputValues);
        e.preventDefault();
        id ? editEmployee(id, inputValues) : addEmployee({ id: uuid(), ...inputValues });
        resetForm();
        setshowAlert(true);
        setTimeout(() => {
            setshowAlert(false);
        }, 2000);
    };

    return (
        <div>
            <Container>
                <div className="d-flex my-5 justify-content-between">
                    <Button type="button" className="btn btn-success btn-block" onClick={() => navigate("/")} > Back</Button>
                    <h1 className="text-center">{id ? "Edit" : "Add new"} User</h1>
                    <div />
                </div>
            </Container>

            <div className="card border-primary p-5 m-5">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Nama</label>
                        <input
                            name="nama"
                            type="text"
                            value={inputValues.nama}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>


                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Password</label>
                        <input
                            name="password"
                            type="text"
                            value={inputValues.password}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>


                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Email</label>
                        <input
                            name="email"
                            type="email"
                            value={inputValues.email}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>


                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Experience</label>
                        <input
                            name="experience"
                            type="text"
                            value={inputValues.experience}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Level</label>
                        <input
                            name="level"
                            type="text"
                            value={inputValues.level}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>

                    <div className="d-grid gap-2 mt-3">
                        <Button type="submit" className="btn btn-success btn-block">{id ? "Edit" : "Add"} User</Button>
                    </div>
                </form>
            </div>

            {
                showAlert && (
                    <div className="px-5">
                        <div className="alert alert-success">
                            <strong>Well done!</strong> {id ? "edit" : "added a new"} User.
                        </div>
                    </div>
                )
            }

        </div >
    )
}
