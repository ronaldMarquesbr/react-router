import Menu from './components/Menu';
import Home from './components/Home';
import Aula from './components/Aula'
import Aulas from './components/Aulas';
import Assistir from './components/Assistir';
import Sobre from './components/Sobre';
import NaoExiste from './components/NaoExiste';
import Negado from './components/Negado';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Browser router: gerenciador de rotas 
// Route: componente responsavel por criar as rotas

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import loginReducer from './reducers/loginReducer';
import PrivateRoute from './components/PrivateRoute'; //importando PrivateRoute que é um componente que restringe o acesso a uma página.

import './App.css';


const store = createStore(loginReducer);


function App() {
  return (

    <Provider store={store}>
      <Router>

        <div className="App">
          <Menu titulo="Marca" items_nav={["Login","Aulas", "Assistir","Sobre"]}></Menu>
          <Routes>

            <Route path="*" element={<NaoExiste/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/aulas" element={<PrivateRoute> <Aulas /> </PrivateRoute>} />
            <Route path="/aulas/:id" element={<Aula />} />
            <Route path="/assistir" element={<Assistir />} />
            <Route path="/sobre" element={<Sobre/>} />
            <Route path="/negado"  element={<Negado/>} />
            
          </Routes>
        </div>

      </Router>
    </Provider>
  );
}

export default App;
