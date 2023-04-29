import React from 'react'
import Women from '../assets/Women.png';



const About:React.FC<{}> = () => { 
  
  return (
    <div data-name='about' className='relative w-full h-[280px] flex justify-between items-center px-4 bg-[#1E1E1E]'>
        <div className='max-w-[1000px] max-auto px-8 flex flex-col justify-center h-full'></div>
        <p className="absolute left-[23px] top-[-12px] text-[#FAFAEC] text-[128px]" style={{letterSpacing: '0', lineHeight: 'normal', fontFamily: '"Koh Santepheap", sans-serif'}}>Practice<br />makes perfect...<br/></p>
        <img src={Women} alt="Women" style={{height: '345px', left: '956px', position: 'absolute', top: '9px'}}/> 
        <p className="absolute left-[456px] top-[345px] text-[#4B4949] text-[38px]" style={{letterSpacing: '0', lineHeight: 'normal', fontFamily: '"Travel Sans"'}}>Knock Knock, chi sono</p>
        <p className="z-0 absolute top-[428px] left-[22px] w-[1274px] font-sans text-[20px] font-light" >
        Ciao a tutti, mi chiamo Luiza Ferreira e oggi voglio parlavi di cosa mi ha portato ad essere qui. Dopo aver terminato gli studi superiori mi sono immersa nella realtà lavorativa e ho notato che erano poche 
        le possibilità che mi si presentavano. Il mondo stava cambiando rapidamente sotto l’impulso della digitalizzazione, molti settori tradizionali stavano perdendo terreno o trasformandosi. Ma non mi sono 
        scoraggiata e ho iniziato a interessarmi alla tecnologia digitale.
        <br />
        <br />

La mia avventura nel mondo del design è iniziata con il design grafico, dove ho imparato a usare Photoshop per creare immagini professionali. Finito questo percorso di studio, però, 
volevo capire di più, ho studiato codice per un breve periodo di tempo, per capire come funzionano i siti web dietro le quinte e principalmente per capire come sono le app dal punto 
di vista tecnico. Ma volevo un lavoro dove potevo usare la creatività, volevo capire come coinvolgere gli utenti e risolvere i loro problemi con soluzione creative ed efficace. 
Così ho scoperto il Ux Design e me sono innamorata.
 <br />
 <br />

Durante il mio percorso di formazione con Google Professional Certificates ho seguito le fasi del design thinking: empatizzare con gli utenti, definire i problemi da risolvere, 
ideare le possibili soluzioni scelte e testarle con gli utenti.
<br />
<br />
Sono alla ricerca di una sfida professionale che mi permetta di mettere in pratica le mie conoscenze e di crescere come designer. Se volete saperne di più su di me e sui i 
miei progetti, potete scorrere dentro il mio portfolio o contattarmi tramite email.
<br />
<br />
Grazie per la vostra attenzione.
          
        </p>
      
    </div>
  )
}

export default About
