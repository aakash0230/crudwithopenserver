import "./header.scss"
import headerLogo from '../../assets/headerLogo.png'
import { Setting, User } from "../../assets/img/svg"


const Header = () => {
    return(
            <div className="header">
                <div className="rightlogo">
                    <img src={headerLogo} alt="logo" />
                </div>
                <div className="header-content-wrapper">
                <div className="left-content">
                    <input type="text" placeholder="Search" style={{width : "900px"}} />
                </div>
                <div className="right-content">
                    <div className="right-logo">
                        <Setting/> 
                    </div>
                    <div className="right-logo">
                        <User/>
                    </div>
                </div>

                </div>
               
            </div>
    )

}

export default Header;