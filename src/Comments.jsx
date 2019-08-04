import React, { Component } from 'react'

class Comments extends Component {
    constructor(props) {
        super(props)

        this.state = {
            comments: [],
            // req Para poder mostrar "cargando..." en la interfaz o desaparecerlo
            req: false,
        }
    }

    handleReq = async () => {
        // Al llamar a la peticion, se activa el "cargando..."
        this.setState({ req: true })
        const api = 'https://jsonplaceholder.typicode.com/comments'
        const req = await fetch(api, { "method": "get" })
        const toJson = await req.json()
        const data = await toJson
        // Al terminar la peticion, se elimina "cargando..."
        this.setState({ comments: data, req: false })
    }

    render() {
        const { comments, req } = this.state
        return (
            <div>
                <button onClick={this.handleReq}>Conseguir comentarios</button>
                <div>
                    {   // Comprobamos si se muestra o no "cargando..." en base al req que esta en el state.
                        req ? <div>Cargando...</div> : null
                    }
                    {   // Esta segunda comprobacion es para estar seguros de que no este "cargando..."
                        // y a la vez, exista contenido en comments para mostrarlo en la interfaz.
                        !req && comments.length
                            ? <ul>
                                {comments.map(c => (<div key={c.id}>{c.email}</div>))}
                            </ul>
                            : null
                    }
                </div>
            </div>
        )
    }
}

export default Comments

