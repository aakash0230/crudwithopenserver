import "./body.scss"
import Addtask from "../../components/Addtask/Addtask"
import Tasklist from "../Tasklist/Tasklist";


const Body = ({form, formData, setFormData, finalFormData, setFinalFormData}) => {
    return(
        <div className="body">
           {form === 'Add Task' ? <Addtask formData = {formData} setFormData = {setFormData} finalFormData = {finalFormData} setFinalFormData = {setFinalFormData}/> : 
           form === 'Task List' ? <Tasklist formData = {formData} setFormData = {setFormData} finalFormData = {finalFormData} setFinalFormData = {setFinalFormData}/> : ''}
        </div>

    )
}

export default Body;