import "./layout.scss"
import Header from "../../common/Header/Header.jsx"
import Footer from "../../common/Footer/Footer.jsx"
import LeftSidebar from "../../common/LeftSideBar/LeftSidebar.jsx"
import SecondaySidebar from "../../common/SecondarySidebar/SecondarySidebar.jsx"
import RightSidebar from "../../common/RightSidebar/RightSidebar.jsx"
import Body from "../../common/Body/Body.jsx"
import { useState } from "react"


const Layout = () =>{

    const [form, setForm] = useState("")
    const Currdata = {
        fname: "",
        lname : "",
        priority : "",
        city : "",
        task : "",
        index : -1
      }
    const [finalFormData, setFinalFormData] = useState([])
    const[formData, setFormData] = useState(Currdata)


    return(
        <div className="layout">
            <Header/>
            <div className="second-div">
                <LeftSidebar/>
                <SecondaySidebar form = {form} setForm = {setForm}/>
                <div className="body-footer">
                    <Body form = {form} formData = {formData} setFormData = {setFormData} finalFormData = {finalFormData} setFinalFormData = {setFinalFormData}/>
                    <Footer/>
                </div>
                <RightSidebar/>
            </div>
        </div>
    )
}

export default Layout