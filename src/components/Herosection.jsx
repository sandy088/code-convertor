import {HeroCTA} from './HeroCTA'
import logos from "../assets/logos.png"

function HeroSection(props){
    return(
        <div className=' flex flex-col items-center justify-center overflow-x-hidden'> 
            <div className='z-10'>
                <HeroCTA onChangeCodeScroll={props.onChangeCodeScroll}/>
            </div>
            
            <div className='absolute z-[0] overflow-hidden h-[360px] bottom-0 w-screen opacity-0 md:opacity-100'>
                <div class="absolute z-[5] inset-0  gradientBg"></div>
                <img className='absolute  h-auto object-cover companiesList' src={logos} loading='lazy'/>
                <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            </div>
            
        </div>
    )
}

export default HeroSection