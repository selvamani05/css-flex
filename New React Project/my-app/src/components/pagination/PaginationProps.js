import React from 'react'

function PaginationProps(props) {
    return (
        <div>
            <p>UserName :-{props.data.userId}</p>
            <p>Id :-{props.data.id}</p>
            <p>Title :-{props.data.title}</p>
            <p>Body: {props.data.body}</p>
        </div>
    )
}

export default PaginationProps