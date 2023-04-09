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

    //Add other programming Language if you want 👇👇

    const options = ['Java', 'Python', 'JavaScript', 'C', 'C++', 'C#', 'Ruby', 'Swift', 'Objective-C', 'PHP', 'Go', 'Rust', 'Kotlin', 'Scala', 'Haskell', 'Lua', 'Perl', 'Shell', 'SQL', 'HTML', 'CSS','Django', 'Flask', 'FastAPI', 'Node.js', 'React', 'Angular', 'Vue.js', 'Express', 'Spring', 'Ruby on Rails', 'Laravel', 'Symfony', 'Zend', 'ASP.NET', 'ASP.NET Core', 'Play', 'Akka', 'Grails', 'Meteor', 'Ember', 'Flutter', 'Ionic', 'Xamarin', 'NativeScript', 'PhoneGap', 'Cordova', 'React Native', 'Ionic', 'Electron', 'Pyramid', 'Bottle', 'CherryPy']
    

    function selectChangeHandler(event) {
        setSelectedItem(event.target.value)
        
    }

    const configuration = new Configuration({
        //Add your API Key here 👇👇
        // get your api key from here https://platform.openai.com/account/api-keys
        apiKey: "replace by Your own API key"
     })

     const openai = new OpenAIApi(configuration)


     async function handleSubmit(){
        
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