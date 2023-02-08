import "./Model.css"
import { Data } from "../Data/Data"
export const Model=()=>{
    return(<div>
        <div class="top-box">
            <div className="top-main">
                <div><p>1</p></div>
                <div><p>#</p></div>
                <div><p>Case Number</p></div>
                <div><p>Title</p></div>
                <div><p>Product</p></div>
                <div><p>Sub Status</p></div>
                <div><p>Status</p></div>
                <div><p>Technician</p></div>
                <div><p>Technician Status</p></div>
                <div><p>Technician Date Time</p></div>
                <div><p>Account Name</p></div>
                <div><p>Contact Name</p></div>
                <div><p>Mobile</p></div>
                <div><p>Phone</p></div>
                <div><p>Address</p></div>
                <div><p>Opened Time</p></div>
                <div><p>Package</p></div>
                <div><p>Billable</p></div>
                <div><p>Amount</p></div>
                <div><p>Priority</p></div>
                <div><p>Agent</p></div>
                <div><p>Channel</p></div>
                <div><p>Remarks</p></div>
                <div><p>comment</p></div>  
            </div>
            <div className="dabba">
            {Data.map((e)=>{
            return(
                <div className="top-main1">
                <div> <p className="check1"> <input type="checkbox" /></p></div>
                <div><p>{e.id}</p></div>
                <div><p>{e.Case_number}</p></div>
                <div><p>{e.Title}</p></div>
                <div><p>{e.Product}</p></div>
                <div><p>{e.Sub_Status}</p></div>
                <div><p>{e.Status}</p></div>
                <div><p>{e.Technician}</p></div>
                <div><p>{e.Technician_Status}</p></div>
                <div><p>{e.Technician_Date_Time}</p></div>
                <div><p>{e.Account_Name}</p></div>
                <div><p>{e.Contact_Name}</p></div>
                <div><p>{e.Mobile}</p></div>
                <div><p>{e.Phone}</p></div>
                <div><p>{e.Address}</p></div>
                <div><p>{e.Opened_Time}</p></div>
                <div><p>{e.Package}</p></div>
                <div><p>{e.Billable}</p></div>
                <div><p>{e.Amount}</p></div>
                <div><p>{e.Priority}</p></div>
                <div><p>{e.Agent}</p></div>
                <div><p>{e.Channel}</p></div>
                <div><p>{e.Remarks}</p></div>
                <div><p></p></div>  
            </div>
            )
         })}
            </div>
        
        </div>
    </div>)
}