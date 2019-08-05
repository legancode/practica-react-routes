import React from 'react'
import { log } from 'util';
import withLoader from './HOC/withLoader'

const CommentsList = props => {
    const { req, comments } = props
    return (
        comments.length
            ? <ul>
                {<div>{props.message}</div>}
                {comments.map(c => (<li key={c.id}>{c.email}</li>))}
            </ul>
            : null
    )
}

export default withLoader('req')(CommentsList)
