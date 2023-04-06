import { useContext } from "react"
import { AppContext } from "../context/AppContext"


function DropMenu(){
    const {options,selectedItem, selectChangeHandler} = useContext(AppContext)
    console.log(options)
    return (
        <div className=" my-3">
            
            <select value={selectedItem} onChange={selectChangeHandler} className=" rounded-md p-2">
                <option>Select Language</option>
                {
                    options.map((option,index) =>(
                        <option key={index} value={option}>{option}</option>
                        
                    ))
                }
            </select>
        </div>
    )
}

export default DropMenu