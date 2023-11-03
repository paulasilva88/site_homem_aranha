import Cabecalho from "../../componentes/cabecalho/cabecalho";
import BarraLateral from "../../componentes/barra_lateral/barra_lateral"
import AreaPostagem from "../../componentes/area_postagem/area_postagem";

export default function Inicial(){
    return (
      <>
      
      <Cabecalho/>

      <div className="appInicial">
        <AreaPostagem/>
        <BarraLateral/>
      </div>
      
      
      </>
      
    );
  }
