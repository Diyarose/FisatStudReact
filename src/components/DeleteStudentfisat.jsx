import React, { useState } from 'react'
import NavBar from './NavBar'

const DeleteStudentfisat = () => {
    const [data,setData]=useState(
        {
            "name":""
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row g-3">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Name</label>
                    <input type="text" className="form-control" name='name'value={data.name} onChange={inputHandler} />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-primary" onClick={readValue}>REMOVE</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteStudentfisat