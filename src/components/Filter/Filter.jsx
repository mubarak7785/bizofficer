import "./Filter.css"
import { Link } from "react-router-dom"

export const Filter=()=>{
    return(<div>
        <div className="main-con" >
        <div className="main-con1">
            <select name="" id="">
                <option value="">All Channels</option>
                <option value="">Primary</option>
                <option value="">Secondary</option>
            </select>
            <select name="" id="">
                <option value="">All Case Type</option>
            </select>
            <select name="" id="">
            <option value="">All Status</option>
            </select>
            <select name="" id="">
                <option value="">All Cases</option>
            </select>
            <input type="text" placeholder="Search"/>
            <button>Search</button>
        </div>
        <div className="box2">
            <p><i class="fa-solid fa-border-all"></i></p>
            <p><i class="fa-solid fa-calendar-days"></i></p>
            <p> <Link to="/form"><i class="fa-sharp fa-solid fa-circle-plus"></i></Link></p>
        </div>
        </div>
        
    </div>)
}