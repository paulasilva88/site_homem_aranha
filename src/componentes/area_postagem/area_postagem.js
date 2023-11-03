import "./area_postagem.css"
import Postagem from "../postagem/postagem.js"


export default function AreaPostagem(){

    let postagemMiles = {'info':'Aranhaverso',
                        'titulo': 'Miles Morales',
                        'data':'12 set 2022',
                        'foto': "https://images.unsplash.com/photo-1487452066049-a710f7296400?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
                        'alt': "texto Alt",
                        'desc': 'Miles Morales no Aranhaverso é um protagonista incrivelmente carismático, representando uma nova geração de heróis. Sua jornada de auto-descoberta e aceitação de responsabilidades como o Homem-Aranha é cativante, enquanto sua diversidade é um reflexo positivo da evolução da representação nos quadrinhos e na cultura pop. Miles trouxe uma perspectiva única para o universo do Aranhaverso, enriquecendo a narrativa e inspirando uma audiência diversificada a acreditar em si mesma.'
                        } 

    let postagemGwen = {'info':'Aranhaverso',
                        'titulo': 'Gwen Stacy',
                        'data':'13 set 2022',
                        'foto': "https://images.unsplash.com/photo-1514355315815-2b64b0216b14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                        'desc': 'Gwen Stacy no Aranhaverso é uma personagem fascinante e empoderada. Sua versão alternativa, a Spider-Woman, é uma adolescente corajosa que luta contra as forças do mal enquanto lida com as pressões da escola e as complexidades de ser uma super-heroína. Sua conexão com Peter Parker e sua incrível habilidade de se movimentar entre dimensões adicionam profundidade à trama, tornando-a uma peça fundamental do universo do Homem-Aranha no Aranhaverso. A representação de Gwen como uma heroína forte e independente inspira não apenas fãs de quadrinhos, mas também aqueles que buscam modelos femininos positivos nas histórias de super-heróis.'
                    } 

    let postagemPeter = {'info':'Aranhaverso',
                        'titulo': 'Peter Parker',
                        'data':'14 set 2022',
                        'foto': "https://images.unsplash.com/photo-1561625984-7474d6927bd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
                        'desc': 'Peter Parker no Aranhaverso é a âncora que conecta todas as diferentes versões do Homem-Aranha. Sua experiência como o Peter Parker original traz maturidade e orientação para os outros heróis aracnídeos, enquanto enfrenta desafios emocionais e físicos. Sua jornada de autorreflexão e redenção inspira a ideia de que todos, independentemente de suas falhas, têm o potencial de se tornar verdadeiros heróis.'
                    } 
    
    let postagemPeni = {'info':'Aranhaverso',
                        'titulo': 'Peni Parker',
                        'data':'15 set 2022',
                        'foto': "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                        'desc': 'Peni Parker no Aranhaverso é uma personagem que adiciona um toque de ficção científica ao universo do Homem-Aranha. Pilotando um mecha robótico, ela combina inteligência e coragem para lutar contra ameaças interdimensionais. Sua presença diversifica a equipe de heróis, mostrando como a criatividade pode transcender os limites da narrativa de super-heróis.'
                    
                    } 

    let postagemPorker = {'info':'Aranhaverso',
                        'titulo': 'Peter Porker',
                        'data':'16 set 2022',
                        'foto': "https://plus.unsplash.com/premium_photo-1683992237149-4e565fe2c91d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
                        'desc': 'Peter Porker, o Espetacular Homem-Aranha no Aranhaverso, traz uma dose de humor e absurdo para o universo do Homem-Aranha. Sendo uma versão antropomórfica de um porco, ele nos lembra que super-heróis podem surgir das formas mais inesperadas. Sua presença no filme acrescenta uma pitada de comédia e surrealismo, mostrando que, mesmo em situações absurdas, a coragem e a vontade de fazer o bem podem ser universais.'
                    
                    } 

    let postagemNoir = {'info':'Aranhaverso',
                        'titulo': 'Noir',
                        'data':'17 set 2022',
                        'foto': "https://images.unsplash.com/reserve/D4zfsMrIT3i4Fuxqs5Gm_13129149325_7560b79cf2_o.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
                        'desc': 'Noir Parker no Aranhaverso é uma visão sombria e intrigante do Homem-Aranha. Com seu traje noir e atitude implacável, ele acrescenta uma profundidade única à equipe de heróis. Sua natureza enigmática e determinação em enfrentar o crime em uma Nova York dos anos 1930 acrescentam uma camada fascinante à narrativa, revelando como diferentes contextos históricos podem moldar a essência do herói aracnídeo.'
                    } 
    return(
        <>
        <div className="titulo">
            <h1>Aranhas do Multiverso</h1>
        </div>

        <div className="posts">
            
            <Postagem post={postagemMiles}/>
            <Postagem post={postagemGwen}/>
            <Postagem post={postagemPeter}/>
            <Postagem post={postagemPeni}/>
            <Postagem post={postagemPorker}/>
            <Postagem post={postagemNoir}/>
            
        </div>


        </>
    )
}