import { Link } from "react-router-dom";
import './index.scss'

export default function NotFound(){
    return (
        <div className="L-page">
            <p className="L-text">You seem to be lost</p>
            <Link to="/home" className="home-btn">Take me <a className="imp">home</a></Link>
        </div>
    )
}