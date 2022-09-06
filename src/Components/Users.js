import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { Container } from 'react-bootstrap'
function Users() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [users, setUsers] = useState({})

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setLoading(false)
                setUsers(response.data)
                setError('')
            })
            .catch(error => {
                setLoading(true)
                setUsers({})
                setError('Something Went Wrong')
            })
    }, [])
    return (
        <div>
            {loading ? 'Please Wait... Fetching User Info' :
                <Container className="mt-5">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {users.map(function (user, index) {
                                return (

                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>
                                            <Link to={`/user/${user.id}`}>
                                                <Button variant="link">View More</Button>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            }
                            )}
                        </tbody>
                    </Table>
                </Container>

            }
            {error ? error : null}
        </div>
    )
}

export default Users
