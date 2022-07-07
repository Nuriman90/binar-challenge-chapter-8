import { faEdit, faInfo, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { Button, Container } from 'reactstrap';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { useNavigate } from 'react-router-dom';
import { getListEmployees, removeEmployee } from '../service/localstorage';
// import Pagination from './Pagination';
const { SearchBar } = Search;

const mystyle = {
    table: {
        textAlign: 'center',
    }
};

export default function TableComponent() {
    const [employees, setEmployees] = useState([]);

    const navigate = useNavigate();
    useEffect(() => {
        setEmployees(getListEmployees());
    }, []);

    const deleteEmployee = (id) => {
        removeEmployee(id);
        setEmployees(getListEmployees());
    }

    const columns = [{
        dataField: 'id',
        text: 'ID',
        sort: true,
        headerStyle: () => {
            return { width: "10%" };
        },
    }, {
        dataField: 'nama',
        text: 'Username',
        sort: true
    }, {
        dataField: 'password',
        text: 'Password',
        sort: true
    }, {
        dataField: 'email',
        text: 'Email',
        sort: true
    }, {
        dataField: 'experience',
        text: 'Experience',
        sort: true
    }, {
        dataField: 'level',
        text: 'Level',
        sort: true
    }, {
        dataField: "link",
        text: 'Action',
        formatter: (rowContent, row) => {
            return (
                <div>
                    <Button color="dark" className='mr-2' style={{ margin: '1px' }}>
                        <FontAwesomeIcon icon={faInfo} /> Detail
                    </Button>
                    <Button color="dark" className='mr-2' onClick={() => navigate(`/edit/${row.id}`)}>
                        <FontAwesomeIcon icon={faEdit} /> Edit
                    </Button>
                    <Button color="dark" className='mr-2' onClick={() => deleteEmployee(row.id)}>
                        <FontAwesomeIcon icon={faTrash} /> Delete
                    </Button>
                </div>
            )
        }
    }
    ];

    const defaultSorted = [{
        dataField: 'id',
        order: 'asc'
    }];

    return (
        <Container>
            <div className="col-sm-6">
                <br />
                <Button className="btn btn-success" data-toggle="modal" onClick={() => navigate("/create")}><span>Add New User</span></Button>
            </div>
            {
                employees.length > 0 ? (

                    <ToolkitProvider
                        bootstrap4 keyField='id' data={employees} columns={columns} defaultSorted={defaultSorted}
                        search>
                        {(props) => (
                            <div style={mystyle.table}>
                                <div style={{ float: "right" }}>
                                    <SearchBar {...props.searchProps} />
                                </div>
                                <BootstrapTable {...props.baseProps} pagination={paginationFactory()} />
                            </div>
                        )}
                        {/* <Pagination /> */}
                    </ToolkitProvider>
                ) : (
                    <h3 className="text-center">No User</h3>
                )
            }
        </Container>
    )
}