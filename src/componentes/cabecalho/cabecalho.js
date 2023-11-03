import "./cabecalho.css"

export default function Cabecalho(){
    return(
        <div className="cabecalho">

            <div className="cabecalhoTitulo">
                <span className="cabecalhoTituloCima">Projeto de Pogramação Web 1</span>
                <span className="cabecalhoTituloBaixo"> Site </span>

                <img
                    className="cabecalhoImg"
                    src="https://viajento.files.wordpress.com/2018/12/homem-aranha-no-aranhaverso-filme-animacao.jpg?w=840"
                    alt=""
                />

            </div>
        
        </div>
    )
}