import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const EmployeeDetails = () =>{

    const [Employees, setEmployee] = useState([]);

    const [User, setUserData] = useState({
    
        userid: '',
        name: '',
        email: '',
        designation: '',
        phoneno: '',
        password: '',
    
    });
    
    const handleChangeupd = (event) => {
        const { name, value } = event.target;
        setUserData({ ...User, [name]: value })
        console.log(name, value);
    
    
    }
    
    const handleUpdate = (event) => {
        event.preventDefault()
    
        const UserData = {
    
            userid: User.userid,
            name: User.name,
            email: User.email,
            designation: User.designation,
            phoneno: User.phoneno,
            password: User.password,
    
        }
        fetch(`http://localhost:6060/user/update/${User.id}`, {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(UserData),
    
        })
            .then((res) => {
                console.log(res);
            })
            .then((err) => {
                console.log(err);
            })
        console.log(UserData);
    }
    
    
    // ------EMPLOYEE DELETE ----------------------------    
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const handleDelete = (i) => {
        fetch(`http://localhost:6060/user/delete/${i}`, {
            method: "get"
        },
            Employees.splice(i, 1)
        )
    };
    
    useEffect(() => {
        fetch("http://localhost:6060/user/get"
        ).then(response => response.json())
            .then(data => {
    
                console.log(data);
                setEmployee(data);
    
            })
    
    }, []);    

return(
    <>
    <div className="container-fluid">
    <Table striped bordered hover>
        <thead>
            <tr className='text-center'>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Designation</th>
                <th>Mobile No</th>
                <th>Password</th>
                <th>Edit/Delete</th>
            </tr>
        </thead>
        {Array.isArray(Employees) && Employees.map((employ) => (
            <tbody key={employ.id}>
                <tr>
                    <td>{employ.userid}</td>
                    <td>{employ.name}</td>
                    <td>{employ.email}</td>
                    <td>{employ.designation}</td>
                    <td>{employ.phoneno}</td>
                    <td>{employ.password}</td>
                    <td className='text-center'>
                        <button className='border-0' onClick={handleShow}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                            </svg>
                        </button>&nbsp;
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Basic Details</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="row justify-content-center">
                                    <div className="col">
                                        <label>Name: </label><br />
                                        <label>Email: </label><br />
                                        <label>Mobile: </label><br />
                                        <label>Designation: </label><br />
                                        <label>Password:</label>
                                    </div>
                                    <div className="col">
                                        <input type="text" name="name" value={employ.name} onChange={handleChangeupd} />
                                        <input type="text" name="email" value={employ.email} onChange={handleChangeupd} />
                                        <input type="text" name="phoneno" value={employ.phoneno} onChange={handleChangeupd} />
                                        <input type="text" name="designation" value={employ.designation} onChange={handleChangeupd} />
                                        <input type="text" name="password" value={employ.password} onChange={handleChangeupd} />
                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleUpdate}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <button className='border-0' onClick={() => handleDelete(employ.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                            </svg>
                        </button> &nbsp;
                    </td>
                </tr>
            </tbody>
        ))}

    </Table>
</div>
    
    
    </>
)
}





export default EmployeeDetails ;