import BarraTopo from "./componentes/barra_topo/barra_topo";
import Inicial from "./paginas/inicial/inicial";
import Sobre from "./paginas/sobre/sobre";
import Escreva from "./paginas/escreva/escreva";

import { 
  BrowserRouter as Router ,
  Route,
  Routes
} from "react-router-dom";

export default function App(){
    return (
      <Router>
      
      <BarraTopo/>


      <Routes>
          <Route axact path="/" element={<Inicial/>}/>
          <Route axact path="/about" element={<Sobre/>}/>
          <Route axact path="/write" element={<Escreva/>}/>
          

      </Routes>
      
      </Router>
      
    );
  }
