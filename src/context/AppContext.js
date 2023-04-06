import { createContext } from "react";
import { Configuration, OpenAIApi } from "openai"
import { useState } from "react";

export const AppContext = createContext()

export function AppContextProvider({children}){
    const [ipCode,setIpCode] = useState("")
    const [opCode, setOpCode] = useState("")
    const [isLoading, setLoading] = useState(false)
    const [randomQ, setRandomQ] = useState("")
    const [selectedItem, setSelectedItem] = useState('Java')

    const options = ['Java', 'Python', 'Dart', 'Javascript', 'C++', 'Html', 'XML', 'React.js','Flutter', 'React Native', '.NET']
    const APIKEY = process.env.REACT_APP_API_KEY

    function selectChangeHandler(event) {
        setSelectedItem(event.target.value)
        
    }

    const configuration = new Configuration({
        apiKey: APIKEY
     })

     const openai = new OpenAIApi(configuration)


     async function handleSubmit(){
        console.log(APIKEY)
      setLoading(true)
        try {
                 const response = await openai.createCompletion({
                 model: "text-davinci-003",
                 prompt : `convert this code into ${selectedItem} code: 
                 ${ipCode}`,
                 max_tokens: 3048
               })
            //    console.log(`convert this code into ${selectedItem} code: 
            //    ${ipCode}`)

               const output = response.data.choices[0].text
               setOpCode(output)
        } catch (error) {
            alert("This Error occured 🙄"+error)
        }

        setLoading(false)
      
     }


     async function randomQoute(){
        setLoading(true)
        try {
            const response= await openai.createCompletion({
                model: 'text-davinci-003',
                prompt: 'give a random developer quote, dont include authrs name',
                max_tokens: 200
            })

            const output = response.data.choices[0].text
            setRandomQ(output)
        } catch (error) {
            setRandomQ("Web developers are awesome 👨‍💻😎")
            console.log(error)
        }

        setLoading(false)
     }

     const value ={
        ipCode,
        setIpCode,
        opCode,
        setOpCode,
        handleSubmit,
        isLoading,
        setLoading,
        selectedItem,
        setSelectedItem,
        options,
        selectChangeHandler,
        randomQ,
        setRandomQ,
        randomQoute,
     }


     return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}