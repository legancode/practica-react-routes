import React, { Component } from 'react'

class Posts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            req: false,
        }
    }

    handleReq = async () => {
        this.setState({ req: true })
        const api = 'https://jsonplaceholder.typicode.com/posts'
        const req = await fetch(api, { "method": "get" })
        const toJson = await req.json()
        const data = await toJson
        this.setState({ posts: data, req: false })
    }

    render() {
        const { posts, req } = this.state
        return (
            <div>
                <button onClick={this.handleReq}>Conseguir posts</button>
                <div>
                    {
                        req ? <div>Cargando...</div> : null
                    }
                    {
                        !req && posts.length
                            ? <ul>
                                {posts.map(p => (<div key={p.id}>{p.title}</div>))}
                            </ul>
                            : null
                    }
                </div>
            </div>
        )
    }
}

export default Posts
