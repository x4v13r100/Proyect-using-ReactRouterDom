import {
  BrowserRouter,
  Routes,
  Route 
} from 'react-router-dom';

// Layout
import Layout from './Layout/Layout';

// Pages
import Main from './Pages/Main';
import Vite from './Pages/Vite';


function App() {
  

  return (

    // Rutas publicas
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Vite/>}/>
          <Route path='contacto' element={<Main/>}/>
        </Route>
      </Routes>

    {/* Rutas Protegidas */}

    
    </BrowserRouter>
    
  )
}

export default App
