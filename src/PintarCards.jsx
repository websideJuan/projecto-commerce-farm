// import CardData from "./CardData"
import img from "./dataImg/deftfs.png"
import { useState } from "react"



const PintarCards = (props) => {
    const dataCard = props.props

    const [contador, setContador] = useState(0)

    const Aumentar = () => {
        setContador(contador + 1)
    }

    const Disminuir = () => {
        setContador(contador - 1)
    }

    return(
        dataCard.map((card) => {
            return(
                <div className="card" key={card.keyL}>
                    <div className={`cantidadC d-none`}>
                        <button 
                            className="button1"
                            onClick={() => Disminuir()}
                        >-</button>
                        <p className="contador">{contador}</p>
                        <button 
                            className="button2"
                            onClick={() => Aumentar()}
                        >+</button>
                    </div>
                    <img src={img} className="card-img" alt="" />
                    <div className="card-content">
                        <h3 className="title-card">{card.titulo}</h3>
                        <p className="card-text">{card.parrafo}</p>
                        <button
                            type="button"
                            className="btn btn-id"
                            onClick={() => {
                                console.log('click')
                            }}
                        >
                            agregar al carrito
                        </button>
                    </div>
                </div>
            )
        })
        
    )
    // const getUrls = "https://jsonplaceholder.typicode.com/posts"

    // window.addEventListener('DOMContentLoaded', () => (JsonAsync()))

    // const JsonAsync = async () => {
    //     try {
    //         const cards = await fetch(getUrls)
    //         const dataCrads = await cards.json()
    //         CardData(dataCrads)

    //     } catch (error) {
    //             console.log(error)
    //     }
    // }
}

export default PintarCards