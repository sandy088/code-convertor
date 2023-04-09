import CodeInput from "./CodeInput"
import CodeOutput from "./CodeOutput"
import Note from "./Note"
import changeCodeBg from "../assets/changeCodeBg.png"

function ChangeCodeSection() {
    
    return (
       
            <div className=' bg-slate-700 py-7 pb-11 relative'>
                
                
                <h1 className="relative text-white text-[28px] pt-7 pb-2 font-bold mb-8 z-[50]">Convert Your Code here With Ease 👨‍💻😎</h1>
                 <div className="relative z-10"><Note/>
                    </div>
                <div className=" relative flex justify-evenly items-center gap-3 w-screen flex-wrap mx-auto z-10">
                    <CodeInput />
                    <CodeOutput/>
                </div>
                <div className="absolute top-1 right-1 z-[0]">
                    <img src={changeCodeBg} height={300} width={300} className=" z-0" loading="lazy"/>
                </div>

            </div>
      

    )
}

export default ChangeCodeSection