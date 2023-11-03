import "./barra_topo.css"
import Foto from '../../imagens/imagem.png'
import { Link } from "react-router-dom"

export default function BarraTopo(){
    return(
        <>

          <div className='topo'>

            <div className='topoEsquerda'></div>

            <div className='topoCentro'>
                <ul className='topoLista'>

                    <Link to="/">
                        <li className='topoListaItem'>Início</li>
                    </Link>

                    <Link to="/about">
                        <li className='topoListaItem'>Sobre</li>
                    </Link>
                    
                    <Link to="/write">
                        <li className='topoListaItem'>Adicionar Aranha</li>
                    </Link>

                </ul>

            </div>
            

            <div className='topoDireita'>
            <img 
                className='topImg'
                src={Foto} />
            </div>
          </div>

          
        </>
    )
}