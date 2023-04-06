import { FaInfoCircle } from "react-icons/fa"

function Note(){
    return (
        <div className="flex justify-center items-center mx-auto mb-10">
            <div className=" bg-indigo-100 flex items-center gap-3 p-3 rounded-md text-indigo-600 w-[85%] max-w-2xl">
                 <FaInfoCircle/>
                  Results may not always 100% accurate, So it is recomended to cross check the Code
            </div>
           
        </div>
    )
}

export default Note