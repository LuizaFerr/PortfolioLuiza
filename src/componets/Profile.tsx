import React from 'react';
import Luiza from '../assets/Luiza.jpg';
import Rectangle4 from '../assets/Rectangle4.png';
import Rectangle3 from '../assets/Rectangle3.png';
import Rectangle2 from '../assets/Rectangle2.png';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


interface ProfileProps {
 onPageChange: (page: string) => void;
}

const Profile: React.FC<ProfileProps> = ({ onPageChange }) => {
 const navigate = useNavigate();

 const handleClick = () => {
 // Reindirizza l'utente alla pagina /about
 navigate('/about');
 };

 return (
  <div className='min-h-screen bg-[#141414] h-[1000px] '>
  <div data-name='home' className='w-full h-full min-h-screen'>
    {/* Container */}
    <div className=' max-auto px-8 flex flex-col justify-center h-full'>
      {/* Il tuo contenuto qui */} 
        </div>
        <p className=" absolute top-[123px] left-[469px] w-[847px] font-inter text-[15px] font-light text-[#FAFAEC]" >
        Ciao a tutti, mi chiamo Maria Luiza Ferreira, la mia avventura nel mondo del design è iniziata con il design grafico, dove ho imparato a usare Photoshop per creare immagini professionali. Finito questo percorso di studio, però, volevo capire di più, ho studiato codice per un breve periodo di tempo, per capire come funzionano i siti web dietro le quinte e principalmente per capire come sono le app dal punto di vista tecnico. Ma volevo un lavoro dove potevo usare la creatività, volevo capire come coinvolgere gli utenti e risolvere i loro problemi con soluzione creative ed efficace. Così ho scoperto il Ux Design e me sono innamorata.
<br />
Durante il mio percorso di formazione con Google Professional Certificates ho seguito le fasi del design thinking: empatizzare con gli utenti, definire i problemi da risolvere, ideare le possibili soluzioni scelte e testarle con gli utenti.
<br />
Sono alla ricerca di una sfida professionale che mi permetta di mettere in pratica le mie conoscenze e di crescere come designer. Se volete saperne di più su di me e sui i miei progetti, potete scorrere dentro il mio portfolio o contattarmi tramite email.
<br />
Grazie per la vostra attenzione.
        </p>
        <div className="absolute" style={{ left: 478, top: 411 }}>
  <div className="h-1.5 w-64 bg-white rounded"></div>
</div>
<div className="absolute" style={{ left: 1057, top: 411 }}>
  <div className="h-1.5 w-64 bg-white rounded"></div>
</div>
        <div> 
        <img src={Luiza} alt="Luiza" style={{height: '329px', width: '334px', borderRadius: '6%', position: 'absolute', top: '78px', left: '87px'}}/>
      </div>
      <p className="absolute left-[91px] top-[445px] text-[#FFFFFF] text-[38px]" style={{letterSpacing: '0', lineHeight: 'normal', fontFamily: '"Laila", sans-serif'}}>CONTACTS</p>
      <p className="absolute left-[469px] top-[76px] text-[#FFFFFF] text-[38px]" style={{letterSpacing: '0', lineHeight: 'normal', fontFamily: '"Laila", sans-serif'}}>PROFILE</p>
      <p className="absolute left-[789px] top-[391px] text-[#FFFFFF] text-[38px]" style={{letterSpacing: '0', lineHeight: 'normal', fontFamily: '"Laila", sans-serif'}}>PROJECTS</p>
       {/* Icone dei social */}
       <ul className="flex flex-col space-y-4 absolute left-[91px] top-[500px]">
  {/* Icona di Facebook */}
  <li>
    <a href="https://www.facebook.com/iLuiiza" className="text-white">
      <FontAwesomeIcon icon={faFacebook} size="2x" />
    </a>
  </li>

  {/* Icona di LinkedIn */}
  <li>
    <a href="https://www.linkedin.com/in/maria-luiza-ferreira-a9102b273/" className="text-white">
      <FontAwesomeIcon icon={faLinkedin} size="2x" />
    </a>
  </li>

  {/* Icona di Gmail */}
  <li>
    <a href="https://mail.google.com/mail/u/0/?pli=1#inbox" className="text-white" >
      <FontAwesomeIcon icon={faEnvelope} size="2x" />
    </a>
  </li>
</ul>
 <p className="absolute text-white top-[610px] left-[134px]">luiza.uxdesigner@gmail.com</p>
        
        
        <a href='https://medium.com/@22ferreira.luiza22/about-project-9141e1f1f5b0'>
        <img src={Rectangle4} alt="Rectangle4" style={{height: '401px', width: '243px', position: 'absolute', top: '456px', left: '1072px', cursor:'pointer'}}/>
        </a>
        <a href='https://docs.google.com/presentation/d/1_fVkQweh7uRv6bZwtUzLn9xRChT9nYkWYi_WVN8E0Q8/edit?usp=sharing'>
        <img src={Rectangle3} alt="Rectangle3" style={{height: '401px', width: '243px', position: 'absolute', top: '456px', left: '778px', cursor:'pointer'}}/>
        </a>
        <a href='https://medium.com/@22ferreira.luiza22/amazon-unsolicited-redesign-af0858bba76d'>
        <img src={Rectangle2} alt="Rectangle2" style={{height: '401px', width: '243px', position: 'absolute', top: '456px', left: '478px', cursor:'pointer'}}/>
        </a>
        
      </div>
      </div>
  )
}

export default Profile

