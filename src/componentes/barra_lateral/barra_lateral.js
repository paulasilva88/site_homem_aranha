import "./barra_lateral.css"
import { FaSpider } from "react-icons/fa"

export default function BarraLateral(){
    return(
        <div className="barraLado">
            
            <div className="barraLadoItem">
                <img
                    src="https://m.media-amazon.com/images/I/61HPnTIbBpL._AC_SX569_.jpg"
                    alt=""
                />

                <p>
                    Com grandes poderes vêm sempre grandes responsabilidades. <br/>
                </p>
                
                <div className="barraLadoItem">
      
                    <span className="barraLadoTitulo"><FaSpider/> TRILHA SONORA <FaSpider/></span>

                    <ul className="barraLadoLista">

                        <li className="barraLadoListaItem"><FaSpider/> Familia</li>
                        <li className="barraLadoListaItem"><FaSpider/> Memories</li>
                        <li className="barraLadoListaItem"><FaSpider/> Way Up</li>
                        <li className="barraLadoListaItem"><FaSpider/> Scared of the Dark</li>
                        <li className="barraLadoListaItem"><FaSpider/> Start a Riot</li>
                        <li className="barraLadoListaItem"><FaSpider/> Let Go</li>

                    </ul>
                </div>
            </div>

        </div>
    )
}