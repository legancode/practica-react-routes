import React, { Component } from 'react'
import CommentsList from './CommentsList'

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
                    <CommentsList comments={comments} req={req} />
                </div>
            </div>
        )
    }
}

export default Comments

