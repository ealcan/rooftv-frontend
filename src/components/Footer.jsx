import React from 'react'
import LogoInstagram from '../assets/logo-instagram-bw.png'
import LogoYoutube from '../assets/logo-youtube-bw.png'
import LogoSoundcloud from '../assets/logo-soundcloud-bw.png'


const Footer = () => {
  return (
    <div className='container-fluid container-footer'>
      <div className='footer-redes'>
        <h3>SÍGUENOS</h3>
        <div className='container-logos'>
         <a href="https://www.instagram.com/roof.tv/"><img src={LogoInstagram} alt="" style={{height: "100%"}}/></a>
         <a href="https://www.youtube.com/channel/UCv6_ggrXxlTapYcjuaIho0w"><img src={LogoYoutube} alt="" style={{height: "100%"}}/></a>
         <a href="https://soundcloud.com/rooftv" ><img src={LogoSoundcloud} alt="" style={{height: "100%"}}/></a>
        </div>
      </div>
      <div className='contact'>
          <h3>CONTACTO</h3>
          <div>info@rooftv.com</div>
          <div>678912345</div>
      </div>
    </div>
  )
}

export default Footer