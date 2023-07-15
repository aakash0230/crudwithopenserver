import "./secondarySidebar.scss"

const SecondarySidebar = ({form, setForm}) => {
    const onAddClick = () => {
        setForm("Add Task")
        console.log(form)
    }

    const onSetFormClick = () => {
        setForm("Task List")
        console.log(form)
    }
    
    return(
        <div className="SecondarySidebar">
            <div className="d-flex flex-column justify-content-center mt-3">
                <button type="button" className="btn btn-warning m-1" onClick={onAddClick}>Add task</button>
                <button type="button" className="btn btn-warning m-1" onClick={onSetFormClick}>Task List</button>
            </div>
        </div>
    )
}

export default SecondarySidebar;