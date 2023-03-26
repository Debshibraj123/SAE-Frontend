import React from 'react';
import '../assets/css/tedCSS/home.css'
import Gallery from '../components/tedx/tedxGallery';
import img3 from '../assets/images/bg3-ted.jpg';
import img4 from '../assets/images/tedxnitdgp.png';
import sp1 from '../assets/images/ted_sp.png'
import sp2 from '../assets/images/ted_sp1.jpg'
import sp3 from '../assets/images/ted_sp2.jpeg'
import sp4 from '../assets/images/ted_sp3.jpeg'
import sp5 from '../assets/images/ted_sp4.jpeg'
import ted2 from '../assets/images/ted2.JPG'
import ted3 from '../assets/images/ted3.JPG'
import org1 from '../assets/images/ted_org1.png'
import org2 from '../assets/images/ted_org2.png'
import org3 from '../assets/images/ted_org3.png'
import org4 from '../assets/images/ted_org4.jpg'
import org5 from '../assets/images/ted_org5.jpeg'
import org6 from '../assets/images/ted_org6.jpg'
import org7 from '../assets/images/ted_org7.jpg'
import org9 from '../assets/images/ted_org9.png'
import org8 from '../assets/images/ted_org8.jpg'


function ted() 
{
    return (
<div>
    <div className='transparent-background-ted'></div>
    <div className='landing'>
    <img className='img1' src={img3}></img> 
    <img className='img2' src={img4}></img> 
    </div>
    <div>
    <div className="upper">
      <div className="logo">
        <div className="image">
          <div className="camp">
            <img src={ted2} alt="Image" id="tent" />
          </div>
        </div>
      </div>
      <div className="info">
        <h1>ABOUT TEDx</h1>
        <p>
        TEDx is an independently organized equivalent to its international counterpart, TED. Resonating with TED’s mission of researching and discovering “ideas worth spreading”, TEDx aims to provide a credible platform to an emerging pool of talent at the grassroots, subsequently sparking constructive discussions locally.TEDx events are organized by curious individuals who seek to discover ideas and spark conversations in their own community.
        </p>
      </div>
    </div>
    
    <div className="lower">
      <div className="info" id="lower-info">
        <h1>SAE in TEDx</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
          nostrum excepturi unde eveniet delectus? Porro esse laudantium hic
          ipsam sed inventore, aliquid quidem tempora rem harum quasi quia
          corrupti dignissimos?
        </p>
      </div>
      <div className="slider" id="lower-img">
        <img src={ted3} alt="Image" id="slider" />
      </div>
    </div>
     </div>
  <div className='carousels'>
  <h1>Gallery</h1>
   <Gallery />
  </div>
   <div className='speakers'>
    <h1>speakers</h1>
  <div className="team">
      
        <div  className="profile">
          <h2 className="profile__name">Aanchal Thakur</h2>
          <p>Alpine Skier</p>
          <img alt="Anita Simmons" src={sp2} />
        </div>
    
      
        <div  className="profile">
          <h2 className="profile__name">Tapan Misra</h2>
          <p>Indian Scientist</p>
          <img alt="Profile shot for Celina Harris" src={sp1} />
        </div>
      
        <div className="profile">
          <h2 className="profile__name">Kanthi Dutt</h2>
          <p>
Entrepreneur</p>
          <img alt="Profile shot for Ruby Morris" src={sp3} />
        </div>
        <div className="profile">
          <h2 className="profile__name">Pratik Gauri</h2>
          <p>
Social Entrepreneur</p>
          <img alt="Profile shot for Nicholas Castro" src={sp4} />
        </div>
        <div  className="profile">
          <h2 className="profile__name">Kenidra Woods</h2>
          <p>
Mental Health Advocate/Social Justice Activist</p>
          <img alt="Profile shot for Marc Dixon" src={sp5} />
        </div>
       
    </div>

   </div>
   <div className='members'>
    <h1>Organisers</h1>
    <div className='card-list'>
   <div className="card">
  <div className="card_image"> <img src={org1}></img> </div>
  <div className="card_title title-white">
    <p>Divas Gupta</p>
  </div>
  </div>
   <div className="card">
  <div className="card_image"> <img src={org2}></img> </div>
  <div className="card_title title-white">
    <p>Anurag Singh</p>
    
  </div>
  </div>
   <div className="card">
  <div className="card_image"> <img src={org3}></img> </div>
  <div className="card_title title-white">
    <p>Anik Mondal</p>

  </div>
  </div>
   <div className="card">
  <div className="card_image"> <img src={org4}></img> </div>
  <div className="card_title title-white">
    <p>Vishal Jaiswal</p>
    
  </div>
  </div>
   <div className="card">
  <div className="card_image"> <img src={org5}></img> </div>
  <div className="card_title title-white">
    <p>Suryadip Mondal</p>
    
  </div>
  </div>
   <div className="card">
  <div className="card_image"> <img src={org6}></img> </div>
  <div className="card_title title-white">
    <p>Shubham Gupta</p> 
  </div>
  </div>
   <div className="card">
  <div className="card_image"> <img src={org7}></img> </div>
  <div className="card_title title-white">
    <p>Aniket Panigrahi</p> 
  </div>
  </div>
   <div className="card">
  <div className="card_image"> <img src={org8}></img> </div>
  <div className="card_title title-white">
    <p>Sukanya Dutta</p> 
  </div>
  </div>
   <div className="card">
  <div className="card_image"> <img src={org9}></img> </div>
  <div className="card_title title-white">
    <p>Navin Pathak</p> 
  </div>
  </div>
  </div>
    </div>
   
 </div>
    );
}
export default ted;
