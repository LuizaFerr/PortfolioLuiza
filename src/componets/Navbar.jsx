import React, {useState} from 'react'; 
import womenPowerSittingInChair from '../assets/women-power-sitting-in-chair.png'; 



const Navbar = () => { 
  const [nav, setNav] = useState(false)
  
  return ( 
    <div className='relative w-full h-[280px] flex justify-between items-center px-4 bg-[#1E1E1E]'> 
      <div> 
        <img src={womenPowerSittingInChair} alt="Women Power Sitting In Chair" style={{height: '394px', left: '956px', position: 'absolute', top: '46px'}}/> 
      </div>
      <div>
      <p className="absolute left-[23px] top-[-12px] text-[#FAFAEC] text-[128px]" style={{letterSpacing: '0', lineHeight: 'normal', fontFamily: '"Koh Santepheap", sans-serif'}}>Don't<br />lose yourself...<br/></p>
      </div> 
    </div> 
  ) 
} 

export default Navbar