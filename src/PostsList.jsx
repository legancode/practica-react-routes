import React from 'react'
import withLoader from './HOC/withLoader'

const PostsList = ({ req, posts }) => {
    return (
        posts.length
            ? <ul>
                {posts.map(p => (<li key={p.id}>{p.title}</li>))}
            </ul>
            : null
    )
}

export default withLoader('req')(PostsList)
