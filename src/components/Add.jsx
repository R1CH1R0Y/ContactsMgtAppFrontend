import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Add = () => {
    const [cont, changeData] = useState(
        {
            "fname": "",
            "lname": "",
            "mob": "",
            "email": "",
            "address": ""
        }
    )
    const inputHandler=(event)=>{
        changeData({...cont,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(cont)
        axios.post("http://localhost:8335/add", cont).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("successfully added")
                }
                else {
                    alert("failed")
                }
            }
        ).catch(
            (error)=>{
                alert(error.message)
            }
        )
    }
    return (
        <div>
            <Navbar/>
            <div class="card text-center mb-3">
                <div class="card-body">
                    <h5 class="card-title">Add Contacts</h5>
                    <p></p>
                    <p></p>
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row g-3">
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">First Name :</label>
                                        <input type="text" className="form-control" name='fname' value={cont.fname} onChange={inputHandler}/>
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Last Name :</label>
                                        <input type="text" className="form-control" name='lname' value={cont.lname} onChange={inputHandler}/>
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Mobile :</label>
                                        <input type="text" className="form-control" name='mob' value={cont.mob} onChange={inputHandler}/>
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">E-mail :</label>
                                        <input type="text" className="form-control" name='email' value={cont.email} onChange={inputHandler}/>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Address :</label>
                                        <textarea id="" className="form-control" name='address' value={cont.address} onChange={inputHandler}></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <button className="btn btn-success" onClick={readValue}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default Add