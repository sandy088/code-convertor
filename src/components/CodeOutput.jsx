import { useContext, useState } from "react"
import { AppContext } from "../context/AppContext"
import Loading  from "./Loading"
import DropMenu from "./dropMenu"
import Editor from "react-simple-code-editor"
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; 
import {  FaCopy} from "react-icons/fa"
import {  toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


function CodeOutput(){
    const {opCode, isLoading, setOpCode} = useContext(AppContext)
    const [isCopy, setCopy] = useState('')

    function copyHandle() {
        navigator.clipboard.writeText(opCode)
        toast.success("Copied", {
            position: "top-center",
            
        })
    }
   
    return (
        <div className="relative bg-slate-900 rounded-2xl shadow-black shadow-lg">
            <h1 className="text-[20px] font-bold mb-3 text-white mt-3 ">Output Code</h1>
            <DropMenu></DropMenu>
            {/* <div className="flex h-[1px] w-[calc(100%-10%)] bg-slate-400 mx-auto"></div> */}
            {
                isLoading? ( <div className="h-[400px] w-[500px] flex justify-center items-center transition-all">
                    <Loading></Loading>
                </div>) : (
                
                <div className="relative h-[100%-2%]">
                    
                    
                    {/* <textarea  className="w-[500px] h-[400px] operator" value={opCode} readOnly placeholder="Your Output will come here"> */}
                      <Editor className="w-[300px] h-[435px] md:w-[500px] operator mx-5 rounded-2xl mb-5 text-white " padding={10} onValueChange={code => setOpCode(code)} highlight={code => highlight(code, languages.js)} value={opCode} placeholder="Your code will appear here"/>  
                   {/* </textarea> */}
                   <button className="absolute bottom-3 right-7 text-white" onClick={copyHandle}><FaCopy className="text-[30px] hover:text-indigo-400 hover:scale-[1.2]"/></button>     
                </div>)
                
            }

       
            
        </div>
    )
}

export default CodeOutput