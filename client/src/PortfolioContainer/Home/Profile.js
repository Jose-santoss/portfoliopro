import React from 'react';
import Typical from 'react-typical';
import './Profile.css';

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                    <a href="https://www.facebook.com/profile.php?id=100015248027613">
                        <i className='fa fa-facebook-square'></i>
                    </a>
                    <a href="https://github.com/zehsantoss">
                        <i className='fa fa-github-square'></i>
                    </a>
                    <a href="https://www.instagram.com/zehsantoss/?hl=en">
                        <i className='fa fa-instagram'></i>
                    </a>
                    <a href="https://www.linkedin.com/in/jos%C3%A9-prot%C3%A1sio-aabaab227/">
                        <i className='fa fa-linkedin-square'></i>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=5564993138737&text=Adiciona aí!">
                        <i className='fa fa-whatsapp'></i>
                    </a>
                    </div> 
                </div>

                <div className="profile-details-name">
                    <span className="primary-text">
                        {" "}
                        Olá, eu sou <span className="highlighted-text">José</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                        {" "}
                        <Typical
                        loop={Infinity}
                        steps={[
                            "Ethusiastic Dev Developer 🔴",
                            1000,
                            "Full Stack Developer 💻",
                            1000,
                            "MERN stack Dev 😎",
                            1000,
                            "Cross Platform Dev 🌐",
                            1000,
                            "React/React Native📱",
                            1000,
                        ]}
                        />
                        </h1>
                        <span className="profile-role-tagline">
                         Habilidade em criar aplicações com operações front end e back end.   
                        </span>
                    </span>
                </div>
                <div className="profile-options">
                    <button className="btn primary-btn">
                        {""}
                        Contrate-me{" "}
                    </button>
                    <a href="josedev.pdf" download="josedev.pdf">
                        <button className="btn highlighted-btn">Obter Currículo</button>
                        </a>
                        </div>
                    </div>
                    <div className="profile-picture">
                        <div className="profile-picture-background"></div>
                    </div>
                </div>
            </div>   
  );
  }

