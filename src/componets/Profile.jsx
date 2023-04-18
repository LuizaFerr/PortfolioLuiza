import React from 'react';
import Luiza from '../assets/Luiza.jpg';
import Line1 from '../assets/Line 1.png';
import history1 from '../assets/history-1@2x.png';
import Frame1 from '../assets/Frame1.png';
import Frame2 from '../assets/Frame2.png';
import historynuovo from '../assets/history-nuovo-1@2x (1).png';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Reindirizza l'utente alla pagina /about
    navigate('/about');
  };

  return (
    <div name='home' className='w-full h-screen bg-[#fffff]'>
      {/* Container */}
      <div className='max-w-[1000px] max-auto px-8 flex flex-col justify-center h-full'>
        <div
          className='z-10 bg-[#1E1E1E] rounded-full h-[29px] relative left-[101px] top-[431px] w-28 cursor-pointer'
          onClick={handleClick}
        >
          <p
            className='z-10 text-[#FAFAEC] text-[22px] h-[29px] relative left-[33px] top-[3px] cursor-pointer'
            style={{
              letterSpacing: '0',
              lineHeight: 'normal',
              fontFamily: '"Inter", sans-serif',
            }}
          >
            More
          </p>
        </div>
        <p className="z-0 absolute top-[554px] left-[8px] w-[366px] font-sans text-[20px] font-light" >
          Ciao a tutti, sono una UX design, mi chiamo Luiza Ferreira e oggi voglio parlarvi 
          di cosa mi ha portato ad essere qui. Dopo aver terminato gli studi superiori mi 
          sono immersa nella realtà lavorativa e ho notato che erano poche le possibilità 
          che mi si presentavano. Il mondo stava cambiando rapidamente sotto l’impulso della 
          digitalizzazione, molti settori tradizionali stavano perdendo terreno o trasformandosi. 
          Ma non mi sono scoraggiata e ho iniziato a interessarmi alla tecnologia digitale.
          <br />
          <span className="text-[#8B8282]">La mia avventura nel mondo del design è iniziata...</span>
        </p>
        <div> 
        <img src={Luiza} alt="Luiza" style={{height: '166px', width: '166px', borderRadius: '50%', position: 'absolute', top: '299px', left: '35px'}}/>
      </div>
      <p className="absolute left-[18px] top-[488px] text-[#4B4949] text-[38px]" style={{letterSpacing: '0', lineHeight: 'normal', fontFamily: '"Travel Sans"'}}>Luiza Ferreira</p>
      <p className="absolute left-[425px] top-[491px] text-[#1E1E1E] text-[38px]" style={{letterSpacing: '0', lineHeight: 'normal', fontFamily: '"Inter", sans-serif'}}>Food Menu App</p>
      <p className="absolute left-[425px] top-[554px] w-[411px] text-[#1E1E1E] text-[18px]" style={{letterSpacing: '0em', lineHeight: '1.em', fontFamily: '"Inter", sans-serif', wordWrap: 'break-word'}}>
      It’s a fictional app project that I did while I was studying at <span className="text-bold font-bold">Google Professional Certificates. </span> The objective was to make a simple and user-friendly app
</p>
<div className=' bg-[#1E1E1E] rounded-full h-[29px] relative left-[500px] top-[58px] w-28 cursor-pointer'> 
<a href="https://docs.google.com/presentation/d/1_fVkQweh7uRv6bZwtUzLn9xRChT9nYkWYi_WVN8E0Q8/edit?usp=sharing">
          <p className=' text-[#FAFAEC] text-[22px] h-[29px] relative left-[33px] top-[3px] cursor-pointer' style={{letterSpacing: '0', lineHeight: 'normal', fontFamily: '"Inter", sans-serif'}}>More</p>
        </a>
        </div>
        
        <img src={Line1} alt="Line1" style={{height: '2px', width: '751px', position: 'absolute', top: '690px', left: '423px'}}/>
        <img src={history1} alt="History1" style={{height: '354px', width: '259px', position: 'absolute', top: '345px', left: '758px'}}/>
        <a href='https://medium.com/@22ferreira.luiza22/about-project-9141e1f1f5b0'>
        <img src={Frame1} alt="Frame1" style={{height: '315px', width: '346px', position: 'absolute', top: '709px', left: '828px', cursor:'pointer'}}/>
        </a>
        <a href='https://medium.com/@22ferreira.luiza22/amazon-unsolicited-redesign-af0858bba76d'>
        <img src={Frame2} alt="Frame2" style={{height: '332px', width: '346px', position: 'absolute', top: '709px', left: '423px', cursor: 'pointer'}}/>
        </a>
        <img src={historynuovo} alt="HistoryNuovo" style={{height: '378px', width: '351px', position: 'absolute', top: '345px', left: '834px'}}/>
      </div>
    </div>
  )
}

export default Profile

