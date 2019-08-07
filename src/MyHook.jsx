import React, { useState } from 'react'

const MyHook = () => {

    const [state, setState] = useState({
        title: 'un titulo',
        categoria: 'misterio',
        price: 45
    })

    const changeTitle = text => {
        setState({
            ...state,
            title: text
        })
    }

    return (
        <div>
            <div>Datos mostrados desde un estado</div>
            <ul>
                <li>{state.title}</li>
                <li>{state.categoria}</li>
                <li>{state.price}</li>
            </ul>
            <button onClick={changeTitle.bind(this, 'nuevo titulo')}>Cambiar titulo</button>
        </div>
    )
}

export default MyHook
