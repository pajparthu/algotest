import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import axios from 'axios'
import { Container, Button } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import './userStyles.css'
function User() {
    const { id } = useParams();

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [user, setUser] = useState({})
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => {
                setLoading(false)
                setUser(response.data)
                setError('')
            })
            .catch(error => {
                setLoading(true)
                setUser({})
                setError('Something Went Wrong')
            })
    }, [])

    return (
        <div>
            {
                loading ? 'Please Wait... Fetching User Info' :
                    <>
                        <div class="content mt-5">
                            <div class="card mt-5">
                                <div class="firstinfo"><img src="https://randomuser.me/api/portraits/lego/6.jpg" />
                                    <div class="profileinfo">
                                        <h1>{user.name}</h1>
                                        <h3>{user.email}</h3>
                                        <p>{user.address.street}, {user.address.suit}, {user.address.city}, {user.address.zipcode}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div style={{ marginTop: "50px" }}>
                            <Link to="/users">
                                <Button variant="outline-primary">All Users</Button>
                            </Link>
                        </div>
                    </>
            }
            {error ? error : null}
        </div>
    )
}

export default User
