import React from 'react'
import { getData, postAndPut } from '../../apiCalls';

export default function Form({formData, setFormData, finalFormData, setFinalFormData, handleClose, handleShow}) {

    const changeData = (e, ele) => {
        setFormData({...formData,[ele] : e.target.value})
    }

    const onSubmitFormButton = async () => {
        await postAndPut(formData, setFormData)
        getData(setFinalFormData)
        handleClose()
    }

  return (
    <div>
        <div className="form-wrapper pt-4">
                <div className="mb-3" onChange={(e) => {changeData(e, 'priority')}}>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="low"/>
                        <label className="form-check-label" htmlFor="inlineRadio1">Low</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="medium"/>
                        <label className="form-check-label" htmlFor="inlineRadio2">Medium</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="high"/>
                        <label className="form-check-label" htmlFor="inlineRadio3">High</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" value={formData.fname} placeholder="name@example.com" name='fname' onChange={(e) => {changeData(e, 'fname')}}/>
                            <label htmlFor="floatingInput"> First Name</label>
                        </div>
                    </div>
                <div className="col-4">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label htmlFor="floatingInput">Middle Name</label>
                    </div>
                </div>
                <div className="col-4">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingPassword" value={formData.lname} placeholder="Password" onChange={(e) => {changeData(e, 'lname')}}/>
                        <label htmlFor="floatingPassword">Last Name</label>
                    </div>
                </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label htmlFor="floatingInput"> Phone</label>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label htmlFor="floatingInput">Email</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="form-floating mb-3">
                            <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example" onChange={(e) => {changeData(e, 'city')}}>
                                <option selected>Open this select menu</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Pune">Pune</option>
                                <option value="Nashik">Nashik</option>
                                <option value="Thane">Thane</option>
                            </select>
                            <label htmlFor="floatingSelectGrid">City</label>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInputGrid" placeholder="name@example.com" />
                        <label htmlFor="floatingInputGrid">Pincode</label>
                        </div>
                    </div>   
                </div>
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" value={formData.task} id="floatingTextarea2" onChange={(e) => {changeData(e, 'task')}}></textarea>
                    <label htmlFor="floatingTextarea2">Comments</label>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <button type="button" className="btn btn-success mt-4" onClick={()=>{onSubmitFormButton()}} style={{width : "80%"}}>Success</button>
                    </div>

                </div>
            </div>
    </div>
  )
}
