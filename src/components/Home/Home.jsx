import { Filter } from "../Filter/Filter"
import { Model } from "../Model/Model"
import { Navbar } from "../Navbar/Navbar"

export const Home=()=>{
    return(
        <div>
        <Navbar/>
        <Filter/>
        <Model/>
        </div>   
    )
}