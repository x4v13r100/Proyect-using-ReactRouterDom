import React from 'react'
import reactLogo from '../assets/react.svg';

const Footer = () => {
  return (
    <footer className="fooster">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>


        <p>Todos los derechos reservados</p>
      </footer>
  )
}

export default Footer