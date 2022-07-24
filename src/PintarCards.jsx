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
        if(!contador) {
            setClassContador(!classContador)
        }
    }

    const [classContador, setClassContador ] = useState(true)

    const pintarContador = () => {
        setClassContador(!classContador)
    }

    return(
        dataCard.map((card) => {
            return(
                <div className="card mt-3 mb-3 col-6 col-md-5" key={card.keyL}>
                    <div className={`cantidadC ${classContador ? "d-none":""}`}>
                        <button 
                            className="btn btn-danger"
                            onClick={() => Disminuir()}
                        >-</button>
                        <p className="lead mt-3 mx-2">{contador}</p>
                        <button 
                            className="btn btn-success"
                            onClick={() => Aumentar()}
                        >+</button>
                    </div>
                    <img src={img} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{card.titulo}</h5>
                        <p className="card-text">{card.parrafo}</p>
                        <button
                            type="button"
                            className="btn btn-outline-dark mb-3 w-100"
                            onClick={pintarContador}
                        >
                            agregar al carrito ❤️
                        </button>
                    </div>
                </div>
            )
        })
        
    )

}

export default PintarCards