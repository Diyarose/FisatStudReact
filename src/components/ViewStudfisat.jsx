import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewStudfisat = () => {
    const [data,changeData]=useState([])
    const fetchData=()=>{
        axios.get("https://courseapplogix.onrender.com/getdata").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error.message)
                alert(error.message)
            }
        ).finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">FirstName</th>
                                    <th scope="col">LastName</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Mobile</th>
                                    <th scope="col">DOB</th>
                                    <th scope="col">College</th>
                                    <th scope="col">Course</th>
                                   
                                    <th scope="col">Address</th>
                                </tr>
                            </thead>
                            <tbody>
                              {data.map(
                                (value,index)=>{
                                    return <tr>
                                    <th scope="row">{value.firstname}</th>
                                    <td>{value.lastname}</td>
                                    <td>{value.email}</td>
                                    <td>{value.mobile}</td>
                                    <td>{value.dob}</td>
                                    <td>{value.college}</td>
                                    <td>{value.address}</td>
                                    <td>{value.course}</td>
                                </tr>
                                }
                              )}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewStudfisat