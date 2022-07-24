import { useState } from "react"

const Formulario = () => {
    const [todo, setTodo] = useState({
        todoName: '',
        todoDescripcion: '',
        todoEstado: 'pendiente',
        todoCheck: false
    })
    const handleChange = e => {
        const {name, type, value, checked} = e.target
        setTodo({
            ...todo,
            [name]: type === "checkbox" ? checked: value,
        })
    }
    const [error, setError] = useState(false) 
    const handleSubmit = e => {
        e.preventDefault()

        const {todoName, todoDescripcion} = todo

        if(!todoName.trim() || !todoDescripcion.trim()){
            setError(true)
            return
        }
        setError(false)
    }

    const PintarError = () => (<div className="alert alert-danger">Campos obligatorios</div>)

  return (
    <>
        <h2>formulario</h2>
        {
            error && <PintarError />
        }
        <form onSubmit={handleSubmit} className="mb-2">
            <input 
                type="text" 
                name="todoName"
                className="form-control mb-2"
                placeholder="Ingrese todo"
                onChange={handleChange}
                value={todo.todoName}
            />

            <textarea 
                name="todoDescripcion" 
                className="form-control mb-2"
                placeholder="Descripcion del todo"
                onChange={handleChange}
                value={todo.todoDescripcion}
            />
            
            <select 
                name="todoEstado"
                className="form-control mb-2"
                onChange={handleChange}
                value={todo.todoEstado}
            >   
                <option value="pendiente">Pendiente</option>
                <option value="completada">Completada</option>
            </select>

            <div className="form-check mb-2">
                <input 
                    className="form-check-input" 
                    type="checkbox" 
                    onChange={handleChange}
                    value={todo.todoCheck} 
                    name="todoCheck"
                />

                <label className="form-check-label" htmlFor="flexCheckIndeterminateDisabled">
                    Dar prioridad
                </label>
            </div>
            
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

export default Formulario