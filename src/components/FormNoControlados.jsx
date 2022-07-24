import { useRef } from "react"

const FormNoControlados = () => {

    const formulario = useRef(null)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const dataForm = new FormData(formulario.current)

        const onjeto = Object.fromEntries([...dataForm.entries()])

        const {todoName, todoDescripcion} = onjeto
        if(!todoName.trim() || !todoDescripcion.trim()) {
            console.log('Ingrese algun valor')
            return
        }
        
        console.log('lo lograste bb')
    }
    
  return (
    <>
        <h2>formulario</h2>
        <form ref={formulario} onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="todoName"
                className="form-control mb-2"
                placeholder="Ingrese todo"
                defaultValue="todo 1" 
            />
            <textarea 
                name="todoDescripcion" 
                className="form-control mb-2"
                placeholder="Descripcion del todo"
                defaultValue="Descripcion todos"
            />
            <select 
                name="todoEstado"
                className="form-control mb-2"
                defaultValue="pediente"            
            >   
                <option value="pendiente">Pendiente</option>
                <option value="completada">Completada</option>
            </select>
            <button
                className="btn btn-dark"
                type="submit"
            >
                agregar
            </button>
        </form>
    
    </>
  )
}

export default FormNoControlados