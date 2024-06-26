import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const View = () => {
    const [cont, changeData] = useState([])
    const fetchData=()=>{
        axios.post("http://localhost:8335/view").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch(
            (error)=>{
                alert(error.message)
            }
        )
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Navbar/>
            <div class="card text-center mb-3">
                <div class="card-body">
                    <h5 class="card-title">Contact List</h5>
                    <p></p>
                    <p></p>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Mobile .</th>
                                <th scope="col">E-mail</th>
                                <th scope="col">Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cont.map(
                                    (value,index)=>{
                                        return <tr>
                                        <td>{value.fname}</td>
                                        <td>{value.lname}</td>
                                        <td>{value.mob}</td>
                                        <td>{value.email}</td>
                                        <td>{value.address}</td>
                                    </tr>
                                    }
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default View