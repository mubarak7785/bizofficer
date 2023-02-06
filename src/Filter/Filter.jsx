import "./Filter.css"

export const Filter=()=>{
    return(<div>
        <div className="main-con">
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
        </div>
    </div>)
}