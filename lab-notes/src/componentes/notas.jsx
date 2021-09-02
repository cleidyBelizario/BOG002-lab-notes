import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid";


const CrearNotas = () => {

    //const notasNuevas =[
    //    {id: uuidv4(), titulo: '',  descripcion:''}
    //]

    const [nota, setNota] = useState('')
    const [notas, setNotas] = useState([])
    const [modoEdicion, setModoEdicion] = useState(false)
    const [id, setId] = useState('')
    const [error, setError] = useState(null)

    const agregarnota = e => {
        e.preventDefault()
        if (!nota.trim()) {
            console.log('Campo vacio')
            setError('El campo no puede estar Vacío')
            return
        }
        setNotas([
            ...notas,
            { nota, id: uuidv4() }
        ])
        setNota('')
        setError(null)
    }

    const eliminarnota = id => {
        const arrayFiltrado = notas.filter(item => item.id !== id)
        setNotas(arrayFiltrado)
    }

    const editar = item => {
        setModoEdicion(true)
        setNota(item.nota)
        setId(item.id)
    }

    const editarnota = e => {
        e.preventDefault()
        if (!nota.trim()) {
            console.log('Campo vacio')
            setError('El campo no puede estar vacío')
            return
        }

        const arrayEditado = notas.map(item => item.id === id ? { id, nota } : item)
        setNotas(arrayEditado)
        setModoEdicion(false)
        setNota('')
        setId('')
        setError(null)
    }

    return (
        <div>
            <h1>EASY NOTES</h1>
            <hr />
            <div>
                <div>
                    <h4> Recuerdalo todo con tus notas y organiza tu vida </h4>
                    <div className= "nuevasNotas">
                        {
                            notas.length === 0 ? (
                                <div>Sin notas</div>
                            ) : (
                                notas.map(item => (
                                    <div key={item.id}>
                                        <span>{item.nota}</span>
                                        <br />
                                        <button
                                            className="btn"
                                            onClick={() => eliminarnota(item.id)}
                                        >Eliminar</button>
                                        <button
                                            className="btn"
                                            onClick={() => editar(item)}
                                        >Editar</button>
                                    </div>
                                ))
                            )
                        }
                    </div>
                </div>
                <div>
                    <h4>
                        {
                            modoEdicion ? 'Editar nota' : 'Agregar nota'
                        }
                    </h4>
                    <form onSubmit={modoEdicion ? editarnota : agregarnota}>
                        {
                            error ? <span className="text-danger">{error}</span> : null
                        }
                        <input
                            type="text"
                            placeholder="Descripcion de las notas"
                            onChange={e => setNota(e.target.value)}
                            value={nota}
                        />
                        <br />
                        {
                            modoEdicion ? (
                                <button className="btn" type="submit">Editar</button>
                            ) : (
                                <button className="btn" type="submit">Agregar</button>
                            )
                        }
                    </form>
                </div>
            </div>
        </div>
    );
}
export default CrearNotas;