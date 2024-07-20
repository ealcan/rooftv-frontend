import React from 'react';
import LogoRooftv from '../assets/roof-logo-png-2.png'
import LogoInstagram from '../assets/logo-instagram.png'
import LogoYoutube from '../assets/logo-youtube.png'
import LogoSoundcloud from '../assets/logo-soundcloud.png'


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg justify-content-between custom-navbar">
      <a className="navbar-brand" href="/" >
        <img className="custom-image img-fluid" src={LogoRooftv} alt="" />
      </a>
      {/* <div className="logos">
        <a href="https://www.instagram.com/roof.tv/">
          <img src={LogoInstagram} alt="" style={{ width: '20px' }} />
        </a>
        <a href="https://www.youtube.com/channel/UCv6_ggrXxlTapYcjuaIho0w">
          <img src={LogoYoutube} alt="" style={{ width: '20px' }} />
        </a>
        <a href="https://soundcloud.com/rooftv">
          <img src={LogoSoundcloud} alt="" style={{ width: '20px' }} />
        </a>
      </div> */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
        <ion-icon name="filter-outline"></ion-icon>
      </button>
      <div className="collapse navbar-collapse separacion custom-toggle" id="navbarSupportedContent" style={{ position: 'relative' }}>
        <ul className="navbar-nav custom-toggle">
          <li className="nav-item">
            <a className="nav-link colorRojo" href="/">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link colorRojo" href="/events">
              Eventos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link colorRojo" href="/artists">
              Sesiones
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link colorRojo" href="/videos">
              Vídeos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link colorRojo" href="/news">
              News
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link colorRojo" href="/shop">
              Shop
            </a>
          </li>
        </ul>
        {/* <form className="form-inline my-2 my-lg-0 search">
          <input className="form-control mr-sm-2" type="search">
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> */}
      </div>
    </nav>
  );
};

export default Header;