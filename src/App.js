import Menu from './components/Menu';
import Home from './components/Home';
import Aula from './components/Aula'
import Aulas from './components/Aulas';
import Assistir from './components/Assistir';
import Sobre from './components/Sobre';
import NaoExiste from './components/NaoExiste';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Browser router: gerenciador de rotas 
// Route: componente responsavel por criar as rotas
import './App.css';

function App() {
  return (

    <Router>

      <div className="App">
        <Menu titulo="Marca" items_nav={["Aulas", "Assistir","Sobre"]}></Menu>
        <Routes>

          <Route path="*" element={<NaoExiste/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/aulas" element={<Aulas />} />
          <Route path="/aulas/:id" element={<Aula />} />
          <Route path="/assistir" element={<Assistir />} />
          <Route path="/sobre" element={<Sobre/>} />
          

        </Routes>
      </div>

    </Router>
  );
}

export default App;
