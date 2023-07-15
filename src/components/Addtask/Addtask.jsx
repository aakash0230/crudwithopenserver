import Form from "../../common/Form/Form";
import "./addtask.scss"



const Addtask = ({form, formData, setFormData, finalFormData, setFinalFormData}) => {
    return(
        <div className="container">
            <div className="component-header d-flex justify-content-center m-auto">
                <p>Add task</p>
                <p>{form}</p>
            </div>

            <Form formData = {formData} setFormData = {setFormData} finalFormData = {finalFormData} setFinalFormData = {setFinalFormData}/>




        </div>
    )
}

export default Addtask;