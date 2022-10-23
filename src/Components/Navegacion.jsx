import {Link} from 'react-router-dom';


const Navegacion = () => {
  return (
    <div className="nav-bg">
        <nav className="navegacion-principal contenedor">
          <Link to="/">Inicio</Link>
          <Link to="productos">Lista de Productos</Link>
          <Link to="contactos">Contactanos</Link>
        </nav>
    </div>
  )
}

export default Navegacion