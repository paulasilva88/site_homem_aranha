import React from 'react'
import "./escreva.css"
import { useState } from "react"

export default function Escreva(){

    const displayMsg = () => {
        setMensagem(!mensagem)
    }

    const [titulo, setTitulo] = useState("")
    const [mensagem, setMensagem] = useState("false")

    return(
        <>
            <div className='CaixaMaior'>
                <div className='CaixaInterior'>
                

                    <label>Nome do(a) Aranha</label>
                    <input 
                        type="text"
                        onChange={(event)=>{
                            setTitulo(event.target.value);
                        }}
                    
                    />

                    <label>Data</label>
                    <input 
                        type="text"
                        onChange={(event)=>{
                            setTitulo(event.target.value);
                        }}
                    
                    />
                    <label>Link da Foto</label>
                    <input 
                        type="text"
                        onChange={(event)=>{
                            setTitulo(event.target.value);
                        }}
                    
                    />
                    <label>Descrição</label>
                    <input 
                        type="text"
                        onChange={(event)=>{
                            setTitulo(event.target.value);
                        }}
                    
                    />

                    <button onClick={displayMsg}>Adicionar</button>

                    <p>{mensagem ? `` : `Aranha adicionhado(a)` }</p>


                </div>


            </div>
        
        </>
    )
}