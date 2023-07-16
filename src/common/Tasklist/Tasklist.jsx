import React, { useEffect } from 'react'
import DataTable from "react-data-table-component"
import FormModal from '../FormModal/FormModal'
import { useState } from 'react'
import { getData, deleteRequest } from '../../apiCalls';

export default function Tasklist({formData, setFormData, finalFormData, setFinalFormData}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=>{
        getData(setFinalFormData);
    },[]);

    const deleteData = async (id) => {
        
        let data = await deleteRequest(id)
        console.log("inside delete data function", data)
        getData(setFinalFormData)
    }
    const editData = async (id) => {
        console.log("editData")
        let tempData = finalFormData.filter((task) => task.id === id)
        setFormData(tempData[0])
        console.log("setting form", tempData[0])
        handleShow()
    }


    const Currdata = {
        fname: "",
        lname : "",
        priority : "",
        city : "",
        task : ""
      }
    // const [finalFormData, setFinalFormData] = useState([])
    // const[formData, setFormData] = useState(Currdata)

    const changeBadge = (priority) => {
        if(priority === "low")
            return <span class="badge text-bg-success">Low</span>
        else if(priority === "medium")
            return <span class="badge text-bg-warning">Medium</span>
        else
            return <span class="badge text-bg-danger">High</span>
    }


    const columns = [
        {
            name: 'first Name',
            selector: row => row.fname,
        },
        {
            name: 'Last Name',
            selector: row => row.lname,
        },
        {
            name: 'City',
            selector: row => row.city,
        },
        {
            name: 'Priority',
            selector: row => row.priority,
            cell : row => (changeBadge(row.priority))
        },
        {
            name: 'Task',
            selector: row => row.task,
        },
        {
            name : 'Edit',
            cell : row => <button onClick={()=>editData(row.id)}>Edit</button>
        },
        {
            name : 'Delete',
            cell : row => <button onClick={()=>deleteData(row.id)}>Delete</button>
        }
    ];


  return (
    <div>
        <div className="component-header d-flex justify-content-center m-auto">
                <FormModal formData = {formData} setFormData = {setFormData} finalFormData = {finalFormData} setFinalFormData = {setFinalFormData} Currdata = {Currdata} 
                    show = {show} setShow = {setShow} handleClose = {handleClose} handleShow = {handleShow}
                />
            </div>
        <DataTable
            columns={columns}
            data={finalFormData}
        />
    </div>
  )
}
