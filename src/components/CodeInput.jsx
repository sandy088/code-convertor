import { useContext} from "react"

import { AppContext } from "../context/AppContext"
import DropMenu from "./dropMenu"
import Editor from "react-simple-code-editor"
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; 


function CodeInput(){


    const {ipCode,setIpCode, selectedItem, handleSubmit} = useContext(AppContext)

     function handleChange(e){
    //   e.preventDefault()
       setIpCode(e.target.value)
       console.log(ipCode)
    }


    return (
        <div className=" flex flex-col gap-2  bg-slate-900 rounded-2xl shadow-black shadow-lg">
            <h1 className="text-[20px] font-bold mb-1 text-white mt-3">Input Code</h1>
            
            <textarea className="w-[300px] h-[400px] md:w-[500px] operator mx-5 bg-slate-900 rounded-2xl mb-5 text-white p-7 " onChange={handleChange} value={ipCode} placeholder="Enter Your Code Here" >

            </textarea>
             {/* <Editor className="w-[500px] h-[400px] operator mx-5 bg-slate-900 rounded-2xl mb-5 text-white " padding={10}  onValueChange={code => setIpCode(code)}  highlight={code => highlight(code, `${selectedItem}`)} value={ipCode} placeholder="Your code will appear here"/>   */}
           
             <div className="flex justify-center  text-white ">
                <button className="my-5 bg-indigo-600 rounded-lg p-2 pl-6 pr-6 hover:scale-95 transition-transform hover:bg-blue-900" onClick={handleSubmit}>Change</button>
            </div>
        </div>
    )
}

export default CodeInput